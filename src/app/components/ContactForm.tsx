"use client";
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { FaAsterisk } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

export function ContactForm() {
	const [state, handleSubmit] = useForm("mzzrdqvr");

	if (state.succeeded) {
		return (
			<div className='border rounded-2xl p-10 text-center w-full sm:w-4/5'>
				Thank you for reaching out to <b>Elite Finish Auto!</b> We've received
				your request and will get back to you shortly. <br />
				<br />
				We look forward to making your vehicle look its best! 🚗✨
			</div>
		);
	}

	return (
		<form
			className='border flex flex-col gap-3 items-center p-10 w-full sm:w-4/5 rounded-4xl'
			onSubmit={handleSubmit}
		>
			<div className='flex flex-col w-full gap-0.5'>
				<label className='' htmlFor='customer-name'>
					Full Name <FaAsterisk className='text-red-500 inline w-3' />
				</label>
				<input
					className='bg-black border rounded-md px-2.5 py-1.5 focus:border-[#1589CF] outline-none'
					id='customer-name'
					name='customer-name'
					required
				/>
			</div>
			<div className='flex flex-col w-full gap-0.5'>
				<label htmlFor='customer-phone'>
					Phone Number <FaAsterisk className='text-red-500 inline w-3' />
				</label>
				<input
					className='bg-black border rounded-md px-2.5 py-1.5 focus:border-[#1589CF] outline-none'
					id='customer-phone'
					name='customer-phone'
					placeholder='XXX-XXX-XXXX'
					required
				/>
			</div>
			<div className='flex flex-col w-full gap-0.5'>
				<label className='fs-label' htmlFor='customer-email'>
					Email Address
				</label>
				<input
					className='bg-black border rounded-md px-2.5 py-1.5 focus:border-[#1589CF] outline-none'
					id='customer-email'
					name='customer-email'
				/>
			</div>
			<div className='flex flex-col w-full gap-0.5'>
				<label className='fs-label' htmlFor='year-make-model'>
					Year, Make and Model of Vehicle{" "}
					<FaAsterisk className='text-red-500 inline w-3' />
				</label>
				<input
					className='bg-black border rounded-md px-2.5 py-1.5 focus:border-[#1589CF] outline-none'
					id='year-make-model'
					name='year-make-model'
					placeholder='2021 Acura TLX'
					required
				/>
			</div>
			<p className='mt-5 text-lg'>Service(s) Would You like:</p>
			<div className='flex flex-col w-full gap-0.5'>
				<label className='fs-label' htmlFor='interior'>
					Interior <FaAsterisk className='text-red-500 inline w-2.5' />:
				</label>
				<select
					className='bg-black border rounded-md px-2.5 py-1.5 focus:border-[#1589CF] outline-none flex-grow-1'
					id='interior-option'
					name='interior-option'
					required
				>
					<option value='none'>None</option>
					<option value='cabin-care'>Cabin Care</option>
					<option value='quick-cabin-care'>Quick Cabin Care</option>
				</select>
			</div>
			<div className='flex flex-col w-full gap-0.5'>
				<label className='flex-grow-1' htmlFor='exterior'>
					Exterior{" "}
					<FaAsterisk className='text-red-500 inline w-2.5 flex-grow-1' />:
				</label>
				<select
					className='bg-black border rounded-md px-2.5 py-1.5 focus:border-[#1589CF] outline-none'
					id='exterior-option'
					name='exterior-option'
					required
				>
					<option value='none'>None</option>
					<option value='showroom-shine'>Showroom Shine</option>
					<option value='showroom-shine-ceramic'>
						Showroom Shine + Ceramic Sealant
					</option>
				</select>
			</div>
			<div className='flex flex-col w-full gap-0.5'>
				<label className='fs-label' htmlFor='additional-details'>
					Additional Details (Optional)
				</label>
				<textarea
					className='px-2.5 py-1.5 bg-black rounded-md border focus:border-[#1589CF] outline-none'
					id='additional-details'
					name='additional-details'
					placeholder='Anything We Should Know About The Condition of The Car'
				/>
			</div>
			<button
				className='bg-[#1589CF] rounded-full w-fit py-2 px-5 mt-4 hover:bg-blue-950 transition-all cursor-pointer'
				type='submit'
			>
				Submit
			</button>
		</form>
	);
}
