import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="nav">
			<h4>Blogo</h4>
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/blog">Blog</NavLink>
				</li>
			</ul>
		</nav>
	);
};
export default Navbar;
