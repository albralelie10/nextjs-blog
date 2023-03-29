import Layout from "./layout";

export default function AboutPage(){
    return(
      <Layout
      title="About Page"
      description="Mi pagina de about"
     
      content={<>
       <h1>About Page</h1>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto ab molestiae hic ipsam eligendi. Placeat voluptatem sapiente fugiat minima fuga hic odit quasi culpa quos, facere ratione eum dignissimos enim eveniet! 
        </p>
      </>}
      >
       
      </Layout>
    );
}

