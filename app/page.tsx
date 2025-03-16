'use client';

import { useState, useEffect } from 'react';
import Logo from './components/Logo';
import LogoIcon from './components/LogoIcon';
import LoginForm from './components/LoginForm';
import RoleSelector from './components/RoleSelector';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import HRDashboard from './dashboards/HRDashboard';
import NewHireDashboard from './dashboards/NewHireDashboard';
import ProjectManagerDashboard from './dashboards/ProjectManagerDashboard';
import AdminDashboard from './dashboards/AdminDashboard';
import ElectricianDashboard from './dashboards/ElectricianDashboard';
import RoleIcon from './components/RoleIcon';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeRole, setActiveRole] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedDashboard, setSelectedDashboard] = useState<string | null>(null);

  // Check for stored dashboard selection and login state
  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      const storedDashboard = localStorage.getItem('selectedDashboard');
      
      if (storedDashboard) {
        // If the selected dashboard is 'landing', redirect to the landing page
        if (storedDashboard === 'landing') {
          window.location.href = '/landing';
          return;
        }
        
        setSelectedDashboard(storedDashboard);
        setIsLoggedIn(true);
        // For admin access to all dashboards
        setIsAdmin(true);
      } else {
        // Reset state when no stored dashboard is found
        setIsLoggedIn(false);
        setActiveRole(null);
        setIsAdmin(false);
        setSelectedDashboard(null);
      }
    }
  }, []);

  const handleLogin = (email: string, password: string) => {
    // In a real application, this would validate credentials against a backend
    // For demo purposes, we'll use simple role assignment based on email prefix
    
    // Special case for admin emails
    if (email.toLowerCase() === 'chris.miller@esielectrical.com' || 
        email.toLowerCase() === 'tyler.murphy@esielectrical.com') {
      setIsAdmin(true);
      setIsLoggedIn(true);
      // Store the email for use in the admin dashboard
      localStorage.setItem('userEmail', email.toLowerCase());
      
      // Redirect to the landing page after login for admins
      localStorage.setItem('selectedDashboard', 'landing');
      window.location.href = '/landing';
      return;
    }
    
    const emailPrefix = email.split('@')[0].toLowerCase();
    
    if (emailPrefix.includes('hr')) {
      setActiveRole('hr');
    } else if (emailPrefix.includes('new') || emailPrefix.includes('hire')) {
      setActiveRole('newHire');
    } else if (emailPrefix.includes('electric')) {
      setActiveRole('electrician');
    } else if (emailPrefix.includes('pm') || emailPrefix.includes('project')) {
      setActiveRole('projectManager');
    } else if (emailPrefix.includes('admin')) {
      setActiveRole('admin');
    } else {
      // Default role if no match
      setActiveRole('newHire');
    }
    
    setIsLoggedIn(true);
    
    // For regular users, also redirect to landing page after login
    localStorage.setItem('userEmail', email.toLowerCase());
    localStorage.setItem('selectedDashboard', 'landing');
    window.location.href = '/landing';
  };

  const handleRoleSelect = (role: string) => {
    setSelectedDashboard(role);
    // Store the selected dashboard in localStorage for persistence
    localStorage.setItem('selectedDashboard', role);
  };

  // If admin is logged in but hasn't selected a dashboard yet, show dashboard selection
  if (isLoggedIn && isAdmin && !selectedDashboard) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <header className="bg-gray-dark/50 border-b border-gray-light/10 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <Logo />
          </div>
        </header>

        <main className="flex-grow">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold">Welcome, Tyler</h1>
              <p className="text-gray mt-2">Select a dashboard to view</p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-gray-dark/30 rounded-lg border border-gray-light/10 p-8 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Dashboard Selection</h2>
                
                <div className="flex justify-center gap-10 md:gap-16 lg:gap-20 my-10">
                  {[
                    { id: 'hr', label: 'HR Dashboard' },
                    { id: 'newHire', label: 'New Hire Dashboard' },
                    { id: 'electrician', label: 'Electrician Dashboard' },
                    { id: 'projectManager', label: 'PM Dashboard' },
                    { id: 'admin', label: 'Admin Dashboard' }
                  ].map((role) => (
                    <div 
                      key={role.id} 
                      className="flex flex-col items-center cursor-pointer w-24 md:w-28" 
                      onClick={() => handleRoleSelect(role.id)}
                    >
                      <RoleIcon 
                        role={role.id as 'hr' | 'newHire' | 'electrician' | 'projectManager' | 'admin'} 
                        className="mb-3 transition-transform hover:scale-110"
                      />
                      <span className="text-sm text-gray hover:text-warning text-center">
                        {role.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  // If logged in, show the appropriate dashboard based on role or selected dashboard
  if (isLoggedIn && (activeRole || selectedDashboard)) {
    const dashboardRole = selectedDashboard || activeRole;
    
    switch (dashboardRole) {
      case 'hr':
        return <HRDashboard />;
      case 'newHire':
        return <NewHireDashboard />;
      case 'electrician':
        return <ElectricianDashboard />;
      case 'projectManager':
        return <ProjectManagerDashboard />;
      case 'admin':
        return <AdminDashboard />;
      case 'landing':
        // Redirect to the landing page
        if (typeof window !== 'undefined') {
          window.location.href = '/landing';
          return null;
        }
        break;
      // Add other role dashboards here when they're created
      default:
        return <NewHireDashboard />;
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-gray-dark/50 border-b border-gray-light/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Logo />
        </div>
      </header>

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <LogoIcon size={48} className="mr-4" />
              <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-warning">ESIconnect</h1>
            </div>
            <p className="text-xl text-gray">Intelligent document search based on your role and permissions</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <div className="max-w-md mx-auto">
                <LoginForm onLogin={handleLogin} />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="bg-gray-dark/30 rounded-lg border border-gray-light/10 p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-4 text-center text-foreground">Access Your Document Library</h2>
                <p className="text-gray mb-6 text-center">
                  Our AI-powered PDF chat gives you instant answers from your permitted documents.
                </p>
                
                <RoleSelector activeRole={activeRole || undefined} />
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray">
                    Log in to access your role-specific dashboard and documents.
                  </p>
                  <div className="mt-4 text-xs text-gray">
                    <p>Demo login emails:</p>
                    <ul className="mt-1 space-y-1">
                      <li><code className="bg-gray-dark/70 px-2 py-1 rounded">hr@example.com</code> - HR Dashboard</li>
                      <li><code className="bg-gray-dark/70 px-2 py-1 rounded">newhire@example.com</code> - New Hire Dashboard</li>
                      <li><code className="bg-gray-dark/70 px-2 py-1 rounded">pm@example.com</code> - Project Manager Dashboard</li>
                      <li><code className="bg-gray-dark/70 px-2 py-1 rounded">tyler.murphy@esielectrical.com</code> - Admin Access (All Dashboards)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <InfoSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
