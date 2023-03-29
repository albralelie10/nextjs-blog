import Layout from "../layout";
import Link from "next/link";

export default function Blogs({posts}){
    return (
        <>
            <Layout
            content={
                <>
                    <h1>Lista de Blogs</h1>
                {posts.slice(0,10).map(post=>{
                return (
                    <section key={post.id}>
                        <Link href={`/blog/${post.id}`}>
                        <h1>{post.title}</h1>
                        </Link>
                        <p>{post.body}</p>
                    </section>
                );
            })}
            
                </>
            }
            >
            </Layout>
            
        </>
    );
}

export async function getStaticProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    return {
        props:{
            posts,
        }
    }
}

