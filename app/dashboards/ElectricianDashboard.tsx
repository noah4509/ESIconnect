import Dashboard from '../components/Dashboard';
import Card from '../components/Card';

const ElectricianDashboard = () => {
  return (
    <Dashboard title="Electrician Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card title="Safety Documents" icon="shield">
          <ul className="space-y-2 text-gray">
            <li className="hover:text-white transition-colors">
              <a href="#" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Electrical Safety Manual
              </a>
            </li>
            <li className="hover:text-white transition-colors">
              <a href="#" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                PPE Requirements
              </a>
            </li>
            <li className="hover:text-white transition-colors">
              <a href="#" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Emergency Procedures
              </a>
            </li>
          </ul>
        </Card>

        <Card title="Technical Resources" icon="tool">
          <ul className="space-y-2 text-gray">
            <li className="hover:text-white transition-colors">
              <a href="#" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Wiring Diagrams
              </a>
            </li>
            <li className="hover:text-white transition-colors">
              <a href="#" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Code Reference Guide
              </a>
            </li>
            <li className="hover:text-white transition-colors">
              <a href="#" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Equipment Manuals
              </a>
            </li>
          </ul>
        </Card>

        <Card title="Training Materials" icon="book">
          <ul className="space-y-2 text-gray">
            <li className="hover:text-white transition-colors">
              <a href="#" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Apprenticeship Materials
              </a>
            </li>
            <li className="hover:text-white transition-colors">
              <a href="#" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Continuing Education
              </a>
            </li>
            <li className="hover:text-white transition-colors">
              <a href="#" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Certification Prep
              </a>
            </li>
          </ul>
        </Card>
      </div>

      <Card title="Current Job Assignments" icon="clipboard">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-dark/30">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-light uppercase tracking-wider">Job ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-light uppercase tracking-wider">Location</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-light uppercase tracking-wider">Type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-light uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-light uppercase tracking-wider">Foreman</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-dark/30">
              <tr>
                <td className="px-4 py-3 text-sm text-gray-light">ESI-2023-0142</td>
                <td className="px-4 py-3 text-sm text-gray-light">Downtown Office Tower</td>
                <td className="px-4 py-3 text-sm text-gray-light">Commercial</td>
                <td className="px-4 py-3 text-sm">
                  <span className="px-2 py-1 text-xs rounded-full bg-warning/20 text-warning">In Progress</span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-light">M. Johnson</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-light">ESI-2023-0156</td>
                <td className="px-4 py-3 text-sm text-gray-light">Riverside Apartments</td>
                <td className="px-4 py-3 text-sm text-gray-light">Residential</td>
                <td className="px-4 py-3 text-sm">
                  <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary">Starting</span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-light">R. Smith</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-light">ESI-2023-0128</td>
                <td className="px-4 py-3 text-sm text-gray-light">Industrial Park Facility</td>
                <td className="px-4 py-3 text-sm text-gray-light">Industrial</td>
                <td className="px-4 py-3 text-sm">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-500">Complete</span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-light">T. Williams</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </Dashboard>
  );
};

export default ElectricianDashboard; 