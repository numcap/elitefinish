import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaAsterisk } from "react-icons/fa";

export default function Exterior() {
	return (
		<div>
			<div className='relative flex flex-col h-[40rem]'>
				<Image
					src='/IMG_0458.jpg'
					width={933}
					height={826}
					alt='before and after of backseats'
					className='absolute top-0 left-0 opacity-50 object-cover h-full w-full'
				/>
				<div className='relative z-10 flex flex-col items-center justify-center h-full gap-20'>
					<h1 className='text-white md:px-36 px-5 mb-5 text-4xl md:text-6xl text-center 2xl:w-[60%]'>
						Clean, Shine & Protect Your Vehicle
					</h1>
					<h1 className='text-white md:px-36 px-5 text-xl md:text-2xl text-center 2xl:w-[60%]'>
						A Great Service To Get Your Car Looking Shiny!
					</h1>
					<Link
						href='/contact'
						className='text-3xl py-4 px-5 bg-[#1589CF] hover:bg-blue-700 transition-colors rounded-3xl cursor-pointer'
					>
						Get a Quote
					</Link>
				</div>
			</div>
			<div className='flex flex-col justify-center items-center mt-10'>
				<div className='flex flex-col gap-4 px-10 sm:w-1/2 sm:px-0 xl:w-1/3'>
					<span className='text-4xl font-semibold text-center'>
						Making Your Paint Glossy and Protected from London's Heat
					</span>
					<span>
						<FaCheck className='inline-block text-[#1589CF]' /> Paint Protection
						Application: Perfect for new vehicles or annual maintenance. We
						apply a protective ceramic layer to shield your paint from harsh
						weather.
					</span>
					<span>
						<FaCheck className='inline-block text-[#1589CF]' /> Deep UV Defense:
						Protects against harmful sun rays that can cause fading, cracking,
						and clear coat damage over time.
					</span>
					<span>
						<FaCheck className='inline-block text-[#1589CF]' /> Enhanced
						Appearance: Restores a deep, glossy shine to your vehicle, no matter
						if it's a 2010 model or a 2020 model.
					</span>
					<span>
						<FaCheck className='inline-block text-[#1589CF]' /> Smooth Finish:
						After treatment, your paint will feel noticeably smoother, slicker,
						and better protected.
					</span>
					<span>
						<FaCheck className='inline-block text-[#1589CF]' /> Paint Longevity:
						Helps maintain the fresh, vibrant look of your vehicle's paint for
						years to come.
					</span>
					<span id='options'>
						<FaCheck className='inline-block text-[#1589CF]' /> OEM-Style
						Finish: Leaves your interior looking clean, smooth, and close to its
						original factory appearance—without any oily residue.
					</span>
					<span>
						When was the last time you ceramic sealed your car?
						<br /> Protect your investment today with a service designed to
						battle London's extreme weather and keep your vehicle looking its
						best!
					</span>
				</div>
				<div className='flex flex-col md:flex-row items-stretch justify-center gap-10 w-full p-10'>
					<div className='md:w-1/2 lg:w-1/3 xl:1/4 2xl:w-1/5 border rounded-4xl flex flex-col justify-center items-center gap-5 p-10 relative hover:border hover:border-[#1589CF] transition-all hover:-translate-y-1'>
						<p className='text-3xl text-center font-bold'>🧼 Showroom Shine</p>
						<div className='grid grid-rows-2 grid-cols-3 justify-center items-center text-center sm:mx-0 -mx-5'>
							<span className='border-r-2 border-l-2 h-full flex justify-center items-center'>
								Sedan
							</span>
							<span>SUVs</span>
							<span className='border-r-2 border-l-2 h-full flex justify-center items-center px-2'>
								Large SUVs & Trucks
							</span>
							<span className='border-r-2 border-l-2 h-full flex justify-center items-center'>
								$60
							</span>
							<span>$70</span>
							<span className='border-r-2 border-l-2 h-full flex justify-center items-center'>
								$90
							</span>
						</div>
						<span className='flex flex-col gap-2'>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Thoroughly
								clean wheels, tires, tire wells
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Apply the
								pre-rinse solution to chemically decompose, bugs, dirt, and bird
								droppings
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Foam wash
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Hand wash
								the vehicle, that includes the gas cap, and removing the dirt
								and bugs from the front end
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Towel dry
								the car
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Dressing the
								fenders (if plastic) and tires to make them shine and touching
								up final details
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Cleaning the
								exterior windows to give you a streak free window
							</span>
						</span>
						<a
							href='#showroom-shine'
							className='py-3 px-5 bg-[#1589CF] rounded-4xl hover:bg-blue-700 transition-colors'
						>
							Read More
						</a>
					</div>
					<div className='md:w-1/2 lg:w-1/3 xl:1/4 2xl:w-1/5 border rounded-4xl flex flex-col justify-center items-center gap-5 p-10 relative hover:border hover:border-[#1589CF] transition-all hover:-translate-y-1'>
						<span className='absolute font-semibold text-xl bg-[#1589CF] rotate-45 top-[2rem] -right-[2.6rem] px-7 py-1 [clip-path:polygon(19.8%_0%,80%_0%,100%_100%,0%_100%)]'>
							Most Popular
						</span>
						<p className='text-3xl text-center font-bold px-6'>
							🛡️ Showroom Shine
						</p>
						<p className='text-3xl text-center font-bold -mt-3'>
							+ Ceramic Sealant
						</p>
						<div className='grid grid-rows-2 grid-cols-3 justify-center items-center text-center sm:mx-0 -mx-5'>
							<span className='border-r-2 border-l-2 h-full flex justify-center items-center'>
								Sedan
							</span>
							<span>SUVs</span>
							<span className='border-r-2 border-l-2 h-full flex justify-center items-center px-2'>
								Large SUVs & Trucks
							</span>
							<span className='border-r-2 border-l-2 h-full flex justify-center items-center'>
								$85
							</span>
							<span>$95</span>
							<span className='border-r-2 border-l-2 h-full flex justify-center items-center'>
								$115
							</span>
						</div>
						<span className='flex flex-col gap-2'>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Thoroughly
								clean wheels, tires, tire wells
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Apply the
								pre-rinse solution to chemically decompose, bugs, dirt, and bird
								droppings
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Foam wash
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Hand wash
								the vehicle, that includes the gas cap, and removing the dirt
								and bugs from the front end
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Towel dry
								the car
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Dressing the
								fenders (if plastic) and tires to make them shine and touching
								up final details
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Cleaning the
								exterior windows to give you a streak free window
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Ceramic
								Sealant creating a protective layer promoting hydrophobic
								properties
							</span>
						</span>
						<a
							href='#showroom-shine-ceramic-sealant'
							className='py-3 px-5 bg-[#1589CF] rounded-4xl hover:bg-blue-700 transition-colors'
							id='showroom-shine-ceramic-sealant'
						>
							Read More
						</a>
					</div>
				</div>
				<p className='mt-10 text-4xl font-bold'>Step by Step</p>
				<div className='md:w-2/3 xl:w-1/3 w-fit border rounded-2xl p-10 m-10 flex flex-col justify-center items-center gap-10'>
					<p className='text-center md:text-4xl text-3xl font-bold -mb-5'>
						🛡️ Showroom Shine + Ceramic Sealant:
					</p>
					<p className='sm:text-2xl text-xl -mx-5 sm:mx-0'>
						In addition to the "Showroom Shine" treatment we apply a layer of
						sealant to all painted surfaces to provide shine and protection
					</p>
					{/* TODO: add video here */}
					<video
						className='h-fit rounded-2xl'
						muted
						loop
						controls
						controlsList='nofullscreen nodownload noremoteplayback'
					>
						<source src='My Movie 5.mov' />
					</video>
					<p className='-mb-6 sm:text-2xl text-lg text-center'>
						<b>🕒 Time Required:</b> ~1.5 hours
					</p>
					<p id='showroom-shine' className='sm:text-2xl text-lg text-center'>
						<b>💵 Pricing:</b> $85 Sedans $95 SUVs $115 Large SUVs & Trucks
					</p>
				</div>
				<div className='md:w-2/3 xl:w-1/3 w-fit border rounded-2xl p-10 m-10 flex flex-col justify-center items-center gap-10'>
					<p className='text-center md:text-4xl text-3xl font-bold -mb-5'>
						🧼 Showroom Shine:
					</p>
					<p className='sm:text-2xl text-xl -mx-5 sm:mx-0'>
						Our <b>Showroom Shine</b> service brings your vehicle's exterior
						back to life with a thorough and detailed cleaning.
					</p>
					<ul className='list-disc list-inside text-xl sm:w-4/5 -mx-4 -mb-5'>
						<b>✅ What's Included:</b>
						<li className='mt-3 md:mt-2'>
							Wheels, tires, and tire wells thoroughly cleaned
						</li>
						<li className='mt-3 md:mt-2'>
							Pre-rinse solution applied to break down bird droppings and tough
							dirt
						</li>
						<li className='mt-3 md:mt-2'>Full foam wash of the exterior</li>
						<li className='mt-3 md:mt-2'>
							Hand wash of the entire vehicle, including the gas cap and
							front-end bug removal
						</li>
						<li className='mt-3 md:mt-2'>
							Towel-dry of the car to prevent water spots
						</li>
						<li className='mt-3 md:mt-2'>
							Dressing of fenders (if plastic) and tires for a clean, glossy
							finish
						</li>
						<li className='mt-3 md:mt-2'>
							Cleaning of all exterior windows for a streak-free shine
						</li>
					</ul>
					<p className='-mb-6 sm:text-2xl text-lg text-center'>
						<b>🕒 Time Required:</b> ~1 hour
					</p>
					<p className='sm:text-2xl text-lg text-center'>
						<b>💵 Pricing:</b> $60 Sedans $70 SUVs $90 Large SUVs & Trucks
					</p>
				</div>
				<div className='flex flex-col gap-4 px-10 sm:w-1/2 sm:px-0 xl:w-1/3'>
					<span className='text-4xl font-semibold text-center'>
						How Can I Be Able to Maintain the Shine and Protection?
					</span>
					<span>
						<FaCheck className='inline-block text-[#1589CF]' /> A great way to
						be able to maintain the looks of your vehicle would be our{" "}
						<Link
							className='underline hover:text-gray-400 transition-colors'
							href='/maintenance-referrals'
						>
							Maintenance Program.
						</Link>
					</span>
					<span>
						<FaCheck className='inline-block text-[#1589CF]' /> The Maintenance
						Program includes our exterior and interior service which is the{" "}
						<a
							href='#showroom-shine'
							className='underline hover:text-gray-400 transition-colors'
						>
							Showroom Shine
						</a>{" "}
						and{" "}
						<Link
							href='/interior#quick-cabin-care'
							className='underline hover:text-gray-400 transition-colors'
						>
							Quick Cabin Care.
						</Link>
					</span>
					<span>
						If you like a thorough cleaning on the interior of your vehicle for
						a complete transformation, then you can check out our{" "}
						<Link
							href='/interior#cabin-care'
							className='underline hover:text-gray-400 transition-colors'
						>
							Cabin Care Cleaning Service.
						</Link>
						<br /> This a great service to cleaning everything in your interior
						to the best condition possible.
					</span>
				</div>
			</div>
		</div>
	);
}
