import Dashboard from '../components/Dashboard';

const LegalDashboard = () => {
  return (
    <Dashboard title="Legal Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card bg-gray-dark/50 hover:bg-gray-dark/70 transition-colors border-t-4 border-primary">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Contracts</h3>
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
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">Service Agreements</a>
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
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">NDAs</a>
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
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">Licensing Agreements</a>
            </li>
          </ul>
        </div>
        
        <div className="card bg-gray-dark/50 hover:bg-gray-dark/70 transition-colors border-t-4 border-primary">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Compliance</h3>
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
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">GDPR Documentation</a>
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
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">Privacy Policies</a>
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
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">Terms of Service</a>
            </li>
          </ul>
        </div>
        
        <div className="card bg-gray-dark/50 hover:bg-gray-dark/70 transition-colors border-t-4 border-warning">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Intellectual Property</h3>
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
              <a href="#" className="text-warning hover:text-warning/80 transition-colors">Patents</a>
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
              <a href="#" className="text-warning hover:text-warning/80 transition-colors">Trademarks</a>
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
              <a href="#" className="text-warning hover:text-warning/80 transition-colors">Copyrights</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="card bg-gray-dark/50 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-foreground">Recent Updates</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-primary pl-4">
            <p className="text-sm text-gray">Updated 3 days ago</p>
            <h4 className="font-medium text-foreground">Privacy Policy - 2023 Update</h4>
            <p className="text-gray">Updated to comply with new state regulations on data privacy.</p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <p className="text-sm text-gray">Updated 2 weeks ago</p>
            <h4 className="font-medium text-foreground">Service Agreement Template</h4>
            <p className="text-gray">Added new clauses for remote service delivery and force majeure.</p>
          </div>
        </div>
      </div>
      
      <div className="card bg-gray-dark/50">
        <h3 className="text-xl font-semibold mb-4 text-foreground">Contract Status</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-light/10">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray uppercase tracking-wider">Document Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray uppercase tracking-wider">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-light/10">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">Acme Corp</td>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">Master Service Agreement</td>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">June 30, 2023</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900/30 text-green-300 border border-green-500/30">Signed</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">TechStart Inc</td>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">NDA</td>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">July 15, 2023</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-900/30 text-yellow-300 border border-yellow-500/30">In Review</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">Global Services LLC</td>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">Licensing Agreement</td>
                <td className="px-6 py-4 whitespace-nowrap text-foreground">August 1, 2023</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-900/30 text-red-300 border border-red-500/30">Pending</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Dashboard>
  );
};

export default LegalDashboard; 