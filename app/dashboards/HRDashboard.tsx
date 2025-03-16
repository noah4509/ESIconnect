import Dashboard from '../components/Dashboard';
import { useSearchParams } from 'next/navigation';

interface HRDashboardProps {
  role?: string;
}

const HRDashboard = ({ role }: HRDashboardProps = {}) => {
  const searchParams = useSearchParams();
  const paramRole = searchParams.get('role');
  const isAdmin = role === 'admin' || paramRole === 'admin';

  return (
    <Dashboard title={isAdmin ? "Admin Dashboard" : "HR Dashboard"}>
      {isAdmin && (
        <div className="card bg-gray-dark/50 mb-8 border-t-4 border-warning">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Admin Controls</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-dark/30 p-4 rounded-lg border border-gray-light/10">
              <h4 className="font-medium text-foreground mb-2">User Management</h4>
              <p className="text-gray mb-4">Manage user accounts and permissions</p>
              <button className="bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md transition-colors">
                Manage Users
              </button>
            </div>
            <div className="bg-gray-dark/30 p-4 rounded-lg border border-gray-light/10">
              <h4 className="font-medium text-foreground mb-2">System Settings</h4>
              <p className="text-gray mb-4">Configure application settings and preferences</p>
              <button className="bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md transition-colors">
                System Settings
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card bg-gray-dark/50 hover:bg-gray-dark/70 transition-colors border-t-4 border-primary">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Personnel Policies</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <div className="p-1.5 rounded-full bg-primary/10 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">Employee Handbook</a>
            </li>
            <li className="flex items-center">
              <div className="p-1.5 rounded-full bg-primary/10 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">Code of Conduct</a>
            </li>
            <li className="flex items-center">
              <div className="p-1.5 rounded-full bg-primary/10 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">Workplace Safety</a>
            </li>
          </ul>
        </div>
        
        <div className="card bg-gray-dark/50 hover:bg-gray-dark/70 transition-colors border-t-4 border-primary">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Benefits Documents</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <div className="p-1.5 rounded-full bg-primary/10 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">Health Insurance</a>
            </li>
            <li className="flex items-center">
              <div className="p-1.5 rounded-full bg-primary/10 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">Retirement Plans</a>
            </li>
            <li className="flex items-center">
              <div className="p-1.5 rounded-full bg-primary/10 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">PTO Policy</a>
            </li>
          </ul>
        </div>
        
        <div className="card bg-gray-dark/50 hover:bg-gray-dark/70 transition-colors border-t-4 border-warning">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Hiring Templates</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <div className="p-1.5 rounded-full bg-warning/10 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-warning">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <a href="#" className="text-warning hover:text-warning/80 transition-colors">Job Descriptions</a>
            </li>
            <li className="flex items-center">
              <div className="p-1.5 rounded-full bg-warning/10 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-warning">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <a href="#" className="text-warning hover:text-warning/80 transition-colors">Interview Questions</a>
            </li>
            <li className="flex items-center">
              <div className="p-1.5 rounded-full bg-warning/10 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-warning">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <a href="#" className="text-warning hover:text-warning/80 transition-colors">Offer Letters</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="card bg-gray-dark/50 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-foreground">Recent Updates</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-primary pl-4">
            <p className="text-sm text-gray">Updated 2 days ago</p>
            <h4 className="font-medium text-foreground">Employee Handbook - 2023 Edition</h4>
            <p className="text-gray">Updated sections on remote work policy and equipment reimbursement.</p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <p className="text-sm text-gray">Updated 1 week ago</p>
            <h4 className="font-medium text-foreground">Health Insurance Benefits</h4>
            <p className="text-gray">Added new mental health coverage options and updated provider network.</p>
          </div>
        </div>
      </div>
      
      <div className="card bg-gray-dark/50">
        <h3 className="text-xl font-semibold mb-4 text-foreground">Onboarding Status</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-light/10">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray uppercase tracking-wider">Employee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray uppercase tracking-wider">Position</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray uppercase tracking-wider">Start Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-light/10">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">John Smith</td>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">Software Engineer</td>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">May 15, 2023</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900/30 text-green-300 border border-green-500/30">Completed</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">Jane Doe</td>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">Project Manager</td>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">June 1, 2023</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-900/30 text-yellow-300 border border-yellow-500/30">In Progress</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">Robert Johnson</td>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">Electrician</td>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">June 10, 2023</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-900/30 text-blue-300 border border-blue-500/30">Pending</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Dashboard>
  );
};

export default HRDashboard; 