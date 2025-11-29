interface PillProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'transparent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Pill({ 
  children, 
  variant = 'default', 
  size = 'md',
  className = '' 
}: PillProps) {
  const baseStyles = 'inline-flex items-center font-medium rounded-full';
  
  const variantStyles = {
    default: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    primary: 'bg-blue-200 text-blue-800 hover:bg-blue-300',
    success: 'bg-green-200 text-green-800 hover:bg-green-300',
    warning: 'bg-yellow-200 text-yellow-800 hover:bg-yellow-300',
    danger: 'bg-red-200 text-red-800 hover:bg-red-300',
    transparent: 'bg-transparent text-gray-700 hover:bg-gray-200',
  };
  
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };
  
  return (
    <span 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
}

