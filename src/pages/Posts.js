import React, { useState, useEffect } from "react";
import client from "../client";
// import SingleBlogPost from "./SingleBlogPost";
import { Link} from "react-router-dom";

const Blog = () => {
	const [posts, setPosts] = useState([]);

	// useEffect
	useEffect(() => {
		client
			.fetch(
				`*[_type == "post"]{
                title, 
                slug,
                body, 
                mainImage {
                    asset -> {
                        _id, 
                        url
                    }, 
                    alt}
                }`,
			)
			.then((data) => setPosts(data))
			.catch((error) => console.log(error));
	}, []);

	return (
		<>
			<section>
				<h1>Blog Posts</h1>
				<p>{posts.length} blog posts</p>
                <div className="grid">{posts.map((post) => {
					return (
						<article key={post.slug.current}>
							{/* <SingleBlogPost {...post}  />; */}
							<img src={post.mainImage.asset.url} alt={post.title} />
							<h4>{post.title}</h4>
							<Link to={`/blog/${post.slug.current}`}>read full article</Link>
						</article>
					);
				})}</div>
				
			</section>
		</>
	);
};
export default Blog;
