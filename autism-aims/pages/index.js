import Head from "next/head";
import Image from "next/image";
import Gallery from "../components/gallery";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<main>
			<Head>
				<title>Autism Aims</title>
				<meta
					name="description"
					content="At Autism Aims, we provide Applied Behavior Analysis (ABA) for individuals with Autism Spectrum Disorder (ASD). 
          			Our services are centered around a client-first philosophy and Acceptance and Commitment Therapy (ACT)."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>

			<header className="text-center">
				<img
					className="w-full"
					src="https://visitncsmokies.com/wp-content/uploads/2018/09/HERO-PLACEHOLDER.jpg"
				/>
				<div className="my-12">
					<h1 className="font-extrabold text-4xl sm:text-5xl md:text-7xl">
						Autism Aims
					</h1>
					<p className="italic font-bold text-xl sm:text-2xl md:text-3xl max-w-xs sm:max-w-2xl mx-auto">
						An Aim Rooted in Purpose, Advocacy and Results
					</p>
				</div>
			</header>

			<div className="">
				{/* <div className="flex justify-center">
					<svg
						viewBox="0 0 445.75 445.08"
						className="w-48 fill-current text-green-600"
					>
						<g id="g842" transform="translate(-29.891 -34.328)">
							<path
								style={{
									strokeLinejoin: "round",
									fillRule: "evenodd",
									stroke: "#000000",
									strokeWidth: 12.5,
								}}
								d="m243.94 40.625c-15.2 0.56-32.25 5.653-41.35 16.563-13.23 28.187 18.91 15.172 22.69 34.687s-18.9 20.595-18.9 20.595h-97.76v99.15c-0.27 3.13-2.53 21.22-20.432 17.76-19.515-3.78-6.5-35.89-34.688-22.66-9.207 7.67-14.275 20.98-15.969 34.09-0.026 0.21-0.069 0.42-0.093 0.63-0.967 4.61-1.457 9.89-1.25 15.5 0.559 15.2 5.653 32.25 16.562 41.34 28.188 13.23 15.173-18.91 34.688-22.69 19.512-3.78 20.592 18.91 20.592 18.91l0.59 97.72h101.6c6.2 1.22 18.24 5.49 15.4 20.12-3.77 19.52-35.88 6.5-22.65 34.69 7.67 9.21 20.98 14.28 34.09 15.97 0.21 0.03 0.42 0.07 0.63 0.09 4.61 0.97 9.89 1.46 15.5 1.25 15.2-0.56 32.25-5.65 41.34-16.56 13.23-28.19-18.91-15.17-22.69-34.69-3.78-19.51 18.91-20.59 18.91-20.59l97.19-0.28v-102.1c1.38-6.35 5.8-17.45 19.94-14.71 19.51 3.78 6.49 35.91 34.68 22.68 9.21-7.67 14.28-21.01 15.97-34.12 0.03-0.21 0.07-0.39 0.09-0.59 0.97-4.62 1.46-9.89 1.26-15.5-0.56-15.2-5.66-32.25-16.57-41.35-28.19-13.23-15.17 18.91-34.69 22.69-19.16 3.71-20.51-17.87-20.56-18.66v-0.62s-0.11 0.75-0.12 0.94v-98.41h-102.16c-6.4-1.48-16.96-5.99-14.28-19.845 3.78-19.515 35.89-6.5 22.66-34.687-7.68-9.207-20.98-14.275-34.1-15.969-0.2-0.027-0.42-0.069-0.62-0.094-4.61-0.967-9.89-1.457-15.5-1.25z"
							/>
						</g>
					</svg>
					<svg
						viewBox="0 0 445.75 445.08"
						className="w-48 fill-current text-red-600"
					>
						<g id="g842" transform="translate(-29.891 -34.328)">
							<path
								style={{
									strokeLinejoin: "round",
									fillRule: "evenodd",
									stroke: "#000000",
									strokeWidth: 12.5,
								}}
								d="m243.94 40.625c-15.2 0.56-32.25 5.653-41.35 16.563-13.23 28.187 18.91 15.172 22.69 34.687s-18.9 20.595-18.9 20.595h-97.76v99.15c-0.27 3.13-2.53 21.22-20.432 17.76-19.515-3.78-6.5-35.89-34.688-22.66-9.207 7.67-14.275 20.98-15.969 34.09-0.026 0.21-0.069 0.42-0.093 0.63-0.967 4.61-1.457 9.89-1.25 15.5 0.559 15.2 5.653 32.25 16.562 41.34 28.188 13.23 15.173-18.91 34.688-22.69 19.512-3.78 20.592 18.91 20.592 18.91l0.59 97.72h101.6c6.2 1.22 18.24 5.49 15.4 20.12-3.77 19.52-35.88 6.5-22.65 34.69 7.67 9.21 20.98 14.28 34.09 15.97 0.21 0.03 0.42 0.07 0.63 0.09 4.61 0.97 9.89 1.46 15.5 1.25 15.2-0.56 32.25-5.65 41.34-16.56 13.23-28.19-18.91-15.17-22.69-34.69-3.78-19.51 18.91-20.59 18.91-20.59l97.19-0.28v-102.1c1.38-6.35 5.8-17.45 19.94-14.71 19.51 3.78 6.49 35.91 34.68 22.68 9.21-7.67 14.28-21.01 15.97-34.12 0.03-0.21 0.07-0.39 0.09-0.59 0.97-4.62 1.46-9.89 1.26-15.5-0.56-15.2-5.66-32.25-16.57-41.35-28.19-13.23-15.17 18.91-34.69 22.69-19.16 3.71-20.51-17.87-20.56-18.66v-0.62s-0.11 0.75-0.12 0.94v-98.41h-102.16c-6.4-1.48-16.96-5.99-14.28-19.845 3.78-19.515 35.89-6.5 22.66-34.687-7.68-9.207-20.98-14.275-34.1-15.969-0.2-0.027-0.42-0.069-0.62-0.094-4.61-0.967-9.89-1.457-15.5-1.25z"
							/>
						</g>
					</svg>
					<svg
						viewBox="0 0 445.75 445.08"
						className="w-48 fill-current text-purple-600"
					>
						<g id="g842" transform="translate(-29.891 -34.328)">
							<path
								style={{
									strokeLinejoin: "round",
									fillRule: "evenodd",
									stroke: "#000000",
									strokeWidth: 12.5,
								}}
								d="m243.94 40.625c-15.2 0.56-32.25 5.653-41.35 16.563-13.23 28.187 18.91 15.172 22.69 34.687s-18.9 20.595-18.9 20.595h-97.76v99.15c-0.27 3.13-2.53 21.22-20.432 17.76-19.515-3.78-6.5-35.89-34.688-22.66-9.207 7.67-14.275 20.98-15.969 34.09-0.026 0.21-0.069 0.42-0.093 0.63-0.967 4.61-1.457 9.89-1.25 15.5 0.559 15.2 5.653 32.25 16.562 41.34 28.188 13.23 15.173-18.91 34.688-22.69 19.512-3.78 20.592 18.91 20.592 18.91l0.59 97.72h101.6c6.2 1.22 18.24 5.49 15.4 20.12-3.77 19.52-35.88 6.5-22.65 34.69 7.67 9.21 20.98 14.28 34.09 15.97 0.21 0.03 0.42 0.07 0.63 0.09 4.61 0.97 9.89 1.46 15.5 1.25 15.2-0.56 32.25-5.65 41.34-16.56 13.23-28.19-18.91-15.17-22.69-34.69-3.78-19.51 18.91-20.59 18.91-20.59l97.19-0.28v-102.1c1.38-6.35 5.8-17.45 19.94-14.71 19.51 3.78 6.49 35.91 34.68 22.68 9.21-7.67 14.28-21.01 15.97-34.12 0.03-0.21 0.07-0.39 0.09-0.59 0.97-4.62 1.46-9.89 1.26-15.5-0.56-15.2-5.66-32.25-16.57-41.35-28.19-13.23-15.17 18.91-34.69 22.69-19.16 3.71-20.51-17.87-20.56-18.66v-0.62s-0.11 0.75-0.12 0.94v-98.41h-102.16c-6.4-1.48-16.96-5.99-14.28-19.845 3.78-19.515 35.89-6.5 22.66-34.687-7.68-9.207-20.98-14.275-34.1-15.969-0.2-0.027-0.42-0.069-0.62-0.094-4.61-0.967-9.89-1.457-15.5-1.25z"
							/>
						</g>
					</svg>
				</div> */}
				<div className="text-lg font-medium my-20">
					<div className="max-w-screen-lg grid grid-cols-2 items-center mx-auto shadow">
						<Image
							src="/images/paint.jpg"
							height="400"
							alt=""
							width="400"
							objectFit=""
							className=""
						></Image>
						<p className="px-12">
							At Autism Aims, we provide Applied Behavior Analysis (ABA) for
							individuals with Autism spectrum disorder (ASD). Our services are
							centered around a client-first philosophy and Acceptance and
							Commitment Therapy (ACT). Autism Aims incorporates both treatments
							to instill autonomy and wellness while alleviating the stress and
							concerns you may have about your child.
						</p>
					</div>
					<div className="max-w-screen-lg grid grid-cols-2 items-center mx-auto shadow">
						<Image
							src="/images/blocks-solo.jpg"
							height="400"
							alt=""
							width="400"
							objectFit="cover"
							className=""
						></Image>
						<p className="order-first px-12">
							We use evidence-based behavior methods to provide the least
							invasive behavior plan for your child&apos;s needs while also
							providing access to resources, services, and opportunities for
							your child.
						</p>
					</div>
					<div className="max-w-screen-lg grid grid-cols-2 items-center mx-auto shadow">
						<Image
							src="/images/classroom2.jpg"
							height="400"
							alt=""
							width="400"
							objectFit="cover"
							objectPosition="top"
							className=""
						></Image>
						<p className="px-12">
							We aim to extinguish problematic behaviors that may impede the
							progress of a client&apos;s social, educational, and
							career-oriented goals and needs. Our staff is well versed in
							applied behavior analysis and will help create an
							individual&apos;s behavior plan specific to their goals and needs.
						</p>
					</div>
					<div className="max-w-screen-lg grid grid-cols-2 items-center mx-auto shadow">
						<Image
							src="/images/graduation.jpg"
							height="400"
							alt=""
							width="400"
							objectFit=""
							className=""
						></Image>
						<p className="order-first px-12">
							Autism Aims works to dismantle stigma and barriers to ensure our
							clients build a strong sense of self-esteem, identity, dignity,
							and independence and use their skills and strengths as
							contributing and valuable members of society.
						</p>
					</div>
				</div>
				<Gallery />
			</div>
		</main>
	);
}
