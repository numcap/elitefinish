"use client";

import Head from "next/head";
import { usePathname } from "next/navigation";

const CanonicalHead = () => {
	const pathname = usePathname();
	const baseUrl = "https://www.elitefinishauto.ca";
	const canonicalUrl = `${baseUrl}${pathname === "/" ? "" : pathname}`;

	return (
		<Head>
			<link rel='canonical' href={canonicalUrl} />
		</Head>
	);
};

export default CanonicalHead;
