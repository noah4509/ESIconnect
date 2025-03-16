const InfoSection = () => {
  return (
    <section className="py-12 bg-gray-dark/30 rounded-lg border border-gray-light/10 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-warning bg-clip-text text-transparent">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card border-t-4 border-primary bg-gray-dark/50 hover:bg-gray-dark/70 transition-colors">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-primary/10 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">AI-Powered Search</h3>
            </div>
            <p className="text-gray">
              Our AI-powered PDF chat gives you instant answers from your permitted documents.
            </p>
          </div>
          
          <div className="card border-t-4 border-primary bg-gray-dark/50 hover:bg-gray-dark/70 transition-colors">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-primary/10 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Role-Based Access</h3>
            </div>
            <p className="text-gray">
              Access information tailored to your specific role and projects.
            </p>
          </div>
          
          <div className="card border-t-4 border-warning bg-gray-dark/50 hover:bg-gray-dark/70 transition-colors">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-warning/10 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-warning">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Secure Access</h3>
            </div>
            <p className="text-gray">
              Securely search across all documents you're authorized to view.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection; 