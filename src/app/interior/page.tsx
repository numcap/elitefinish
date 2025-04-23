import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaAsterisk } from "react-icons/fa";

export default function Interior() {
	return (
		<div>
			<div className='relative flex flex-col h-[40rem]'>
				<Image
					src='/IMG_0446.jpg'
					width={933}
					height={826}
					alt='before and after of backseats'
					className='absolute top-0 left-0 opacity-50 object-cover h-full w-full'
				/>
				<div className='relative z-10 flex flex-col items-center justify-center h-full gap-20'>
					<h1 className='text-white md:px-36 px-5 mb-5 text-4xl md:text-6xl text-center 2xl:w-[60%]'>
						Thorough Deep Car Interior Cleaning in London
					</h1>
					<h1 className='text-white md:px-36 px-5 text-xl md:text-2xl text-center 2xl:w-[60%]'>
						Transform the look of your interior with one of our popular interior
						services to make it look like-new!
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
						Transforming your Interior from Dirty to like-new
					</span>
					<span>
						<FaCheck className='inline-block text-[#1589CF]' /> Comprehensive
						Interior Cleaning: Covers every area from top to bottom and front to
						back, including seats, floor mats, door panels, dashboard, vents,
						and more.
					</span>
					<span>
						<FaCheck className='inline-block text-[#1589CF]' /> Deep Shampoo
						Treatment: Includes full interior shampooing to lift dirt and grime.
					</span>
					<span>
						<FaCheck className='inline-block text-[#1589CF]' /> Stain Removal
						Effort: We do our best to remove stains, but results vary based on
						the type of stain, how long it's been there, and the material
						affected.
					</span>
					<span>
						<FaCheck className='inline-block text-[#1589CF]' /> Improved
						Appearance: While not all stains can be completely removed, most
						will look significantly better after treatment.
					</span>
					<span>
						<FaCheck className='inline-block text-[#1589CF]' /> Protective
						Dressing Applied: We apply a UV-protective, non-greasy dressing to
						your dashboard, leather seats, and steering wheel.
					</span>
					<span id='options'>
						<FaCheck className='inline-block text-[#1589CF]' /> OEM-Style
						Finish: Leaves your interior looking clean, smooth, and close to its
						original factory appearance—without any oily residue.
					</span>
				</div>
				<div className='flex flex-col md:flex-row items-stretch justify-center gap-10 w-full p-10'>
					<div className='md:w-1/2 lg:w-1/3 xl:1/4 2xl:w-1/5 border rounded-4xl flex flex-col justify-center items-center gap-5 p-10 relative hover:border hover:border-[#1589CF] transition-all hover:-translate-y-1'>
						<p className='text-3xl text-center font-bold'>
							💨 Quick Cabin Care
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
								$40
							</span>
							<span>$50</span>
							<span className='border-r-2 border-l-2 h-full flex justify-center items-center'>
								$70
							</span>
						</div>
						<span className='flex flex-col gap-2'>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Remove any
								garbage or belongings
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Thorough
								vacuuming ( carpets, seats floor mats, cupholders, etc)
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Wipe down of
								all dust and debris on all surfaces
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Shine and
								protection on dash
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Interior
								windows glass cleaned
							</span>
						</span>
						<a
							href='#quick-cabin-care'
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
							🧽 Full Cabin Care
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
								$105
							</span>
							<span>$115</span>
							<span className='border-r-2 border-l-2 h-full flex justify-center items-center'>
								$135
							</span>
						</div>
						<p className='text-sm'>
							<FaAsterisk className='inline-block h-3' /> Price May Vary
							depending on Condition of Interior
						</p>
						<span className='flex flex-col gap-2'>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Remove any
								garbage or belongings
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Blow out
								debris and loose dust
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Remove Pet
								Hair
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Shampoo
								seats / clean leather
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Clean break
								pedals
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Clean door
								jambs
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Clean
								windows and mirrors
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Thorough
								vacuum
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Clean rubber
								floor mats + shampoo carpet mats
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Apply a UV
								protectant to dash and door panels
							</span>
							<span>
								<FaCheck className='inline-block text-[#1589CF]' /> Apply a dust
								repellent to dash and door panels
							</span>
						</span>
						<a
							href='#cabin-care'
							className='py-3 px-5 bg-[#1589CF] rounded-4xl hover:bg-blue-700 transition-colors'
							id='cabin-care'
						>
							Read More
						</a>
					</div>
				</div>
				<p className="">Step by Step</p>
				<div className='md:w-2/3 xl:w-1/3 w-fit border rounded-2xl p-10 m-10 flex flex-col justify-center items-center gap-10'>
					<p className='text-center md:text-3xl text-2xl font-bold -mb-5'>
						🧽 Cabin Care Cleaning:
					</p>
					<p className='sm:text-2xl text-xl -mx-5 sm:mx-0'>
						This is our <b>comprehensive deep cleaning service</b> that restores
						your vehicle's interior to like-new condition. It's ideal for cars
						that haven't been cleaned in a while or need more than just a
						surface touch-up.
					</p>
					<ul className='list-disc list-inside text-xl sm:w-4/5 -mx-4 -mb-5'>
						<b>✅ What's Included:</b>
						<li className='mt-3 md:mt-2'>
							Removal of all personal items to ensure full access
						</li>
						<li className='mt-3 md:mt-2'>
							Thorough vacuuming of all areas, including the trunk
						</li>
						<li className='mt-3 md:mt-2'>
							Shampoo and extraction of seats and floor mats to remove embedded
							dirt and stains
						</li>
						<li className='mt-3 md:mt-2'>
							Deep cleaning of all vinyl, plastic, and leather surfaces
						</li>
						<li className='mt-3 md:mt-2'>
							UV protectant spray applied to all plastics of the car
						</li>
						<li className='mt-3 md:mt-2'>
							Interior windows and mirrors cleaned and polished
						</li>
						<li className='mt-3 md:mt-2'>
							Final inspection and touch-ups to ensure nothing is missed
						</li>
					</ul>
					<p className='sm:text-lg'>
						<b>Note:</b> This is a full restoration service, not a maintenance
						wipe-down. For regular upkeep, check out our{" "}
						{/* TODO add link here */}
						<a
							className='underline hover:text-gray-400 transition-colors'
							href='#quick-cabin-care'
						>
							Quick Cabin Care package.
						</a>
					</p>
					<p className='-mb-6 sm:text-2xl text-lg text-center'>
						<b>🕒 Time Required:</b> ~2 hour
					</p>
					<p id='quick-cabin-care' className='sm:text-2xl text-lg text-center'>
						<b>💵 Pricing:</b> Starting at $105 but based on Vehicle Size and
						Interior Condition Price May Vary
					</p>
				</div>
				<div className='sm:w-2/3 xl:w-1/3 border rounded-2xl p-10 m-10 flex flex-col justify-center items-center gap-10'>
					<p className='text-center md:text-3xl text-2xl font-bold -mb-5'>
						💨 Quick Cabin Care:
					</p>
					<p className='sm:text-2xl text-xl -mx-5 sm:mx-0'>
						This service is designed to keep your vehicle's interior fresh with
						regular upkeep. It <b>does not include deep cleaning</b> and is
						ideal for vehicles that are maintained regularly.
					</p>
					<ul className='list-disc list-inside text-xl sm:w-4/5 -mx-4 -mb-5'>
						<b>✅ What's Included:</b>
						<li className='mt-3 md:mt-2'>
							Full interior vacuum (carpets, seats, floor mats, cupholders,
							etc.)
						</li>
						<li className='mt-3 md:mt-2'>
							Wipe down of all surfaces to remove dust and debris
						</li>
						<li className='mt-3 md:mt-2'>
							Shine and protectant applied to dashboard
						</li>
						<li className='mt-3 md:mt-2'>
							Interior windows and mirrors cleaned
						</li>
					</ul>
					<p className='sm:text-lg'>
						<b>Note:</b> For deep cleaning (carpet shampooing, seat extraction,
						door panel detailing, etc.), we recommend our{" "}
						{/* TODO add link here */}
						<a
							className='underline hover:text-gray-400 transition-colors'
							href='#cabin-care'
						>
							Full Interior Cleaning package.
						</a>
					</p>
					<p className='-mb-6 sm:text-2xl text-lg text-center'>
						<b>🕒 Time Required:</b> ~1 hour
					</p>
					<p className='sm:text-2xl text-lg text-center'>
						<b>💵 Pricing:</b> ($40 Sedans, $50 Suv's, $70 Large Suv's & Trucks)
					</p>
				</div>
			</div>
		</div>
	);
}
