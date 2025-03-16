import { Pool, QueryResult } from 'pg';

// Define types for database tables based on the existing schema
export interface User {
  id: string;
  email: string;
  password_hash?: string;
  first_name?: string;
  last_name?: string;
  created_at: Date;
  last_login?: Date;
  active: boolean;
}

export interface Role {
  id: string;
  name: string;
  description?: string;
}

export interface Permission {
  id: string;
  name: string;
  description?: string;
}

export interface Document {
  id: string;
  title: string;
  description?: string;
  file_path: string;
  file_name: string;
  file_size: number;
  file_type: string;
  uploaded_by: string;
  created_at: Date;
  updated_at: Date;
  metadata?: any;
}

export interface DocumentChunk {
  id: string;
  document_id: string;
  chunk_index: number;
  content: string;
  embedding?: any;
  metadata?: any;
}

// Create a connection pool to the PostgreSQL database
const pool = new Pool({
  user: process.env.POSTGRES_USER || 'xa1murphy',
  host: process.env.POSTGRES_HOST || 'localhost',
  database: 'helpdesk_db',
  password: process.env.POSTGRES_PASSWORD || '',
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
});

// Test the connection
pool.query('SELECT NOW()', (err: Error | null, res: QueryResult<any>) => {
  if (err) {
    console.error('Error connecting to PostgreSQL database:', err);
  } else {
    console.log('Connected to PostgreSQL database at:', res.rows[0].now);
  }
});

// Helper function to execute queries
export async function query(text: string, params?: any[]): Promise<QueryResult<any>> {
  try {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Executed query', { text, duration, rows: res.rowCount });
    return res;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}

// User-related database functions
export async function getUserByEmail(email: string): Promise<User | null> {
  const result = await query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0] || null;
}

export async function getUserRoles(userId: string): Promise<Role[]> {
  const result = await query(
    'SELECT r.* FROM roles r JOIN user_roles ur ON r.id = ur.role_id WHERE ur.user_id = $1',
    [userId]
  );
  return result.rows;
}

export async function getUserPermissions(userId: string): Promise<Permission[]> {
  const result = await query(
    `SELECT DISTINCT p.* 
     FROM permissions p 
     JOIN role_permissions rp ON p.id = rp.permission_id 
     JOIN user_roles ur ON rp.role_id = ur.role_id 
     WHERE ur.user_id = $1`,
    [userId]
  );
  return result.rows;
}

// Document-related database functions
export async function getDocuments(userId: string): Promise<Document[]> {
  // Get user's roles
  const userRoles = await getUserRoles(userId);
  const roleIds = userRoles.map(role => role.id);
  
  // Get documents based on permissions
  const result = await query(
    `SELECT DISTINCT d.* 
     FROM documents d
     JOIN permissions p ON TRUE
     JOIN role_permissions rp ON p.id = rp.permission_id
     WHERE rp.role_id = ANY($1::uuid[])
     AND (
       (p.name = 'VIEW_ALL') OR
       (p.name = 'VIEW_BIM_DOCS' AND d.file_type ILIKE '%bim%') OR
       (p.name = 'VIEW_PROJECT_SPECS' AND d.file_type ILIKE '%project%') OR
       (p.name = 'VIEW_SAFETY_DOCS' AND d.file_type ILIKE '%safety%') OR
       (p.name = 'VIEW_ONBOARDING' AND d.file_type ILIKE '%onboarding%')
     )
     ORDER BY d.created_at DESC`,
    [roleIds]
  );
  
  return result.rows;
}

export async function getDocumentById(id: string): Promise<Document | null> {
  const result = await query('SELECT * FROM documents WHERE id = $1', [id]);
  return result.rows[0] || null;
}

export async function getDocumentChunks(documentId: string): Promise<DocumentChunk[]> {
  const result = await query(
    'SELECT * FROM document_chunks WHERE document_id = $1 ORDER BY chunk_index',
    [documentId]
  );
  return result.rows;
}

export default {
  query,
  pool,
  getUserByEmail,
  getUserRoles,
  getUserPermissions,
  getDocuments,
  getDocumentById,
  getDocumentChunks
}; 