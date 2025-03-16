'use client';

import { useState, useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import PDFUploader from '../components/PDFUploader';
import PDFChat from '../components/PDFChat';
import Card from '../components/Card';

// Define types for the data we'll receive from the API
interface User {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  active: boolean;
  created_at: Date;
}

interface Role {
  id: string;
  name: string;
  description?: string;
}

interface Document {
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
}

const AdminDashboard = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [activeTab, setActiveTab] = useState('documents');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userRoles, setUserRoles] = useState<Role[]>([]);

  // Fetch user and documents from the API
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Get the current user based on the email in localStorage or use default admin
        const userEmail = localStorage.getItem('userEmail') || 'chris.miller@esielectrical.com';
        
        // Check if the user is one of our admins
        const isAdmin = ['chris.miller@esielectrical.com', 'tyler.murphy@esielectrical.com'].includes(userEmail);
        
        if (!isAdmin) {
          throw new Error('Unauthorized access. Only admins can view this dashboard.');
        }
        
        // Fetch user data from the API
        const userResponse = await fetch(`/api/users?email=${encodeURIComponent(userEmail)}`);
        
        if (!userResponse.ok) {
          throw new Error('Failed to fetch user data');
        }
        
        const userData = await userResponse.json();
        setCurrentUser(userData.user);
        setUserRoles(userData.roles);
        
        // Fetch documents from the API
        const documentsResponse = await fetch(`/api/documents?email=${encodeURIComponent(userEmail)}`);
        
        if (!documentsResponse.ok) {
          throw new Error('Failed to fetch documents');
        }
        
        const documentsData = await documentsResponse.json();
        setDocuments(documentsData.documents);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data. Please try again later.');
        
        // Fallback to mock data if API calls fail
        setDocuments([
          {
            id: 'doc-1',
            title: 'Employee Handbook 2023',
            file_name: 'employee-handbook-2023.pdf',
            file_size: 2500000,
            file_type: 'application/pdf',
            description: 'Official employee handbook with company policies and procedures',
            file_path: '/uploads/OPERATIONS/ESI Employee Handbook 2021.pdf',
            uploaded_by: 'admin',
            created_at: new Date('2023-05-15T10:30:00Z'),
            updated_at: new Date('2023-05-15T10:30:00Z')
          },
          {
            id: 'doc-2',
            title: 'Safety Protocols',
            file_name: 'safety-protocols.pdf',
            file_size: 1800000,
            file_type: 'application/pdf',
            description: 'Safety guidelines for electrical work',
            file_path: '/uploads/OPERATIONS/ESI Operations Manual May 2022 Final.pdf',
            uploaded_by: 'admin',
            created_at: new Date('2023-06-22T14:15:00Z'),
            updated_at: new Date('2023-06-22T14:15:00Z')
          },
          {
            id: 'doc-3',
            title: 'New Hire Onboarding Checklist',
            file_name: 'onboarding-checklist.pdf',
            file_size: 950000,
            file_type: 'application/pdf',
            description: 'Step-by-step guide for onboarding new employees',
            file_path: '/uploads/BENEFITS/ESI Open Enrollment Guide 2025.pdf',
            uploaded_by: 'admin',
            created_at: new Date('2023-07-10T09:45:00Z'),
            updated_at: new Date('2023-07-10T09:45:00Z')
          }
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleUploadSuccess = (newDocument: any) => {
    setDocuments([newDocument, ...documents]);
  };

  const handleDeleteDocument = async (documentId: string) => {
    try {
      // In a real implementation, this would call an API to delete from helpdesk_db
      // await fetch(`/api/documents/${documentId}`, { method: 'DELETE' });
      
      // For now, just update the UI
      setDocuments(documents.filter(doc => doc.id !== documentId));
    } catch (err) {
      console.error('Error deleting document:', err);
      alert('Failed to delete document. Please try again.');
    }
  };

  // Get document access roles based on permissions
  const getDocumentRoles = (document: Document) => {
    const roles = [];
    
    if (document.file_type.toLowerCase().includes('bim')) {
      roles.push('BIM_USER');
    }
    
    if (document.file_type.toLowerCase().includes('project')) {
      roles.push('PROJECT_MANAGER');
    }
    
    if (document.file_type.toLowerCase().includes('safety')) {
      roles.push('ELECTRICIAN');
    }
    
    if (document.file_type.toLowerCase().includes('onboarding')) {
      roles.push('NEW_HIRE');
    }
    
    // Admin always has access
    roles.push('ADMIN');
    
    return roles;
  };

  return (
    <Dashboard title="Admin Dashboard">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
        <p className="text-gray">
          {currentUser ? `Welcome, ${currentUser.first_name || currentUser.email.split('@')[0]}! Manage documents and system settings.` : 'Manage documents and system settings'}
        </p>
      </div>

      <div className="mb-6">
        <div className="border-b border-gray-light/10 flex">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'documents'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray hover:text-gray-light'
            }`}
            onClick={() => setActiveTab('documents')}
          >
            Document Management
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'chat'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray hover:text-gray-light'
            }`}
            onClick={() => setActiveTab('chat')}
          >
            Document Chat
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'users'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray hover:text-gray-light'
            }`}
            onClick={() => setActiveTab('users')}
          >
            User Management
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'settings'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray hover:text-gray-light'
            }`}
            onClick={() => setActiveTab('settings')}
          >
            System Settings
          </button>
        </div>
      </div>

      {activeTab === 'documents' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card title="Document Library">
              {error && (
                <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-md text-red-400 text-sm">
                  {error}
                </div>
              )}
              
              {isLoading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
              ) : documents.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-light/10">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-light uppercase tracking-wider">Document</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-light uppercase tracking-wider">Access</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-light uppercase tracking-wider">Uploaded</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-light uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-light/10">
                      {documents.map((doc) => (
                        <tr key={doc.id} className="hover:bg-gray-dark/30">
                          <td className="px-4 py-4">
                            <div className="flex items-start">
                              <div className="p-2 rounded-md bg-gray-dark/50 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-foreground">{doc.title}</div>
                                <div className="text-xs text-gray">{doc.file_name}</div>
                                {doc.description && <div className="text-xs text-gray mt-1">{doc.description}</div>}
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex flex-wrap gap-1">
                              {getDocumentRoles(doc).map(role => (
                                <span key={role} className="px-2 py-1 text-xs rounded-full bg-gray-dark/50 text-gray-light">
                                  {role}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray">
                            {new Date(doc.created_at).toLocaleDateString()}
                          </td>
                          <td className="px-4 py-4 text-sm">
                            <div className="flex space-x-2">
                              <button className="p-1 text-primary hover:text-primary/80 transition-colors" title="View Document">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                              </button>
                              <button className="p-1 text-warning hover:text-warning/80 transition-colors" title="Edit Document">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                              </button>
                              <button 
                                className="p-1 text-red-500 hover:text-red-400 transition-colors" 
                                title="Delete Document"
                                onClick={() => handleDeleteDocument(doc.id)}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="mt-4 text-gray">No documents found</p>
                  <p className="mt-2 text-sm text-gray">Upload your first document to get started</p>
                </div>
              )}
            </Card>
          </div>
          
          <div>
            <PDFUploader onUploadSuccess={handleUploadSuccess} />
          </div>
        </div>
      )}

      {activeTab === 'chat' && (
        <div>
          <PDFChat documents={documents.map(doc => ({
            id: doc.id,
            title: doc.title,
            fileName: doc.file_name
          }))} />
        </div>
      )}

      {activeTab === 'users' && (
        <Card title="User Management">
          <p className="text-gray mb-4">Manage users and their permissions in the helpdesk_db database.</p>
          
          <div className="bg-primary/10 border border-primary/20 rounded-md p-4 text-primary text-sm mb-6">
            <p>Connected to helpdesk_db database with the following users:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>chris.miller@esielectrical.com (ADMIN)</li>
              <li>tyler.murphy@esielectrical.com (BIM_USER, ADMIN)</li>
              <li>bim.user1@esielectrical.com (employee, EMPLOYEE)</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3">Role Permissions</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-light/10">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-light uppercase tracking-wider">Role</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-light uppercase tracking-wider">Permissions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-light/10">
                  <tr>
                    <td className="px-4 py-4 font-medium">ADMIN</td>
                    <td className="px-4 py-4">
                      <div className="flex flex-wrap gap-1">
                        {['VIEW_ALL', 'EDIT_ALL', 'CREATE_ALL', 'DELETE_ALL', 'MANAGE_TEAM'].map(perm => (
                          <span key={perm} className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary">
                            {perm}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium">BIM_USER</td>
                    <td className="px-4 py-4">
                      <div className="flex flex-wrap gap-1">
                        {['VIEW_BIM_DOCS', 'EDIT_BIM_DOCS', 'VIEW_PROJECT_SPECS'].map(perm => (
                          <span key={perm} className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary">
                            {perm}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium">PROJECT_MANAGER</td>
                    <td className="px-4 py-4">
                      <div className="flex flex-wrap gap-1">
                        {['VIEW_PROJECT_SPECS', 'EDIT_PROJECT_SPECS', 'MANAGE_TEAM'].map(perm => (
                          <span key={perm} className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary">
                            {perm}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      )}

      {activeTab === 'settings' && (
        <Card title="System Settings">
          <p className="text-gray mb-4">Configure application settings and database connections.</p>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Database Connection</h3>
            <div className="bg-gray-dark/30 p-4 rounded-md border border-gray-light/10">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-light mb-1">Database Name</p>
                  <p className="font-medium">helpdesk_db</p>
                </div>
                <div>
                  <p className="text-sm text-gray-light mb-1">Status</p>
                  <p className="font-medium text-green-500">Connected</p>
                </div>
                <div>
                  <p className="text-sm text-gray-light mb-1">Server</p>
                  <p className="font-medium">ESI_DOCS_SERVER</p>
                </div>
                <div>
                  <p className="text-sm text-gray-light mb-1">Last Sync</p>
                  <p className="font-medium">{new Date().toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Application Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Enable Document Chat</p>
                  <p className="text-sm text-gray">Allow users to chat with documents using AI</p>
                </div>
                <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full">
                  <input
                    type="checkbox"
                    id="toggle-chat"
                    className="absolute w-6 h-6 transition duration-200 ease-in-out transform bg-white rounded-full appearance-none cursor-pointer peer border border-gray-light/20 checked:right-0 checked:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                    defaultChecked
                  />
                  <label
                    htmlFor="toggle-chat"
                    className="block w-full h-full overflow-hidden rounded-full cursor-pointer bg-gray-dark/50 peer-checked:bg-primary/70"
                  ></label>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Auto-Sync with Database</p>
                  <p className="text-sm text-gray">Automatically sync documents with helpdesk_db</p>
                </div>
                <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full">
                  <input
                    type="checkbox"
                    id="toggle-sync"
                    className="absolute w-6 h-6 transition duration-200 ease-in-out transform bg-white rounded-full appearance-none cursor-pointer peer border border-gray-light/20 checked:right-0 checked:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                    defaultChecked
                  />
                  <label
                    htmlFor="toggle-sync"
                    className="block w-full h-full overflow-hidden rounded-full cursor-pointer bg-gray-dark/50 peer-checked:bg-primary/70"
                  ></label>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Use Local Ollama for LLM</p>
                  <p className="text-sm text-gray">Connect to local Ollama instance for document chat</p>
                </div>
                <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full">
                  <input
                    type="checkbox"
                    id="toggle-ollama"
                    className="absolute w-6 h-6 transition duration-200 ease-in-out transform bg-white rounded-full appearance-none cursor-pointer peer border border-gray-light/20 checked:right-0 checked:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                    defaultChecked
                  />
                  <label
                    htmlFor="toggle-ollama"
                    className="block w-full h-full overflow-hidden rounded-full cursor-pointer bg-gray-dark/50 peer-checked:bg-primary/70"
                  ></label>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </Dashboard>
  );
};

export default AdminDashboard; 