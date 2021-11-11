import Head from "next/head";
import Image from "next/image";
import Gallery from "../components/gallery";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Autism Aims</title>
				<meta
					name="description"
					content="At Autism Aims, we provide Applied Behavior Analysis (ABA) for individuals with Autism Spectrum Disorder (ASD). 
          			Our services are centered around a client-first philosophy and Acceptance and Commitment Therapy (ACT)."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>

			<main className="text-center">
				<div>
					<img src="https://via.placeholder.com/1920x450.jpg?text=Placeholder+Hero+Image" />
					<h1 className="mt-4">Autism Aims</h1>
					<h2>
						An Aim Rooted in Purpose, Advocacy and Results
					</h2>
				</div>
				<div className="mt-4">
					<p>
						At Autism Aims, we aim to extinguish problematic behaviors that may
						impede the progress of a client’s social, educational, and
						career-oriented goals and needs. Our staff is well versed in applied
						behavior analysis and will help create an individual’s behavior plan
						specific to their goals and needs. Autism Aims works to dismantle
						stigma and barriers to ensure our clients build a strong sense of
						self-esteem, identity, dignity, and independence and use their
						skills and strengths as contributing and valuable members of
						society.
					</p>
				</div>
				<Gallery/>
			</main>
		</div>
	);
}
