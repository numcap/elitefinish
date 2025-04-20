import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
	return (
		<div className='relative w-full h-[40rem]'>
			{/* <video
				className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
				muted
				loop
				autoPlay
                controlsList="nofullscreen nodownload noremoteplayback"
			>
				<source src="copy_F29E9804-AFB7-4737-8059-CAA22EE4DF75.qt" />
			</video> */}

			<Image
				className='absolute top-0 left-0 object-cover h-full w-full opacity-60'
				src='/IMG_7562.jpeg'
				alt='Photo'
				width={1656}
				height={813}
			/>

			{/* Optional: content over video */}
			<div className='relative z-10 flex flex-col items-center justify-center h-full gap-20'>
				{/* <div className='bg-black opacity-40'>
				</div> */}
				<h1 className='text-white md:px-36 px-5 mb-24 text-4xl md:text-6xl text-center 2xl:w-[60%]'>
					Local Interior & Exterior Car Detailing in London, Ontario
				</h1>
                <Link href="/contact" className="text-3xl py-4 px-5 bg-[#1589CF] hover: rounded-3xl cursor-pointer">Get a Quote</Link>
			</div>
		</div>
	);
};

export default HeroBanner;
