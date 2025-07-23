import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center flex-nowrap space-x-1/2 ">
      <div className="flex items-center justify-center">
        <Image src="/images/logo.png" alt='logo' className="h-10 w-10" width={80} height={80} />
      </div>
      <span className="font-bold text-xl text-foreground">OUSA</span>
    </div>
  );
};

export default Logo;