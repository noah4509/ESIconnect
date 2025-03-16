'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Dashboard from '../components/Dashboard';
import Card from '../components/Card';
import RoleIcon from '../components/RoleIcon';

export default function LandingPage() {
  const router = useRouter();
  const [userName, setUserName] = useState('User');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const selectedDashboard = localStorage.getItem('selectedDashboard');
    const userEmail = localStorage.getItem('userEmail');
    
    if (!selectedDashboard && !userEmail) {
      // If not logged in, redirect to login page
      window.location.href = '/';
      return;
    }

    // Set user name from email if available
    if (userEmail) {
      const name = userEmail.split('@')[0].split('.').map(part => 
        part.charAt(0).toUpperCase() + part.slice(1)
      ).join(' ');
      setUserName(name);
      
      // Check if user is admin
      setIsAdmin(['chris.miller@esielectrical.com', 'tyler.murphy@esielectrical.com'].includes(userEmail));
    }
  }, []);

  const navigateToDashboard = (dashboardType: string) => {
    // Store the selected dashboard in localStorage
    localStorage.setItem('selectedDashboard', dashboardType);
    
    // Navigate to the home page which will load the appropriate dashboard
    window.location.href = '/';
  };

  return (
    <Dashboard title="Main Dashboard">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Welcome, {userName}</h1>
        <p className="text-gray">
          Select a dashboard to access your role-specific documents and tools
        </p>
      </div>

      <Card title="Dashboard Selection">
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 lg:gap-20 my-10">
          <DashboardOption 
            id="hr" 
            label="HR Dashboard" 
            description="Access HR documents, policies, and employee information"
            onClick={() => navigateToDashboard('hr')}
          />
          
          <DashboardOption 
            id="newHire" 
            label="New Hire Dashboard" 
            description="Onboarding materials and new employee resources"
            onClick={() => navigateToDashboard('newHire')}
          />
          
          <DashboardOption 
            id="electrician" 
            label="Electrician Dashboard" 
            description="Technical documents, safety protocols, and field resources"
            onClick={() => navigateToDashboard('electrician')}
          />
          
          <DashboardOption 
            id="projectManager" 
            label="PM Dashboard" 
            description="Project specifications, timelines, and management tools"
            onClick={() => navigateToDashboard('projectManager')}
          />
          
          {isAdmin && (
            <DashboardOption 
              id="admin" 
              label="Admin Dashboard" 
              description="System administration, user management, and document control"
              onClick={() => navigateToDashboard('admin')}
            />
          )}
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Card title="Recent Documents">
          <div className="space-y-4 py-2">
            <DocumentItem 
              title="Employee Handbook 2023" 
              type="PDF" 
              date="May 15, 2023" 
              dashboard="HR"
            />
            <DocumentItem 
              title="Safety Protocols" 
              type="PDF" 
              date="Jun 22, 2023" 
              dashboard="Electrician"
            />
            <DocumentItem 
              title="New Hire Onboarding Checklist" 
              type="PDF" 
              date="Jul 10, 2023" 
              dashboard="New Hire"
            />
          </div>
        </Card>

        <Card title="Quick Links">
          <div className="space-y-4 py-2">
            <QuickLink 
              title="Company Directory" 
              description="Find contact information for all employees"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
            />
            <QuickLink 
              title="Document Search" 
              description="Search across all accessible documents"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              }
            />
            <QuickLink 
              title="Help & Support" 
              description="Get assistance with the ESIconnect platform"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
          </div>
        </Card>
      </div>
    </Dashboard>
  );
}

// Helper components
interface DashboardOptionProps {
  id: string;
  label: string;
  description: string;
  onClick: () => void;
}

function DashboardOption({ id, label, description, onClick }: DashboardOptionProps) {
  return (
    <div 
      className="flex flex-col items-center cursor-pointer w-40 transition-transform hover:scale-105" 
      onClick={onClick}
    >
      <RoleIcon 
        role={id as 'hr' | 'newHire' | 'electrician' | 'projectManager' | 'admin'} 
        className="mb-3 transition-transform hover:scale-110"
      />
      <span className="text-lg font-medium text-foreground text-center mb-1">
        {label}
      </span>
      <p className="text-xs text-gray text-center">
        {description}
      </p>
    </div>
  );
}

interface DocumentItemProps {
  title: string;
  type: string;
  date: string;
  dashboard: string;
}

function DocumentItem({ title, type, date, dashboard }: DocumentItemProps) {
  return (
    <div className="flex items-start p-3 hover:bg-gray-dark/30 rounded-md transition-colors cursor-pointer">
      <div className="p-2 rounded-md bg-gray-dark/50 mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <div>
        <div className="text-sm font-medium text-foreground">{title}</div>
        <div className="flex items-center mt-1">
          <span className="text-xs text-gray mr-2">{type}</span>
          <span className="text-xs text-gray mr-2">•</span>
          <span className="text-xs text-gray mr-2">{date}</span>
          <span className="text-xs text-gray mr-2">•</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-dark/50 text-gray-light">{dashboard}</span>
        </div>
      </div>
    </div>
  );
}

interface QuickLinkProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function QuickLink({ title, description, icon }: QuickLinkProps) {
  return (
    <div className="flex items-center p-3 hover:bg-gray-dark/30 rounded-md transition-colors cursor-pointer">
      <div className="p-2 rounded-md bg-gray-dark/50 mr-3 text-primary">
        {icon}
      </div>
      <div>
        <div className="text-sm font-medium text-foreground">{title}</div>
        <div className="text-xs text-gray mt-0.5">{description}</div>
      </div>
    </div>
  );
} 