'use client';

import { useState } from 'react';

interface PDFUploaderProps {
  onUploadSuccess?: (fileData: any) => void;
}

const PDFUploader = ({ onUploadSuccess }: PDFUploaderProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [roles, setRoles] = useState<string[]>(['hr', 'admin']);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const availableRoles = [
    { id: 'hr', label: 'HR' },
    { id: 'newHire', label: 'New Hire' },
    { id: 'electrician', label: 'Electrician' },
    { id: 'projectManager', label: 'Project Manager' },
    { id: 'admin', label: 'Admin' }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type !== 'application/pdf') {
        setError('Only PDF files are allowed');
        setFile(null);
        return;
      }
      setFile(selectedFile);
      setError('');
    }
  };

  const toggleRole = (roleId: string) => {
    if (roles.includes(roleId)) {
      setRoles(roles.filter(r => r !== roleId));
    } else {
      setRoles([...roles, roleId]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please select a PDF file');
      return;
    }

    if (!title.trim()) {
      setError('Please enter a title');
      return;
    }

    if (roles.length === 0) {
      setError('Please select at least one role');
      return;
    }

    setIsUploading(true);
    setError('');
    setSuccess('');

    // In a real implementation, you would upload to your API
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('title', title);
      formData.append('description', description);
      formData.append('roles', JSON.stringify(roles));

      // Mock API call - replace with actual API endpoint
      // const response = await fetch('/api/upload-pdf', {
      //   method: 'POST',
      //   body: formData,
      // });
      
      // if (!response.ok) {
      //   throw new Error('Failed to upload file');
      // }
      
      // const data = await response.json();

      // Mock successful upload
      setTimeout(() => {
        const mockData = {
          id: 'doc-' + Math.random().toString(36).substr(2, 9),
          title,
          description,
          fileName: file.name,
          fileSize: file.size,
          fileType: file.type,
          roles,
          uploadedAt: new Date().toISOString()
        };
        
        setIsUploading(false);
        setSuccess('File uploaded successfully!');
        setTitle('');
        setDescription('');
        setFile(null);
        
        if (onUploadSuccess) {
          onUploadSuccess(mockData);
        }
      }, 1500);
    } catch (err) {
      setIsUploading(false);
      setError('Failed to upload file. Please try again.');
      console.error('Upload error:', err);
    }
  };

  return (
    <div className="bg-gray-dark/30 rounded-lg border border-gray-light/10 p-6 backdrop-blur-sm">
      <h2 className="text-xl font-semibold text-foreground mb-4">Upload PDF Document</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-light text-sm font-medium mb-2">
            PDF File
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col w-full h-32 border-2 border-dashed border-gray-light/30 rounded-lg cursor-pointer hover:bg-gray-dark/50 transition-colors">
              <div className="flex flex-col items-center justify-center pt-7">
                {file ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="pt-1 text-sm tracking-wider text-gray-light">{file.name}</p>
                    <p className="text-xs text-gray">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="pt-1 text-sm tracking-wider text-gray">Drag and drop or click to select</p>
                    <p className="text-xs text-gray">PDF files only</p>
                  </>
                )}
              </div>
              <input 
                type="file" 
                className="opacity-0" 
                accept=".pdf,application/pdf" 
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-light text-sm font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 bg-gray-dark/50 border border-gray-light/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter document title"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-light text-sm font-medium mb-2">
            Description (Optional)
          </label>
          <textarea
            className="w-full px-3 py-2 bg-gray-dark/50 border border-gray-light/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter document description"
            rows={3}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-light text-sm font-medium mb-2">
            Who can access this document?
          </label>
          <div className="flex flex-wrap gap-2">
            {availableRoles.map(role => (
              <button
                key={role.id}
                type="button"
                onClick={() => toggleRole(role.id)}
                className={`px-3 py-1 rounded-full text-sm ${
                  roles.includes(role.id)
                    ? 'bg-primary text-white'
                    : 'bg-gray-dark/50 text-gray-light hover:bg-gray-dark/70'
                }`}
              >
                {role.label}
              </button>
            ))}
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-md text-red-400 text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-green-500/20 border border-green-500/30 rounded-md text-green-400 text-sm">
            {success}
          </div>
        )}

        <button
          type="submit"
          disabled={isUploading}
          className={`w-full py-2 px-4 rounded-md text-white font-medium ${
            isUploading
              ? 'bg-primary/50 cursor-not-allowed'
              : 'bg-primary hover:bg-primary/80'
          }`}
        >
          {isUploading ? 'Uploading...' : 'Upload Document'}
        </button>
      </form>
    </div>
  );
};

export default PDFUploader; 