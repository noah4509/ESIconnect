import Image from 'next/image';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative w-12 h-12 mr-3">
        {/* Black square with rounded edges */}
        <div className="absolute inset-0 bg-gray-dark rounded-xl shadow-lg"></div>
        
        {/* Brain circuit icon with orange color filter */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image 
            src="/images/brain-circuit.png" 
            alt="ESIconnect Brain Circuit" 
            width={36} 
            height={36}
            className="orange-icon-filter"
          />
        </div>
      </div>
      
      {/* Text logo */}
      <div className="flex flex-col">
        <span className="text-xl font-extrabold tracking-tight leading-none">
          <span className="text-foreground">ESI</span>
          <span className="text-warning">connect</span>
        </span>
        <span className="text-xs text-gray tracking-widest uppercase">Intelligent Documents</span>
      </div>
    </div>
  );
};

export default Logo; 