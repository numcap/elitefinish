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
						className='text-3xl py-4 px-5 bg-[#1589CF] hover: rounded-3xl cursor-pointer'
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
						<FaCheck className='inline-block' /> Comprehensive Interior
						Cleaning: Covers every area from top to bottom and front to back,
						including seats, floor mats, door panels, dashboard, vents, and
						more.
					</span>
					<span>
						<FaCheck className='inline-block' /> Deep Shampoo Treatment:
						Includes full interior shampooing to lift dirt and grime.
					</span>
					<span>
						<FaCheck className='inline-block' /> Stain Removal Effort: We do our
						best to remove stains, but results vary based on the type of stain,
						how long it's been there, and the material affected.
					</span>
					<span>
						<FaCheck className='inline-block' /> Improved Appearance: While not
						all stains can be completely removed, most will look significantly
						better after treatment.
					</span>
					<span>
						<FaCheck className='inline-block' /> Protective Dressing Applied: We
						apply a UV-protective, non-greasy dressing to your dashboard,
						leather seats, and steering wheel.
					</span>
					<span>
						<FaCheck className='inline-block' /> OEM-Style Finish: Leaves your
						interior looking clean, smooth, and close to its original factory
						appearance—without any oily residue.
					</span>
				</div>
				<div className='flex flex-col md:flex-row items-stretch justify-center gap-10 w-full p-10'>
					<div
						className='md:w-1/2 lg:w-1/3 xl:1/4 2xl:w-1/5 border rounded-4xl flex flex-col justify-center items-center gap-5 p-10 relative'
						id='washDiv'
					>
						{/* <Image
							className='w-full rounded-3xl'
							src='/IMG_7562.jpeg'
							width={144}
							height={144}
							alt='Before and after of a interior clean'
						/> */}
						<p className='text-3xl text-center font-bold'>
							💨 Quick Cabin Care
						</p>
						<div className='grid grid-rows-2 grid-cols-3 justify-center items-center text-center'>
							<span className='border-r-2 border-l-2 h-full flex justify-center items-center sm:mx-0 -mx-5'>
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
								<FaCheck className='inline-block' /> Remove any garbage or
								belongings
							</span>
							<span>
								<FaCheck className='inline-block' /> Thorough vacuuming (
								carpets, seats floor mats, cupholders, etc)
							</span>
							<span>
								<FaCheck className='inline-block' /> Wipe down of all dust and
								debris on all surfaces
							</span>
							<span>
								<FaCheck className='inline-block' /> Shine and protection on
								dash
							</span>
							<span>
								<FaCheck className='inline-block' /> Interior windows glass
								cleaned
							</span>
						</span>
						<Link
							href='/exterior'
							className='py-3 px-5 bg-[#1589CF] rounded-4xl'
						>
							Read More
						</Link>
					</div>
					<div className='md:w-1/2 lg:w-1/3 xl:1/4 2xl:w-1/5 border rounded-4xl flex flex-col justify-center items-center gap-5 p-10 relative'>
						{/* <Image
							className='w-full rounded-3xl'
							src='/IMG_0443.jpg'
							width={144}
							height={144}
							alt='Before and after of a interior clean'
						/> */}
						<span className='absolute font-semibold text-xl bg-[#1589CF] rotate-45 top-[2rem] -right-[2.6rem] px-7 py-1 [clip-path:polygon(19.8%_0%,80%_0%,100%_100%,0%_100%)]'>
							Most Popular
						</span>
						<p className='text-3xl text-center font-bold sm:px-0 px-5'>🧽 Full Cabin Care</p>
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
								<FaCheck className='inline-block' /> Remove any garbage or
								belongings
							</span>
							<span>
								<FaCheck className='inline-block' /> Blow out debris and loose
								dust
							</span>
							<span>
								<FaCheck className='inline-block' /> Remove Pet Hair
							</span>
							<span>
								<FaCheck className='inline-block' /> Shampoo seats / clean
								leather
							</span>
							<span>
								<FaCheck className='inline-block' /> Clean break pedals
							</span>
							<span>
								<FaCheck className='inline-block' /> Clean door jambs
							</span>
							<span>
								<FaCheck className='inline-block' /> Clean windows and mirrors
							</span>
							<span>
								<FaCheck className='inline-block' /> Thorough vacuum
							</span>
							<span>
								<FaCheck className='inline-block' /> Clean rubber floor mats +
								shampoo carpet mats
							</span>
							<span>
								<FaCheck className='inline-block' /> Apply a UV protectant to
								dash and door panels
							</span>
							<span>
								<FaCheck className='inline-block' /> Apply a dust repellent to
								dash and door panels
							</span>
						</span>
						<Link
							href='/interior'
							className='py-3 px-5 bg-[#1589CF] rounded-4xl'
						>
							Read More
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
