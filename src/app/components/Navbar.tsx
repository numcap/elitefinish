"use client";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
	return (
		<nav className='sticky z-50 bg-[#0a0a0a] top-0 flex justify-center items-center p-5 px-10'>
			<Image src='/icons/logo.png' width={150} height={200} alt='Logo' />
			<div className='flex gap-10 grow justify-end items-center bg-highlight'>
				<Link
					className='text-xl text-brand hover:text-[#1589CF] hidden lg:block transition-all duration-300'
					href='/'
				>
					Home
				</Link>
				<span className='group relative'>
					<Link
						className='text-xl hover:text-[#1589CF] hidden lg:block transition-all duration-300 group'
						href='/interior'
					>
						Interior
					</Link>
					<span className='hidden group-hover:block absolute top-5 left-0 h-fit p-5 bg-[#0a0a0a] w-56 transition-all duration-300 rounded-3xl'>
						<span className='flex flex-col w-fit gap-5'>
							<Link
								className='text-xl hover:bg-[#1589CF] px-2 py-1 transition-all rounded-xl'
								href='/interior#'
							>
								Cabin Care
							</Link>
							<Link
								className='text-xl hover:bg-[#1589CF] px-2 py-1 transition-all rounded-xl'
								href='/interior#'
							>
								Quick Cabin Care
							</Link>
						</span>
					</span>
				</span>
					<Link
						className='text-xl hover:text-[#1589CF] hidden lg:block transition-all duration-300'
						href='/exterior'
					>
						Exterior
					</Link>
				<Link
					className='text-xl hover:text-[#1589CF] hidden lg:block transition-all duration-300'
					href='/gallery'
				>
					Gallery
				</Link>
				<Link
					className='text-xl hover:text-[#1589CF] hidden lg:block transition-all duration-300'
					href='/about-us'
				>
					About Us
				</Link>
				<Link
					className='text-xl bg-[#1589CF] p-2 rounded-2xl hidden lg:block transition-all duration-300'
					href='/contact'
				>
					Contact Us
				</Link>
				<RxHamburgerMenu className='block lg:hidden w-8 h-8' />
			</div>
		</nav>
	);
};

export default Navbar;
