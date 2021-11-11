import Head from 'next/head';

export default function Why_Choose_Us() {
	return (
		<div className="text-center">
			<Head>
				<title>Why Choose Autism Aims</title>
			</Head>
			<main className="w-10/12 mx-8">
				<div>
					<h1 className="text-xl">Why Choose Us!</h1>
					<div className="my-6 text-sm">
						<p className="my-2">Autism Aims uses programs that have been proven in studies from the Journal of Applied Behavior Analysis (JABA) to be effective.
						Data is collected to track the child’s behaviors and skill levels to determine the course of treatment.
						There is an individualized curriculum. As an ABA agency, we do not believe in having a cookie-cutter approach to all 2-year-olds or all 6-year-olds, regardless of what the child’s individual needs are.</p>
						<p className="my-2">Autism Aims primarily focus on reinforcement techniques.
						Punishment procedures are rarely used, even in the instance of aggression. We will always try a proactive approach.
						We believe that it is essential not just to decrease the instances of the target behavior but to reinforce an appropriate replacement behavior suitable to its function.</p>
					</div>
				</div>
				<div>
					<h2 className="text-lg">Testimonials</h2>
					<div className="my-6 text-sm">
						<p className="my-2 p-2 bg-gray-200 rounded-2xl">&quot;Oscar is truly remarkable, always prepared, and lending ideas to improve a student&apos;s independence.&quot; - Proud GN Parent</p>
						<p className="my-2 p-2 bg-gray-200 rounded-2xl">&quot;I would start a petition to keep Oscar as our therapist!&quot; - Behavioral Consultant in Plainview</p>
						<p className="my-2 p-2 bg-gray-200 rounded-2xl">&quot;Our son often stopped in the hallway to smile and wave at peers and staff. You have been an essential part of our son&apos;s life and our family’s lives over the many years since we know each other.&quot; - Proud GN Parent</p>
						<p className="my-2 p-2 bg-gray-200 rounded-2xl">&quot;Oscar is always calm and collected among many problems behavior he encounters a day&quot; - Proud GN Parent</p>
						<p className="my-2 p-2 bg-gray-200 rounded-2xl">&quot;Oscar is a reliable therapist who works diligently to get results while maintaining a client-first approach&quot; - BCBA in Port Washington School District </p>
					</div>
				</div>	
			</main>
		</div>
	);
}
