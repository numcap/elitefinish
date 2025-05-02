import Link from "next/link";

export default function MaintenanceReferrals() {
	return (
		<div className='flex justify-center items-center'>
			<div className='flex flex-col justify-center items-center mt-10 sm:w-1/2 sm:px-0 px-10 xl:w-1/3 gap-10 text-xl'>
				<p className='md:text-5xl text-4xl font-bold text-center md:-mx-10'>
					🛠️ Maintenance & 🎟️ Referrals
				</p>
				<p className='text-2xl text-center font-semibold -mb-5'>
					🚗 Referral Rewards at Elite Finish Auto! 🚗
				</p>
				<p>
					Love your detail? Share the shine! For every friend you refer, you
					both get <b>10% off</b> your next service—and the best part?{" "}
					<b>It stacks!</b> Refer 10 friends and your next service is{" "}
					<b>100% FREE.</b>
					Start sharing, start saving! 💥✨
				</p>
				<p className='text-2xl text-center font-semibold -mb-5'>
					Prefect Detailing Program To Keep Your Vehicle Looking Great.
				</p>
				<p>
					Detailing is not rocket science, but there is a proper way to get
					better results than your typical down the street car wash.{" "}
				</p>
				<p>
					If you're looking for a quick and cheap option to get your vehicle
					washed in London, then we are most likely are the right fit for you.
					We take the interior and exterior process further to providing a
					higher quality of service and results.
				</p>
				<p>
					This will be a great fit if you are looking to keep the maintenance of
					your vehicle looking great. This can range anywhere from weekly,
					bi-weekly, or even monthly, it just depends on how often you use your
					vehicle.
				</p>
				<p>
					The services that will be included in our program would be our{" "}
					<Link
						className='underline hover:text-gray-400 transition-colors'
						href='/exterior#showroom-shine'
					>
						Showroom Shine
					</Link>{" "}
					and our{" "}
					<Link
						className='underline hover:text-gray-400 transition-colors'
						href='/interior#quick-cabin-care'
					>
						Quick Cabin Care.
					</Link>{" "}
				</p>
				<p className='text-2xl text-center font-semibold -mb-5'>
					How Do I Know These Services Are For Me?
				</p>
				<p>
					These services include no deep cleaning. If you have heavy amount of
					stains, spills, or even pet hair then we highly recommend to go with
					our{" "}
					<Link
						className='underline hover:text-gray-400 transition-colors'
						href='/interior#cabin-care'
					>
						Cabin Care Service
					</Link>{" "}
					then we can be able to maintenance the vehicle to keep it in a great
					condition.
				</p>
				<p className='text-2xl text-center font-semibold -mb-5'>
					What Are The Requirements To Get Into The Program?
				</p>
				<p>
					Before you are able to get into the program, it will have to go
					through a series of our{" "}
					<Link
						className='underline hover:text-gray-400 transition-colors'
						href='/exterior#showroom-shine-ceramic-sealant'
					>
						Showroom Shine + Ceramic Sealant
					</Link>{" "}
					services applied to be able to maintain that protection. <br />
					<br />
					For the interior, it will have to go through our{" "}
					<Link
						className='underline hover:text-gray-400 transition-colors'
						href='/interior#cabin-care'
					>
						Cabin Care
					</Link>{" "}
					treatment to get the condition of the vehicle back to the original
					condition.
				</p>
			</div>
		</div>
	);
}
