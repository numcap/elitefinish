import { Slider } from "../components/Slider";

export default function Gallery() {
	const imageNames: { before: string; after: string }[] = [
		{ after: "/gallery/IMG_7747.jpeg", before: "/gallery/IMG_7758.jpeg" },
		{ after: "/gallery/IMG_7656.jpeg", before: "/gallery/IMG_7681.jpeg" },
		{ after: "/gallery/IMG_7663.jpeg", before: "/gallery/IMG_7677.jpeg" },
		{ after: "/gallery/IMG_7658.jpeg", before: "/gallery/IMG_7670.jpeg" },
		{ after: "/gallery/IMG_7794.jpeg", before: "/gallery/IMG_7826.jpeg" },
		{ after: "/gallery/IMG_7797.jpeg", before: "/gallery/IMG_7825.jpeg" },
		{ after: "/gallery/IMG_7804.jpeg", before: "/gallery/IMG_7815.jpeg" },
		{ after: "/gallery/IMG_7865.jpeg", before: "/gallery/IMG_7928.jpg" },
		{ after: "/gallery/IMG_7869.jpeg", before: "/gallery/IMG_7932.jpeg" },
		{ after: "/gallery/IMG_7893.jpeg", before: "/gallery/IMG_7907.jpg" },
		{ after: "/gallery/IMG_7911.jpeg", before: "/gallery/IMG_7918.jpeg" },
		{ after: "/gallery/IMG_7912.jpeg", before: "/gallery/IMG_7919.jpg" },
		{ after: "/gallery/IMG_7914.jpeg", before: "/gallery/IMG_7922.jpeg" },
		{ after: "/gallery/IMG_7873.jpeg", before: "/gallery/IMG_7935.jpg" },
	];

	return (
		<div className='flex flex-col justify-center items-center p-5 gap-8'>
			<p className='text-5xl font-bold'>Gallery</p>
			<div className='flex w-full h-full flex-wrap justify-center items-center gap-10'>
				{imageNames.map((images) => (
					<div key={images.after} className='h-80 w-80'>
						<Slider
							key={images.before}
							beforeImage={images.before}
							afterImage={images.after}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
