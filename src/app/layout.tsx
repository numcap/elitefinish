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
	title: "Elite Finish Auto",
	description:
		"Elite Finish Auto Detailing offers professional mobile car detailing services, including interior cleaning, exterior polishing, and paint correction across London Ontario.",
	keywords: [
		"car detailing",
		"mobile detailing",
		"interior cleaning",
		"Elite Finish",
		"London Ontario detailing",
	],
	authors: [
		{ name: "Elite Finish Detailing", url: "https://elitefinishauto.ca" },
		{ name: "Jonathan Ishak", url: "https://jonathanishak.vercel.app" },
	],
	openGraph: {
		title: "Elite Finish Auto Detailing",
		description:
			"Mobile auto detailing service specializing in interior and exterior restoration. Serving London Ontario with professional care.",
		url: "https://elitefinishauto.ca",
		siteName: "Elite Finish Auto Detailing",
		images: [
			{
				url: "https://elitefinishauto.ca/icons/logo-bg.jpeg",
				width: 2388,
				height: 1610,
				alt: "Elite Finish Auto Detailing - Mobile Car Detailing Service",
			},
		],
		locale: "en_CA",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Elite Finish Auto Detailing",
		description: "Top-rated mobile auto detailing in London Ontario.",
		images: ["https://elitefinishauto.ca/icons/logo-bg.jpeg"],
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
