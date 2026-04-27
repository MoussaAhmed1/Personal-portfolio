'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Logo: React.FC = () => {
  const t = useTranslations('logo');

  return (
    <div dir="ltr" className="inline-flex items-center gap-2">
      <Image
        src="/images/logo.png"
        alt={t('alt')}
        className="h-10 w-10"
        width={80}
        height={80}
      />
      <span className="font-bold text-xl text-foreground">OUSA</span>
    </div>
  );
};

export default Logo;
