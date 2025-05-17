import { Slider } from "../components/Slider";

export default function Gallery() {
	const imageNames: { before: string; after: string }[] = [
		{ after: "/gallery/IMG_7749.jpeg", before: "/gallery/IMG_7756.jpeg" },
		{ after: "/gallery/IMG_7747.jpeg", before: "/gallery/IMG_7758.jpeg" },
		{ after: "/gallery/IMG_7746.jpeg", before: "/gallery/IMG_7759.jpeg" },
		{ after: "/gallery/IMG_7656.jpeg", before: "/gallery/IMG_7681.jpeg" },
		{ after: "/gallery/IMG_7657.jpeg", before: "/gallery/IMG_7667.jpeg" },
		{ after: "/gallery/IMG_7665.jpeg", before: "/gallery/IMG_7680.jpeg" },
		{ after: "/gallery/IMG_7663.jpeg", before: "/gallery/IMG_7677.jpeg" },
		{ after: "/gallery/IMG_7658.jpeg", before: "/gallery/IMG_7670.jpeg" },
		{ after: "/gallery/IMG_7794.jpeg", before: "/gallery/IMG_7826.jpeg" },
		{ after: "/gallery/IMG_7792.jpeg", before: "/gallery/IMG_7828.jpeg" },
		{ after: "/gallery/IMG_7797.jpeg", before: "/gallery/IMG_7825.jpeg" },
		{ after: "/gallery/IMG_7801.jpeg", before: "/gallery/IMG_7820.jpeg" },
		{ after: "/gallery/IMG_7804.jpeg", before: "/gallery/IMG_7815.jpeg" },
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
