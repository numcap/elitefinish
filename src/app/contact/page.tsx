import { ContactForm } from "../components/ContactForm";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaAsterisk } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";

export default function Contact() {
	return (
		<div className='flex md:flex-row flex-col justify-center items-center gap-8 md:mx-12'>
			<div className='flex flex-col md:w-2/5 gap-4 md:mx-0 mx-14'>
				<p className='text-4xl font-bold'>Request a Quote</p>
				<p className='text-xl font-semibold'>
					Get in contact by simply sending us a email, text or by filling out
					the form, anytime you want
				</p>
				<p className='inline-flex gap-x-2 items-center text-red-500 text-lg font-semibold'>
					Required <FaAsterisk className='h-4' />
				</p>
				<span className='flex flex-col gap-1'>
					<span className='inline-flex gap-2 items-center'>
						<MdOutlineEmail className='w-5 h-5' />
						<a href='mailto:elitefinishauto519@gmail.com'>
							elitefinishauto519@gmail.com
						</a>
					</span>
					<span className='inline-flex gap-2 items-center'>
						<FaPhone className='w-5 h-5' />
						<a href='tel:4167060727'>(416) 706-0727</a>
					</span>
					<span className='inline-flex gap-2 items-center'>
						<FaInstagram className='w-5 h-5' />
						<a href='https://www.instagram.com/elitefinishauto519'>
							@elitefinishauto519
						</a>
					</span>
					<span className='inline-flex gap-2 items-center'>
						<IoLogoFacebook className='w-5 h-5' />
						<a href='https://www.facebook.com/EliteFinishAuto519/'>
							@elitefinishauto519
						</a>
					</span>
				</span>
				<iframe
					className='lg:block hidden rounded-xl'
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34672.24662818153!2d-81.28838647687141!3d43.01035919384452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882eee40b387d987%3A0x45c8016da659f524!2sMasonville%2C%20London%2C%20ON!5e1!3m2!1sen!2sca!4v1746078143447!5m2!1sen!2sca'
					width='400'
					height='250'
					style={{ border: 0 }}
					allowFullScreen={undefined}
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
				></iframe>
			</div>
			<ContactForm />
		</div>
	);
}
