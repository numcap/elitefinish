import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Elite Finish Detailing",
	description:
		"Elite Auto Finish Detailing offers professional mobile car detailing services, including interior cleaning, exterior polishing, and paint correction across London Ontario.",
	keywords: [
		"car detailing",
		"mobile detailing",
		"interior cleaning",
		"Elite Finish",
		"Southern Ontario detailing",
	],
	authors: [
		{ name: "Elite Finish Detailing", url: "https://elitefinishauto.ca" },
		{ name: "Jonathan Ishak", url: "https://jonathanishak.vercel.app" },
	],
	openGraph: {
		title: "Elite Finish Detailing",
		description:
			"Mobile auto detailing service specializing in interior and exterior restoration. Serving London Ontario with professional care.",
		url: "https://elitefinishauto.ca",
		siteName: "Elite Finish Detailing",
		images: [
			{
				url: "https://elitefinishauto.ca/icons/logo.png",
				width: 2388,
				height: 1610,
				alt: "Elite Finish Detailing - Mobile Car Detailing Service",
			},
		],
		locale: "en_CA",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Elite Finish Detailing",
		description: "Top-rated mobile auto detailing in London Ontario.",
		images: ["https://elitefinishauto.ca/icons/logo.png"],
		site: "@elitefinishauto",
		creator: "@elitefinishauto",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<Analytics />
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
