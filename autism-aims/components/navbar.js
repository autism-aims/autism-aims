import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="flex gap-x-11 justify-center p-6 font-semibold">
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			<Link href="/why_choose_us">
				<a>Why Choose Us</a>
			</Link>
		</nav>
	);
}
