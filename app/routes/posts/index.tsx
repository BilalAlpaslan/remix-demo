import { Link, useLoaderData } from "remix";
import { getPosts } from "~/post"
import type { Post } from "~/post";

export type Post = {
    slug: string;
    title: string;
};

export const loader = () => {
    return getPosts();
};

export default function Posts() {
    const posts = useLoaderData<Post[]>();
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.slug}>
                        <Link to={post.slug}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}