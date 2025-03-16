const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-auto py-6 border-t border-gray-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray">
              &copy; {currentYear} <span className="text-primary">ESI</span><span className="text-warning">connect</span>. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="mailto:support@esiconnect.com" className="text-sm text-gray hover:text-warning transition-colors">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 