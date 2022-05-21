import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import SingleBlogPost from "./pages/SingleBlogPost";
import Error from "./pages/Error";
// shared layout
import SharedLayout from "./pages/SharedLayout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="blog" element={<Posts />} />
					<Route path="blog/:slug" element={<SingleBlogPost />} />
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
