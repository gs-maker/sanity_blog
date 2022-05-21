import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<section>
			<div>
				<h1>Nate's blog</h1>
				<p>Welcome to my blog!</p>
				<button>
					<Link to="/blog">read blog posts</Link>
				</button>
			</div>
		</section>
	);
};
export default Home;
