import Link from "next/link";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

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
			{open ? (
				<div className="md:hidden flex flex-col justify-evenly bg-indigo-700 absolute top-14 inset-x-0 sm:mt-1 divide-y divide-indigo-900">
					<Link href="/">
						<a
							className="w-full py-5 text-center sm:py-6"
							onClick={() => setOpen(false)}
						>
							Home
						</a>
					</Link>
					<Link href="/about">
						<a
							className="w-full py-5 text-center sm:py-6 "
							onClick={() => setOpen(false)}
						>
							About
						</a>
					</Link>
					<Link href="/why_choose_us">
						<a
							className="w-full py-5 text-center sm:py-6 "
							onClick={() => setOpen(false)}
						>
							Why Choose Us
						</a>
					</Link>
				</div>
			) : null}
		</nav>
	);
}
