import Image from 'next/image';
import data from '../data.json';
import React from 'react';
import instaicon from "../public/images/logo-instagram.svg";
import ellipsis from "../public/images/ellipsis-horizontal-outline.svg";
import img from "../public/mountain.jpg"
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';



export default function Home() {
  return (
    <div className='flex items-center flex-col mx-auto
      w-full justify-center mt-4 px-8'>
      <div style={{
        zIndex: -1,
        position: "fixed",
        width: "100vw",
        height: "160vh"
      }}>
        <Image
          src={img}
          alt="Mountains with snow"
          layout="fill"
          objectFit='cover'
        />
      </div>
      <ShareCard className="">
      </ShareCard>

      <Image
        className='rounded-full'
        alt={data.name}
        src={data.avatar}
        width={95}
        height={95}>
      </Image>
      <h1 className='font-bold mt-4 text-2xl'>@mainehousemusic</h1>
      <h1 className='font-semibold mt-1 mb-7 text-lg'>Diego Smith - DJ based in Portland, Maine</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />)
      )}
      <a href="https://instagram.com/mainehousemusic/"><Image
        priority
        src={instaicon}
        height={80}
        width={50}
        alt='Follow on Instagram'
      />
      </a>
    </div>
  )
}

function LinkCard({ href, title }) {
  return (
    <a href={href} className='flex items-center p-4  w-full max-w-2xl   rounded-full
     hover:scale-105 transition-all border border-gray-300 mb-4 bg-white'>
      <div className='flex text-center w-full'>
        <h2 className='font-semibold w-full text-center text-base text-black '>{title}</h2>
      </div>
    </a>
  );
}

function ShareCard() {
  return (
    <a href="/" className=' flex justify-center items-center mr-[70%] mt-3 p-3 rounded-full
     hover:scale-105 transition-all border border-gray-300 bg-white'>
      <Image
        className=''
        priority
        src={ellipsis}
        alt='Ellipsis icon'
        height={20}
        width={13}
      />
    </a>
  );
}
