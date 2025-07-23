import { Code, Users, Award, Star, Zap, Clock } from 'lucide-react';

interface BadgeProps {
  icon?: string;
  text: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ icon, text, className = '' }) => {
  const getIcon = () => {
    switch (icon) {
      case 'Code':
        return <Code className="h-4 w-4" />;
      case 'Users':
        return <Users className="h-4 w-4" />;
      case 'Award':
        return <Award className="h-4 w-4" />;
      case 'Star':
        return <Star className="h-4 w-4" />;
      case 'Zap':
        return <Zap className="h-4 w-4" />;
      case 'Clock':
        return <Clock className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${className}`}>
      {icon && (
        <span className="text-emerald-500">
          {getIcon()}
        </span>
      )}
      <span className="text-sm font-medium text-gray-700">{text}</span>
    </div>
  );
};

export default Badge;