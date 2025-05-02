import { HiWrenchScrewdriver } from "react-icons/hi2";

export default function Gallery() {
	return (
		<div className='relative h-screen flex flex-col justify-center items-center'>
            <HiWrenchScrewdriver className="absolute w-2/3 h-2/3 opacity-30" />
			<h1 className="text-4xl">Under Maintenance</h1>
		</div>
	);
}