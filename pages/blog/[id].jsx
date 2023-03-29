import Layout from "../layout";

export default function PersonalBlog({post}){
    return(

        <>
            <Layout
            content={
                <>
                    <section>
                        <h1>{post.title}</h1>   
                        <p>{post.body}</p>
                    </section>
                </>
            }
            >
            </Layout>
        </>
    );
}


export async function getStaticProps({params}){
    const pathID=params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${pathID}`);
    const post = await res.json();
    return {
        props:{
            post,
        }
    }
}

export async function getStaticPaths(){
    const resp=await fetch("https://jsonplaceholder.typicode.com/posts");
    const idData=await resp.json();
    const paths= idData.slice(0,10).map(({id})=>{
        return {params:{id:String(id)}};
    })
    return {
        paths,
        fallback:false
    };
    
}