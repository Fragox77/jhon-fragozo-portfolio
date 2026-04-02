import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function Logo({ className = '', variant = 'light' }: LogoProps) {
  if (variant === 'dark') {
    return (
      <Image
        src="/logo/logo-white.svg"
        alt="Logo"
        width={140}
        height={40}
        className={className}
        priority
      />
    );
  }

  return (
    <>
      <Image
        src="/logo/Logo-black.svg"
        alt="Logo"
        width={140}
        height={40}
        className={`${className} dark:hidden`}
        priority
      />
      <Image
        src="/logo/logo-white.svg"
        alt="Logo"
        width={140}
        height={40}
        className={`${className} hidden dark:block`}
        priority
      />
    </>
  );
}
