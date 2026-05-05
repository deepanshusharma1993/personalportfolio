import Image from 'next/image';
import * as React from 'react';

export interface IAppProps {
}

export default function Hero (props: IAppProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 place-items-center text-center gap-10  md:items-center md:text-left'>
      <div className='space-y-4'>
        <h1 className='hero-title'>hi 👋,</h1>
        <h1 className='hero-title'>My name is</h1>
        <h1 className='hero-title hero-name-gradient'>Deepanshu Sharma</h1>
        <h1 className='hero-title'>I am a Full Stack Developer</h1>
      </div>
      <div className='profile-border relative w-40 h-40 sm:w-44 sm:h-44 md:w-50 md:h-50'>
        <Image
          alt='Deepanshu Sharma'
          src='/images/profilepic.jpg'
          fill
          sizes='(max-width: 768px) 11rem, 12.5rem'
          className='profile-photo'
        />
      </div>
    </div>
  );
}