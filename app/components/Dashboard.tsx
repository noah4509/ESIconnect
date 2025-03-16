'use client';

import { ReactNode, useState } from 'react';
import Logo from './Logo';
import Footer from './Footer';
import LogoIcon from './LogoIcon';
import Link from 'next/link';

interface DashboardProps {
  title: string;
  children: ReactNode;
}

const Dashboard = ({ title, children }: DashboardProps) => {
  const [showDashboardMenu, setShowDashboardMenu] = useState(false);

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('selectedDashboard');
    localStorage.removeItem('userEmail');
    
    // Navigate to home page
    window.location.href = '/';
  };

  const switchDashboard = (dashboardType: string) => {
    // Store the selected dashboard in localStorage
    localStorage.setItem('selectedDashboard', dashboardType);
    
    // Reload the page to apply the change
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-gray-dark/50 border-b border-gray-light/10 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Logo />
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button 
                  onClick={() => setShowDashboardMenu(!showDashboardMenu)}
                  className="flex items-center text-gray hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-dark"
                  aria-label="Switch Dashboard"
                  title="Switch to another dashboard"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-1">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                  <span>Switch Dashboard</span>
                </button>
                
                {showDashboardMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-gray-dark/90 rounded-md shadow-lg border border-gray-light/10 z-20">
                    <div className="py-1">
                      <button 
                        onClick={() => switchDashboard('hr')}
                        className="w-full text-left px-4 py-2 text-sm text-gray-light hover:bg-gray-dark/80 hover:text-white"
                      >
                        HR Dashboard
                      </button>
                      <button 
                        onClick={() => switchDashboard('newHire')}
                        className="w-full text-left px-4 py-2 text-sm text-gray-light hover:bg-gray-dark/80 hover:text-white"
                      >
                        New Hire Dashboard
                      </button>
                      <button 
                        onClick={() => switchDashboard('electrician')}
                        className="w-full text-left px-4 py-2 text-sm text-gray-light hover:bg-gray-dark/80 hover:text-white"
                      >
                        Electrician Dashboard
                      </button>
                      <button 
                        onClick={() => switchDashboard('projectManager')}
                        className="w-full text-left px-4 py-2 text-sm text-gray-light hover:bg-gray-dark/80 hover:text-white"
                      >
                        PM Dashboard
                      </button>
                      <button 
                        onClick={() => switchDashboard('admin')}
                        className="w-full text-left px-4 py-2 text-sm text-gray-light hover:bg-gray-dark/80 hover:text-white"
                      >
                        Admin Dashboard
                      </button>
                      <button 
                        onClick={() => switchDashboard('landing')}
                        className="w-full text-left px-4 py-2 text-sm text-gray-light hover:bg-gray-dark/80 hover:text-white"
                      >
                        Main Dashboard
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <Link 
                href="/landing"
                className="flex items-center text-gray hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-dark"
                aria-label="Account"
                title="Account settings"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-1">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Account</span>
              </Link>
              <Link 
                href="/landing"
                className="flex items-center text-gray hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-dark"
                aria-label="Back"
                title="Go back to main dashboard"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <span className="ml-1">Back</span>
              </Link>
              <button 
                onClick={handleLogout}
                className="flex items-center text-gray hover:text-warning transition-colors p-2 rounded-full hover:bg-gray-dark"
                aria-label="Logout"
                title="Logout and return to login page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                <span className="ml-1">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center mb-8">
            <LogoIcon size={32} className="mr-3" />
            <h1 className="text-3xl font-bold text-foreground bg-gradient-to-r from-white to-gray bg-clip-text text-transparent">{title}</h1>
          </div>
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard; 