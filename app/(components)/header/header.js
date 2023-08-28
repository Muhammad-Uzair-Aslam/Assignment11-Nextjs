'use client'
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';


export default function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <Head>
        <title>Create Next Responsive Navbar With Tailwind CSS</title>
        <meta
          name="description"
          content="Create Next JS Responsive Menu with Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full bg-[#2370C8] ">
        <div className="justify-around px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="#">
                <h2 className="text-2xl text-white font-bold">Logo</h2>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 border border-1 border-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                    <span className='bg-gray-700 w-[1px] h-[1px] p-[1px] mx-1'></span>
                    <span className='bg-gray-700 w-[1px] h-[1px] p-[1px] mx-1'></span>
                    <span className='bg-gray-700 w-[1px] h-[1px] p-[1px] mx-1'></span>
                  
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white">
                  <Link href="/">
                    Home
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/about">
                    About
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/pages">
                    Pages
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/services">
                    Services
                  </Link>
                </li>
                
                <li className="text-white">
                  <Link href="/portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/blog">
                    Blog
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/contact">
                    Contact 
                  </Link>
                </li>
              </ul>
            </div>
            
          </div>
          <div className={`flex md:relative  md:block ${
                navbar ? 'block' : 'hidden'
              }`}>
                <input className='rounded-3xl px-4 h-10 border border-1 w-40 text-blue-600' type='text' placeholder='Search'/><Image className=' relative -left-7 md:absolute md:left-32 h-4 top-3' src={"/imgs/download.png"} width={10} height={3}/>

            </div>
        </div>
      </nav>
    </div>
  );
}