import HeroBanner from "./components/HeroBanner";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<HeroBanner />
			<div className='flex flex-col justify-center items-center gap-20'>
				<div className='flex flex-col mt-15 justify-center items-center gap-4 md:w-1/2 px-9'>
					<p className='text-center md:text-5xl text-4xl font-bold'>
						Auto Detailing Services
					</p>
					<p className='text-xl mb-10'>
						We're here to take care of all your vehicle needs! Whether you need
						a rigorous interior cleaning for your vehicle or a quick exterior
						wash to perfect it for a cars and coffee, we've got you covered.{" "}
						<br />
						<br /> Our objective is to deliver optimal results, irrespective of
						the specific services or tasks you require.
					</p>
					<video
						className='h-fit rounded-2xl'
						muted
						loop
						controls
						controlsList='nofullscreen nodownload noremoteplayback'
					>
						<source src='copy_F29E9804-AFB7-4737-8059-CAA22EE4DF75.qt' />
					</video>
				</div>
				<div className='flex flex-col md:flex-row items-stretch justify-center gap-10 w-full p-10'>
					<div className='md:w-1/2 lg:w-1/3 xl:1/4 2xl:w-1/5 border rounded-4xl flex flex-col justify-end items-center gap-5 p-10 relative hover:border hover:border-[#1589CF] transition-all hover:-translate-y-1'>
						<span className='absolute font-semibold text-xl bg-[#1589CF] rotate-45 top-[3.70rem] -right-13 px-7 py-1 [clip-path:polygon(14%_0%,86%_0%,100%_100%,0%_100%)]'>
							Most Popular Interior
						</span>
						<Image
							className='w-4/5 rounded-3xl'
							src='/IMG_0443.jpg'
							width={144}
							height={144}
							alt='Before and after of a interior clean'
						/>
						<p className='text-3xl text-center font-bold'>Full Cabin Care</p>
						<p>
							Has the interior of your car gotten out of hand? Want to make it
							look and feel like new again? This service is perfect because you
							will get a thorough cleaning of your vehicle. <br />
							<br />
							We'll clean everything from top to bottom, front to rear, to the
							best condition possible (seats, floor mats, door panels,
							dashboard, vents, etc...).
						</p>
						<Link
							href='/interior#options'
							className='py-3 px-5 bg-[#1589CF] rounded-4xl'
						>
							Read More
						</Link>
					</div>
					<div
						className='md:w-1/2 lg:w-1/3 xl:1/4 2xl:w-1/5 border rounded-4xl flex flex-col justify-end items-center gap-5 p-10 relative hover:border hover:border-[#1589CF] transition-all hover:-translate-y-1'
					>
						<span className='absolute font-semibold text-xl bg-[#1589CF] rotate-45 top-[2rem] -right-[2.6rem] px-7 py-1 [clip-path:polygon(19.8%_0%,80%_0%,100%_100%,0%_100%)]'>
							Most Popular
						</span>
						<Image
							className='w-full rounded-3xl'
							src='/IMG_7762.jpg'
							width={144}
							height={144}
							alt='Image of front of car'
						/>
						<p className='text-3xl text-center font-bold'>
							Show Room Shine <br />
							<span className="text-xl font-semibold">+ Ceramic Sealant ($25)</span>
						</p>
						<p>
							Has it been a while since your car was coated? Or maybe you just
							got a new one? A showroom shine treatment is the perfect start,
							our coating chemically bonds to the paint, creating a hydrophobic
							layer that repels water and makes future washes quicker and
							easier.
							<br />
							<br />
							Not only will your car look better, but you'll feel the smooth,
							slick finish when we're done
						</p>
						<Link
							href='/exterior#options'
							className='py-3 px-5 bg-[#1589CF] rounded-4xl'
						>
							Read More
						</Link>
					</div>
				</div>
				<div className='sm:w-2/3 lg:w-fit border rounded-2xl p-10 m-10'>
					<p className='text-center text-3xl font-bold mb-10'>
						Servicing You At Your Home in North London and Surrounding Area
					</p>
					<span className='flex flex-col lg:flex-row gap-10 justify-center items-center'>
						<Image
							className='w-md md:w-xs rounded-2xl'
							src='/IMG_7557.jpeg'
							width={1380}
							height={1506}
							alt='Image of front of car'
						/>
						<ul className='text-white list-disc justify-center items-center h-fit text-xl lg:[line-height:3rem]'>
							<li>
								A mobile unit that brings car detailing services directly to
								you.
							</li>
							<li>
								Choose your services, pick a date and time, and expect excellent
								results.
							</li>
							<li>
								We require access to your power and water to complete the job.
							</li>
						</ul>
					</span>
				</div>
			</div>
		</div>
	);
}
