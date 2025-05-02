import Link from "next/link";
import { SiInstagram } from "react-icons/si";
import { FaFacebook, FaPhone } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className='h-fit bg-[#1589CF] mt-10 flex gap-x-32 gap-y-10 py-10 px-20 flex-wrap transition-all justify-center'>
			<div className='flex flex-col'>
				<p className='text-xl mb-3 border-b font-semibold'>Company</p>
				<Link className='text-lg hover:text-gray-400 transition-all' href='/'>
					Home
				</Link>
				<Link
					className='text-lg hover:text-gray-400 transition-all'
					href='/about-us'
				>
					About Us
				</Link>
				<Link
					className='text-lg hover:text-gray-400 transition-all'
					href='/about-us#'
				>
					Maintenance & Referrals
				</Link>
				{/* TODO: Add the header title here and below for interior */}
				<Link
					className='text-lg hover:text-gray-400 transition-all'
					href='/contact'
				>
					Contact
				</Link>
			</div>
			<div className='flex flex-col'>
				<Link href='/exterior' className='text-xl mb-3 border-b font-semibold'>
					Exterior
				</Link>
				<Link
					className='text-lg hover:text-gray-400 transition-all'
					href='/interior#'
				>
					Show Room Shine
				</Link>
				<Link
					className='text-lg hover:text-gray-400 transition-all'
					href='/interior#'
				>
					+ Ceramic Sealant (Optional)
				</Link>
			</div>
			<div className='flex flex-col'>
				<Link href='/interior' className='text-xl mb-3 border-b font-semibold'>
					Interior
				</Link>
				<Link
					className='text-lg hover:text-gray-400 transition-all'
					href='/interior#'
				>
					Cabin Care
				</Link>
				<Link
					className='text-lg hover:text-gray-400 transition-all'
					href='/interior#'
				>
					Quick Cabin Care
				</Link>
			</div>
			<div className='flex flex-col'>
				<p className='text-xl mb-3 border-b font-semibold'>Stay in Touch</p>
				<p></p>
				<span className='flex gap-2'>
					<a href='https://www.instagram.com/elitefinishauto519/'>
						<SiInstagram className='w-8 h-8 hover:text-gray-400 transition-all' />
					</a>
					<a href='https://www.facebook.com/EliteFinishAuto519/'>
						<FaFacebook className='w-8 h-8 hover:text-gray-400 transition-all cursor-pointer' />
					</a>
					<a href='tel:4167060727'>
						<FaPhone className='w-8 h-8 hover:text-gray-400 transition-all cursor-pointer' />
					</a>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
