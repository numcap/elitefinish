import Link from "next/link";
import { SiInstagram } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className='h-fit bg-[#1589CF] mt-10 flex gap-32 py-10 px-20'>
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
					Detailing FAQs
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
					<FaFacebook className='w-8 h-8 hover:text-gray-400 transition-all' />
				</span>
			</div>
		</footer>
	);
};

export default Footer;
