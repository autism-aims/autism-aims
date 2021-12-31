export default function Gallery() {
	const imgs = [
		"https://images.unsplash.com/photo-1636645371711-3375a61e3a21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
		"https://images.unsplash.com/photo-1636642967425-7a38f6665509?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
		"https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
		"https://images.unsplash.com/photo-1636496349061-5bb56068e6ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
		"https://images.unsplash.com/photo-1636647780757-223e17e31f81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
		"https://images.unsplash.com/photo-1636522337224-587680b3ca77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
	];

	return (
		<div className="container max-w-screen-lg mx-auto my-2 space-y-2 md:grid md:grid-cols-2 md:space-y-0 md:gap-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 ">
			{imgs.map((pic) => {
				return (
					<img
						className="rounded shadow-md"
						key={pic}
						src={pic}
						alt="stock image"
					/>
				);
			})}
		</div>
	);
}
