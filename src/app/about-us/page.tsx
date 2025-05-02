import Link from "next/link";

export default function AboutUs() {
	return (
		<div className='flex flex-col justify-center items-center gap-10'>
			<p className='sm:w-1/2 sm:px-0 px-10 xl:w-1/3 md:text-5xl text-4xl font-bold text-center'>
				📚 About Us 📚
			</p>
			<p className='sm:w-1/2 sm:px-0 px-10 xl:w-1/3 text-xl'>
				We're currently a team of one that is handling all business needs. A
				hardworking individual that aims to produce the best results and
				experience for our customers
			</p>
			<p className='sm:w-1/2 sm:px-0 px-10 xl:w-1/3 text-xl'>
				Since I'm only one, we do our best to answer every call, text, and give
				all attention to our customers who are trusting us with their vehicle.
				We may take longer to answer sometimes but we will get back to you as
				soon as possible.{" "}
			</p>
			<span className='sm:w-1/2 px-10 xl:w-1/3 mx-5 text-xl border rounded-4xl p-10'>
				<p className='text-3xl font-bold text-center mb-4'>
					Elite Auto Finish's Statement:
				</p>
				<p className='text-xl font-semibold text-center italic'>
					We want you to trust us with your vehicle to deliver the best results
					with an easy experience from start to finish.
				</p>
			</span>
			<p className='sm:w-1/2 sm:px-0 px-10 xl:w-1/3 text-3xl font-bold'>
				Amazing Results Every Time ✨
			</p>
			<p className='sm:w-1/2 sm:px-0 px-10 xl:w-1/3 text-xl -mt-5'>
				The best part of detailing is the customer's reaction when they see
				their vehicle and are greatly amazed at the work that we were able to
				do. No matter the condition of the vehicle, Elite Auto Finish will try
				their best to bring back your vehicle — whether that's interior or
				exterior.{" "}
			</p>
			<p className='sm:w-1/2 sm:px-0 px-10 xl:w-1/3 text-xl'>
				Whether the job is small or big, our mission is to deliver a hassle-free
				experience and at the same time, amazing cleaning.{" "}
			</p>
			<p className='sm:w-1/2 font-semibold sm:px-0 px-10 xl:w-1/3 md:text-3xl text-2xl -mb-10'>
				Below you will find our popular services:
			</p>
			<div className='flex flex-col md:flex-row items-stretch justify-center gap-10 w-full p-10'>
				<div className='md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 border rounded-4xl flex flex-col justify-center items-center gap-5 p-10 relative hover:border hover:border-[#1589CF] transition-all hover:-translate-y-1'>
					<p className='text-3xl text-center font-bold'>
						🛡️ Showroom Shine + Ceramic Sealant
					</p>
					<Link
						href='/exterior#showroom-shine-ceramic-sealant'
						className='py-3 px-5 bg-[#1589CF] rounded-4xl hover:bg-blue-700 transition-colors'
					>
						Read More
					</Link>
				</div>
				<div className='md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 border rounded-4xl flex flex-col justify-end items-center gap-5 p-10 relative hover:border hover:border-[#1589CF] transition-all hover:-translate-y-1'>
					<p className='text-3xl text-center font-bold'>🧽 Full Cabin Care</p>
					<Link
						href='/interior#cabin-care'
						className='py-3 px-5 bg-[#1589CF] rounded-4xl hover:bg-blue-700 transition-colors'
					>
						Read More
					</Link>
				</div>
			</div>
		</div>
	);
}
