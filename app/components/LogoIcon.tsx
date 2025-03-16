import Image from 'next/image';

interface LogoIconProps {
  className?: string;
  size?: number;
}

const LogoIcon = ({ className = '', size = 40 }: LogoIconProps) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Black square with rounded edges */}
      <div className="absolute inset-0 bg-gray-dark rounded-xl shadow-lg"></div>
      
      {/* Brain circuit icon with orange color filter */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image 
          src="/images/brain-circuit.png" 
          alt="ESIconnect Brain Circuit" 
          width={Math.round(size * 0.75)} 
          height={Math.round(size * 0.75)}
          className="orange-icon-filter"
        />
      </div>
    </div>
  );
};

export default LogoIcon; 