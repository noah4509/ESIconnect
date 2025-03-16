import RoleIcon from './RoleIcon';

interface RoleSelectorProps {
  activeRole?: string;
}

const RoleSelector = ({ activeRole }: RoleSelectorProps) => {
  const roles = [
    { id: 'hr', label: 'HR' },
    { id: 'newHire', label: 'New Hire' },
    { id: 'electrician', label: 'Electrician' },
    { id: 'projectManager', label: 'PM' },
    { id: 'admin', label: 'Admin' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 my-10">
      {roles.map((role) => (
        <div key={role.id} className="flex flex-col items-center">
          <RoleIcon 
            role={role.id as 'hr' | 'newHire' | 'electrician' | 'projectManager' | 'admin'} 
            active={activeRole === role.id}
            className="mb-3 transition-transform hover:scale-110"
          />
          <span className={`text-sm ${activeRole === role.id ? 'text-warning font-semibold' : 'text-gray'}`}>
            {role.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RoleSelector; 