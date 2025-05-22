"use client";

import Image from "next/image";
import { useState } from "react";

export const Slider = ({
	beforeImage,
	afterImage,
}: {
	beforeImage: string;
	afterImage: string;
}) => {
	const [sliderPosition, setSliderPosition] = useState(50);
	const [isDragging, setIsDragging] = useState(false);

	const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (!isDragging) return;

		const rect = event.currentTarget.getBoundingClientRect();
		const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
		const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

		setSliderPosition(percent);
	};

	const handleMouseDown = () => {
		setIsDragging(true);
	};

	const handleTouchStart = () => {
		setIsDragging(true);
	};

	const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
		if (!isDragging) return;

		const rect = event.currentTarget.getBoundingClientRect();
		const x = Math.max(
			0,
			Math.min(event.touches[0].clientX - rect.left, rect.width)
		);
		const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
		setSliderPosition(percent);
	};
	const handleMouseUp = () => {
		setIsDragging(false);
	};

	return (
		<div
		// TODO ask if border should be border-2 or not
			className='w-full h-full relative border rounded-2xl'
			onMouseUp={handleMouseUp}
		>
			<div
				className='relative w-full m-auto overflow-hidden select-none h-full rounded-2xl'
				onMouseMove={handleMove}
				onMouseDown={handleMouseDown}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
			>
				<Image
					fill
					priority
					draggable={false}
					src={beforeImage}
					alt='image before detailing'
				/>
				<div
					className='absolute top-0 left-0 right-0 w-auto  m-auto overflow-hidden select-none h-full'
					style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
				>
					<Image
						fill
						priority
						draggable={false}
						src={afterImage}
						alt='image after detailing'
					/>
				</div>
				<div
					className='absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize'
					style={{ left: `calc(${sliderPosition}% - 1px)` }}
				>
					<div className='bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]' />
				</div>
			</div>
		</div>
	);
};
