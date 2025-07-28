import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className=' bg-white flex items-center justify-between rounded-2xl h-[68px] container mx-auto max-w-[92vw] px-9 w-full'>
            <div className=' flex items-center justify-between w-full'>
                <div className=' flex items-center justify-center'>
                    <Image
                        src='/wonderla_logo.webp'
                        alt=" Wonderla Logo"
                        width={110}
                        height={50}
                        className='hover:scale-110 transition-all duration-200 '
                    />
                </div>
                <div>
                    <ul className='flex items-center justify-center gap-6'>
                        <li className=''>
                            <Link href="/" className='text-gray-500  font-bold uppercase text-sm flex items-center justify-center gap-2'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5"><path d="M9.00002 16.2C9.00002 16.2 14.6348 11.1913 14.6348 7.43477C14.6348 4.32277 12.112 1.79999 9.00002 1.79999C5.88801 1.79999 3.36523 4.32277 3.36523 7.43477C3.36523 11.1913 9.00002 16.2 9.00002 16.2Z" stroke="#717D92" strokeWidth="1.5"></path><path d="M10.8002 7.2001C10.8002 8.19421 9.99436 9.0001 9.00025 9.0001C8.00613 9.0001 7.20025 8.19421 7.20025 7.2001C7.20025 6.20599 8.00613 5.4001 9.00025 5.4001C9.99436 5.4001 10.8002 6.20599 10.8002 7.2001Z" stroke="#717D92" strokeWidth="1.5"></path></svg>
                                Parks
                                <svg width="7" height="5" viewBox="0 0 7 5" fill="none" stroke="#717D92" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:rotate-180"><path fillRule="evenodd" clipRule="evenodd" d="M0.887247 1.06685C0.723372 1.2537 0.742003 1.53803 0.92886 1.7019L3.71805 4.14804L6.4221 1.70246C6.60643 1.53575 6.62071 1.25118 6.454 1.06685C6.28729 0.882519 6.00272 0.868235 5.81839 1.03495L3.70884 2.94284L1.5223 1.02524C1.33544 0.861361 1.05112 0.879992 0.887247 1.06685Z" fill="white"></path></svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className='text-gray-500 font-bold uppercase text-sm flex items-center justify-center gap-2'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5"><path d="M9.00002 16.2C9.00002 16.2 14.6348 11.1913 14.6348 7.43477C14.6348 4.32277 12.112 1.79999 9.00002 1.79999C5.88801 1.79999 3.36523 4.32277 3.36523 7.43477C3.36523 11.1913 9.00002 16.2 9.00002 16.2Z" stroke="#717D92" strokeWidth="1.5"></path><path d="M10.8002 7.2001C10.8002 8.19421 9.99436 9.0001 9.00025 9.0001C8.00613 9.0001 7.20025 8.19421 7.20025 7.2001C7.20025 6.20599 8.00613 5.4001 9.00025 5.4001C9.99436 5.4001 10.8002 6.20599 10.8002 7.2001Z" stroke="#717D92" strokeWidth="1.5"></path></svg>
                                Resorts
                                <svg width="7" height="5" viewBox="0 0 7 5" fill="none" stroke="#717D92" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:rotate-180"><path fillRule="evenodd" clipRule="evenodd" d="M0.887247 1.06685C0.723372 1.2537 0.742003 1.53803 0.92886 1.7019L3.71805 4.14804L6.4221 1.70246C6.60643 1.53575 6.62071 1.25118 6.454 1.06685C6.28729 0.882519 6.00272 0.868235 5.81839 1.03495L3.70884 2.94284L1.5223 1.02524C1.33544 0.861361 1.05112 0.879992 0.887247 1.06685Z" fill="white"></path></svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className='text-gray-500 font-bold uppercase text-sm flex items-center justify-center gap-2'>
                                <Image
                                    src={'/discount.webp'}
                                    alt='Discount Icon'
                                    width={20}
                                    height={20}
                                    style={{
                                        color: "transparent",
                                        filter: "brightness(0) saturate(100%) invert(48%) sepia(12%) saturate(368%) hue-rotate(182deg) brightness(94%) contrast(86%)"
                                    }}
                                />
                                Offers
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className='text-gray-500 font-bold uppercase text-sm flex items-center justify-center gap-2'>
                                <Image
                                    src={'/ride.webp'}
                                    alt='Ride Icon'
                                    width={20}
                                    height={20}
                                    style={{
                                        color: "transparent",
                                        filter: "brightness(0) saturate(100%) invert(48%) sepia(12%) saturate(368%) hue-rotate(182deg) brightness(94%) contrast(86%)"
                                    }} />
                                Rides
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className='text-gray-500 font-bold uppercase text-sm flex items-center justify-center gap-2'>
                                <Image
                                    src={'/resto.webp'}
                                    alt='Restaurant Icon'
                                    width={20}
                                    height={20}
                                    style={{
                                        color: "transparent",
                                        filter: "brightness(0) saturate(100%) invert(48%) sepia(12%) saturate(368%) hue-rotate(182deg) brightness(94%) contrast(86%)"
                                    }} />
                                Restaurants
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className='text-gray-500 font-bold uppercase text-sm flex items-center justify-center gap-2'>
                                <Image
                                    src={'/events.webp'}
                                    alt='Event Icon'
                                    width={20}
                                    height={20}
                                    style={{
                                        color: "transparent",
                                        filter: "brightness(0) saturate(100%) invert(48%) sepia(12%) saturate(368%) hue-rotate(182deg) brightness(94%) contrast(86%)"
                                    }} />
                                Events
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <button className=''>
                        <Link href={'/'} className='flex items-center justify-center gap-2 text-neutral-500 font-bold uppercase text-sm'>
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.83102 4.66277C5.29215 4.66277 5.74292 4.52603 6.12634 4.26984C6.50975 4.01365 6.80859 3.64952 6.98505 3.2235C7.16152 2.79747 7.20769 2.32868 7.11773 1.87641C7.02777 1.42414 6.80571 1.00871 6.47965 0.68264C6.15358 0.356572 5.73814 0.134518 5.28588 0.0445562C4.83361 -0.0454056 4.36482 0.000766058 3.93879 0.177232C3.51276 0.353699 3.14863 0.652534 2.89244 1.03595C2.63625 1.41936 2.49951 1.87014 2.49951 2.33127C2.49951 2.94962 2.74515 3.54265 3.18239 3.97989C3.61964 4.41713 4.21267 4.66277 4.83102 4.66277Z" fill="#334DCF"></path><path d="M8.97196 10.5793C9.155 10.5793 9.33054 10.5066 9.45997 10.3772C9.5894 10.2477 9.66211 10.0722 9.66211 9.88916C9.66211 8.60788 9.15312 7.37909 8.24713 6.47309C7.34113 5.56709 6.11233 5.05811 4.83105 5.05811C3.54978 5.05811 2.32098 5.56709 1.41498 6.47309C0.508985 7.37909 1.90925e-08 8.60788 0 9.88916C0 10.0722 0.0727122 10.2477 0.202141 10.3772C0.331569 10.5066 0.507111 10.5793 0.690151 10.5793H8.97196Z" fill="#334DCF"></path></svg>
                            Login
                        </Link>
                    </button>
                    <button>
                        <Link href={'/'} className='flex items-center justify-center gap-2 uppercase text-[.78rem] px-3 py-2.5 text-blue-800 bg-[#FAD500] font-extrabold rounded-lg  transition-colors duration-300'>
                            Book Tickets
                            <svg width="12" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M7.1.04a2.119 2.119 0 0 0-.628.304C6.267.493.834 4.765.683 4.896a1.983 1.983 0 0 0-.409.504c-.253.467-.221 1.028.085 1.49.109.164.847 1.108.867 1.109.01.001.113-.074.23-.167.118-.092.264-.193.324-.225.1-.052.129-.057.31-.057.255 0 .364.044.515.209.141.153.183.271.171.487a.69.69 0 0 1-.186.46 8.735 8.735 0 0 1-.487.406c-.015.011.79 1.022.906 1.139.306.307.651.456 1.051.453.327-.003.644-.115.949-.335.162-.116 5.52-4.328 5.759-4.527.286-.237.5-.56.586-.882a1.455 1.455 0 0 0-.023-.72 1.867 1.867 0 0 0-.277-.54c-.176-.237-.781-1-.792-.999-.007 0-.102.072-.212.159-.11.088-.254.189-.32.225-.114.062-.131.065-.33.065-.189 0-.221-.006-.323-.056a.672.672 0 0 1-.357-.727c.05-.241.124-.341.434-.588l.244-.194-.391-.497C8.576.539 8.449.399 8.27.271a1.24 1.24 0 0 0-.78-.263A1.103 1.103 0 0 0 7.1.04M5.708 1.952c.101.132.17.238.16.248-.01.009-.184.148-.388.309l-.37.292-.074-.082a4.646 4.646 0 0 1-.188-.231c-.099-.129-.111-.154-.086-.177.049-.048.747-.591.758-.59.005.001.09.105.188.231m1.1 1.407c.095.12.172.227.172.238 0 .011-.172.155-.383.32l-.384.3-.178-.227a2.865 2.865 0 0 1-.177-.239c.001-.015.746-.607.765-.61.007 0 .09.097.185.218M7.927 4.78c.095.121.173.227.172.235-.001.019-.751.605-.773.604-.013-.001-.163-.185-.332-.409l-.035-.047.382-.302c.21-.165.389-.301.397-.301.008 0 .093.099.189.22m1.11 1.409c.101.125.183.233.183.238 0 .013-.737.593-.768.605-.036.014-.388-.442-.362-.469.012-.011.757-.6.762-.602.001-.001.085.102.185.228" fill="#334DCF" fillRule="evenodd"></path></svg>
                        </Link>
                    </button>
                    <button>
                        <svg width="27" height="17" viewBox="0 0 27 17" xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-4 fill-blue-800 lg:h-[17px] lg:w-[26px] lg:fill-blue-800"><rect x="0.322266" y="0.0905762" width="26.334" height="3.15699" rx="1.5785" className="origin-center transform transition-transform duration-300"></rect><rect x="0.322266" y="6.96667" width="26.334" height="3.15699" rx="1.5785" className="transform transition-opacity duration-300"></rect><rect x="0.322266" y="13.8429" width="26.334" height="3.15699" rx="1.5785" className="origin-center transform transition-transform duration-300"></rect></svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar