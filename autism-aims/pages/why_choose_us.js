import Head from "next/head";
import Image from "next/image";

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
						<p className="my-2">
							Autism Aims uses programs that have been proven in studies from
							the Journal of Applied Behavior Analysis (JABA) to be effective.
							Data is collected to track the child’s behaviors and skill levels
							to determine the course of treatment. There is an individualized
							curriculum. As an ABA agency, we do not believe in having a
							cookie-cutter approach to all 2-year-olds or all 6-year-olds,
							regardless of what the child’s individual needs are.
						</p>
						<p className="my-2">
							Autism Aims primarily focus on reinforcement techniques.
							Punishment procedures are rarely used, even in the instance of
							aggression. We will always try a proactive approach. We believe
							that it is essential not just to decrease the instances of the
							target behavior but to reinforce an appropriate replacement
							behavior suitable to its function.
						</p>
					</div>
				</div>
				<div>
					<h2 className="text-lg">Testimonials</h2>
					<div className="my-6 text-sm lg:grid lg:grid-cols-2 lg:p-10 md:grid md:grid-cols-2 md:gap-2 md:space-y-0">
						<div className="my-2 p-4 bg-gray-200 rounded-md flex flex-col items-center lg:mx-4">
							<img className="w-20 mb-2" src="/images/avataaars.svg" />
							<p>
								&quot;Oscar is truly remarkable, always prepared, and lending
								ideas to improve a student&apos;s independence.&quot;
							</p>
							<p>Proud GN Parent</p>
						</div>
						<div className="my-2 p-4 bg-gray-200 rounded-md flex flex-col items-center lg:mx-4">
							<img className="w-20 mb-2" src="/images/avataaars (1).svg" />
							<p>
								&quot;I would start a petition to keep Oscar as our
								therapist!&quot;
							</p>
							<p>Behavioral Consultant in Plainview</p>
						</div>
						<div className="my-2 p-4 bg-gray-200 rounded-md flex flex-col items-center lg:mx-4">
							<img className="w-20 mb-2" src="/images/avataaars (2).svg" />
							<p>
								&quot;Our son often stopped in the hallway to smile and wave at
								peers and staff. You have been an essential part of our
								son&apos;s life and our family’s lives over the many years since
								we know each other.&quot;
							</p>
							<p>Proud GN Parent</p>
						</div>
						<div className="my-2 p-4 bg-gray-200 rounded-md flex flex-col items-center lg:mx-4">
							<img className="w-20 mb-2" src="/images/avataaars (3).svg" />
							<p>
								&quot;Oscar is always calm and collected among many problems
								behavior he encounters a day&quot;
							</p>
							<p>Proud GN Parent</p>
						</div>
						<div className="my-2 p-4 bg-gray-200 rounded-md flex flex-col items-center lg:mx-4">
							<img className="w-20 mb-2" src="/images/avataaars (4).svg" />
							<p>
								&quot;Oscar is a reliable therapist who works diligently to get
								results while maintaining a client-first approach&quot;
							</p>
							<p>BCBA in Port Washington School District</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
