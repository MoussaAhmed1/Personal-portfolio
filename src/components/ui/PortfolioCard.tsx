import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  image: string;
  tags: string[];
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  image,
  tags,
}) => {
  return (
    <div className="group bg-card text-card-foreground border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
          <span className="w-12 h-12 rounded-full bg-background text-foreground flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
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
