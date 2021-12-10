import Link from "next/link";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<nav className="bg-indigo-900 text-white font-semibold py-4 px-5 sm:px-7 md:px-12 flex justify-end border-b border-indigo-900">
			<div className="hidden md:flex gap-x-11 justify-center">
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/about">
					<a>About</a>
				</Link>
				<Link href="/why_choose_us">
					<a>Why Choose Us</a>
				</Link>
			</div>
			<button
				className="md:hidden text-2xl sm:text-3xl"
				onClick={() => setOpen(!open)}
			>
				{open ? <IoMdClose /> : <IoMdMenu />}
			</button>
			{/* burger menu popout */}
			{open && (
				<motion.div
					className="md:hidden flex flex-col justify-evenly bg-indigo-700 absolute top-14 inset-x-0 sm:mt-1 divide-y divide-indigo-900"
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1, 
					}}
				>
					<Link href="/" passHref>
						<motion.a
							className="w-full py-5 text-center sm:py-6"
							onClick={() => setOpen(false)}
							initial={{ y: -20, opacity: 0}}
							animate={{
								y: 0,
								opacity:1,
								transition: { ease: "easeInOut"},
							}}
						>
							Home
						</motion.a>
					</Link>
					<Link href="/about" passHref>
						<motion.a
							className="w-full py-5 text-center sm:py-6 "
							onClick={() => setOpen(false)}
							initial={{ y: -20, opactiy:0}}
							animate={{
								y: 0,
								opactiy:1,
								transition: { ease: "easeInOut" },
							}}
						>
							About
						</motion.a>
					</Link>
					<Link href="/why_choose_us" passHref>
						<motion.a
							className="w-full py-5 text-center sm:py-6 "
							onClick={() => setOpen(false)}
							initial={{ y: -20,opacity:0}}
							animate={{
								y: 0,
								opacity:1,
								transition: { ease: "easeInOut"},
							}}
						>
							Why Choose Us
						</motion.a>
					</Link>
				</motion.div>
			)}
		</nav>
	);
}
