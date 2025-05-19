"use client"
import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ImgProps {
  src: string;
  width: number;
  height: number;
  alt?: string;
}

const Img: React.FC<ImgProps> = ({ src, width, height, alt }) => {
  const [load, setLoad] = React.useState(false);

  return (
    <div
      className={cn(
        // Use arbitrary values for width/height if needed
        `w-[${width}px] h-[${height}px]`,
        !load && 'bg-gray-200 animate-collapsible-down border-1 border-dashed border-black rounded-xl '
      )}
      style={{ width, height }}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt || ''}
        onLoad={() => setLoad(true)}
        className={cn(
          'rounded-xl object-cover w-full h-full transition-opacity duration-500',
          load ? 'opacity-100' : 'opacity-0'
        )}
      />
    </div>
  );
};
export default Img;