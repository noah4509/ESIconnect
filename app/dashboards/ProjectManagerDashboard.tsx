import Dashboard from '../components/Dashboard';

const ProjectManagerDashboard = () => {
  return (
    <Dashboard title="Project Manager Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card bg-gray-dark/50 hover:bg-gray-dark/70 transition-colors border-t-4 border-primary">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Project Documents</h3>
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
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">Project Plans</a>
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
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">Specifications</a>
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
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">Drawings</a>
            </li>
          </ul>
        </div>
        
        <div className="card bg-gray-dark/50 hover:bg-gray-dark/70 transition-colors border-t-4 border-primary">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Resources</h3>
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
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">Equipment Inventory</a>
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
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">Staff Assignments</a>
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
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">Budget Templates</a>
            </li>
          </ul>
        </div>
        
        <div className="card bg-gray-dark/50 hover:bg-gray-dark/70 transition-colors border-t-4 border-warning">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Safety Documents</h3>
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
              <a href="#" className="text-warning hover:text-warning/80 transition-colors">Safety Protocols</a>
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
              <a href="#" className="text-warning hover:text-warning/80 transition-colors">Incident Reports</a>
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
              <a href="#" className="text-warning hover:text-warning/80 transition-colors">Inspection Checklists</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="card bg-gray-dark/50 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-foreground">Recent Updates</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-primary pl-4">
            <p className="text-sm text-gray">Updated 2 days ago</p>
            <h4 className="font-medium text-foreground">Project Schedule Template</h4>
            <p className="text-gray">Added new milestone tracking and resource allocation sections.</p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <p className="text-sm text-gray">Updated 1 week ago</p>
            <h4 className="font-medium text-foreground">Equipment Requisition Form</h4>
            <p className="text-gray">Updated with new equipment categories and approval workflow.</p>
          </div>
        </div>
      </div>
      
      <div className="card bg-gray-dark/50">
        <h3 className="text-xl font-semibold mb-4 text-foreground">Project Status</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-light/10">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray uppercase tracking-wider">Project</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray uppercase tracking-wider">Deadline</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-light/10">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">Office Renovation</td>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">Acme Corp</td>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">June 30, 2023</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900/30 text-green-300 border border-green-500/30">On Track</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">Data Center Wiring</td>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">TechStart Inc</td>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">July 15, 2023</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-900/30 text-yellow-300 border border-yellow-500/30">At Risk</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">Retail Store Lighting</td>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">Global Retail LLC</td>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">August 1, 2023</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-900/30 text-blue-300 border border-blue-500/30">Planning</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Dashboard>
  );
};

export default ProjectManagerDashboard; 