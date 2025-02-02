// src/app/components/common/CustomButton.tsx
import React from 'react';
import Link from 'next/link';

interface CustomButtonProps {
  href: string;
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ href, children }) => {
  return (
    <Link href={href} prefetch={false} className="custom-button" >
      {children}
    </Link>
  );
};

export default CustomButton;
