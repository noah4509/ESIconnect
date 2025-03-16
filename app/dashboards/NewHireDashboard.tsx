import Dashboard from '../components/Dashboard';

const NewHireDashboard = () => {
  return (
    <Dashboard title="New Hire Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card bg-gray-dark/50 hover:bg-gray-dark/70 transition-colors border-t-4 border-primary">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Onboarding Documents</h3>
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
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">Welcome Guide</a>
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
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">Benefits Overview</a>
            </li>
          </ul>
        </div>
        
        <div className="card bg-gray-dark/50 hover:bg-gray-dark/70 transition-colors border-t-4 border-primary">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Company Policies</h3>
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
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">IT Security Policy</a>
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
        
        <div className="card bg-gray-dark/50 hover:bg-gray-dark/70 transition-colors border-t-4 border-warning">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Training Materials</h3>
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
              <a href="#" className="text-warning hover:text-warning/80 transition-colors">System Access Guide</a>
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
              <a href="#" className="text-warning hover:text-warning/80 transition-colors">Company Software Training</a>
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
              <a href="#" className="text-warning hover:text-warning/80 transition-colors">Department Procedures</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="card bg-gray-dark/50 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-foreground">Upcoming Training</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-dark/70 rounded-lg border border-gray-light/10">
            <div>
              <h4 className="font-medium text-foreground">Company Orientation</h4>
              <p className="text-gray">Introduction to company culture and values</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-primary">Tomorrow, 9:00 AM</p>
              <p className="text-sm text-gray">Conference Room A</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-dark/70 rounded-lg border border-gray-light/10">
            <div>
              <h4 className="font-medium text-foreground">IT Systems Training</h4>
              <p className="text-gray">Learn about our internal systems and tools</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-primary">Wednesday, 2:00 PM</p>
              <p className="text-sm text-gray">Online Meeting</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card bg-gray-dark/50">
        <h3 className="text-xl font-semibold mb-4 text-foreground">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-foreground">How do I request time off?</h4>
            <p className="text-gray mt-1">
              You can request time off through the HR portal. Navigate to "Time Off" section and submit your request.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-foreground">Where can I find information about benefits?</h4>
            <p className="text-gray mt-1">
              All benefits information is available in the Benefits Overview document in your Onboarding Documents section.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-foreground">Who should I contact for IT support?</h4>
            <p className="text-gray mt-1">
              For IT support, email helpdesk@company.com or call extension 1234.
            </p>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default NewHireDashboard; 