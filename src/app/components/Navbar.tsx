"use client";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { useState } from "react";

const Navbar = () => {
	const [hamburgerModal, setHamburgerModal] = useState<boolean>(false);
	return (
		<>
			<nav className='sticky z-50 bg-[#0a0a0a] top-0 flex justify-center items-center p-5 px-10'>
				<Link href="/">
					<Image src='/icons/logo.png' width={150} height={200} alt='Logo' />
				</Link>
				<div className='flex gap-10 grow justify-end items-center bg-highlight'>
					<Link
						className='text-xl text-brand hover:text-[#1589CF] hidden xl:block transition-all duration-300'
						href='/'
					>
						Home
					</Link>
					<span className='group relative'>
						<Link
							className='text-xl hover:text-[#1589CF] hidden xl:block transition-all duration-300 group'
							href='/interior'
						>
							Interior
						</Link>
						<span className='hidden group-hover:block absolute top-5 left-0 h-fit p-5 bg-[#0a0a0a] w-56 transition-all duration-300 rounded-3xl'>
							<span className='flex flex-col w-fit gap-5'>
								<Link
									className='text-xl hover:bg-[#1589CF] px-2 py-1 transition-all rounded-xl'
									href='/interior#cabin-care'
								>
									Cabin Care
								</Link>
								<Link
									className='text-xl hover:bg-[#1589CF] px-2 py-1 transition-all rounded-xl'
									href='/interior#quick-cabin-care'
								>
									Quick Cabin Care
								</Link>
							</span>
						</span>
					</span>
					<Link
						className='text-xl hover:text-[#1589CF] hidden xl:block transition-all duration-300'
						href='/exterior'
					>
						Exterior
					</Link>
					<Link
						className='text-xl hover:text-[#1589CF] hidden xl:block transition-all duration-300'
						href='/gallery'
					>
						Gallery
					</Link>
					<Link
						className='text-xl hover:text-[#1589CF] hidden xl:block transition-all duration-300'
						href='/about-us'
					>
						About Us
					</Link>
					<Link
						className='text-xl hover:text-[#1589CF] hidden xl:block transition-all duration-300'
						href='/maintenance-referrals'
					>
						Maintenance & Referrals
					</Link>
					<Link
						className='text-xl bg-[#1589CF] p-2 rounded-2xl hidden xl:block transition-all duration-300'
						href='/contact'
					>
						Contact Us
					</Link>
					<RxHamburgerMenu
						onClick={() => setHamburgerModal(!hamburgerModal)}
						className='block xl:hidden w-8 h-8 cursor-pointer'
					/>
				</div>
			</nav>
			<div
				className={`fixed top-0 left-0 h-screen w-screen z-50 flex flex-col justify-center items-center gap-5 bg-[#0a0a0a] transition-all duration-500 ease-in-out transform ${
					hamburgerModal
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-10 pointer-events-none"
				}`}
			>
				<Image
					src='/icons/logo.png'
					width={150}
					height={200}
					alt='Logo'
					className='mb-10'
				/>
				<Link
					className='text-xl text-brand hover:text-[#1589CF] transition-all duration-300'
					href='/'
					onClick={() => setHamburgerModal(!hamburgerModal)}
				>
					Home
				</Link>
				<Link
					className='text-xl hover:text-[#1589CF] transition-all duration-300 group'
					href='/interior'
					onClick={() => setHamburgerModal(!hamburgerModal)}
				>
					Interior
				</Link>
				<Link
					className='text-xl hover:text-[#1589CF] transition-all duration-300'
					href='/exterior'
					onClick={() => setHamburgerModal(!hamburgerModal)}
				>
					Exterior
				</Link>
				<Link
					className='text-xl hover:text-[#1589CF] transition-all duration-300'
					href='/gallery'
					onClick={() => setHamburgerModal(!hamburgerModal)}
				>
					Gallery
				</Link>
				<Link
					className='text-xl hover:text-[#1589CF] transition-all duration-300 text-center'
					href='/maintenance-referrals'
					onClick={() => setHamburgerModal(!hamburgerModal)}
				>
					Maintenance & <br /> Referrals
				</Link>
				<Link
					className='text-xl hover:text-[#1589CF] transition-all duration-300'
					href='/about-us'
					onClick={() => setHamburgerModal(!hamburgerModal)}
				>
					About Us
				</Link>
				<Link
					className='text-xl bg-[#1589CF] p-2 rounded-2xl transition-all duration-300'
					href='/contact'
					onClick={() => setHamburgerModal(!hamburgerModal)}
				>
					Contact Us
				</Link>
				<ImCross
					className='w-8 h-8 mt-6 cursor-pointer'
					onClick={() => setHamburgerModal(false)}
				/>
			</div>
		</>
	);
};

export default Navbar;
