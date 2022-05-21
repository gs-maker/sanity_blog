import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";

const SingleBlogPost = () => {
	const [post, setPost] = useState([]);
	const [categories, setCategories] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { slug } = useParams();

	// useEffect
	useEffect(() => {
		client
			.fetch(
				`*[slug.current=="${slug}"]{
			title, 
			body, 
			"authorName": author -> name,
			"categories": categories[] -> title,
			mainImage {
				asset -> {
					id, 
					url
				},
				alt
			}
		}`,
			)
			.then((data) => {
				console.log(data);
				setPost(data[0]);
			})
			.catch((error) => console.log(error));
		setIsLoading(false);
	}, [slug]);
	return (
		<div>
			{isLoading ? (
				<p>loading...</p>
			) : (
				<div>
					<h1>{post.title}</h1>
					{post.mainImage && post.mainImage.asset && (
						<img src={post.mainImage.asset.url} alt={post.title} title={post.title} />
					)}
					<p>By: {post.authorName}</p>
					<li>{post.categories}</li>
					<BlockContent blocks={post.body} projectId="yyd8eu79" dataset="production" />
				</div>
			)}
			<Link to="/blog">read more posts</Link>
		</div>
	);
};
export default SingleBlogPost;
