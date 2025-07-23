import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  image: string;
  tags: string[];
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  image,
  tags
}) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          <a 
            href="#" 
            className="w-12 h-12 rounded-full bg-white text-gray-900 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300"
          >
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;