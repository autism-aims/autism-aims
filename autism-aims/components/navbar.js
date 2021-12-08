import Link from "next/link";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<nav className="bg-indigo-900 text-white py-4 px-6 flex justify-end">
			<div className="hidden sm:flex gap-x-11 justify-center font-semibold ">
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

			<button className="sm:hidden text-2xl" onClick={() => setOpen(!open)}>
				{open ? <IoMdClose /> : <IoMdMenu />}
			</button>
		</nav>
	);
}
