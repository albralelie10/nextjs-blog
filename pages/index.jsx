
import Layout from "./layout";
import styles from "../styles/NavBar.module.css";
export default function HomePage(){
    return (
        <div >
            <Layout 
            title="Home Page"
            description="Mi pagina de Home"
            home="home"
            name="Erick"
            content={<>
                <h1 className={styles.title}>Home Page</h1><br></br>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto ab molestiae hic ipsam eligendi. Placeat voluptatem sapiente fugiat minima fuga hic odit quasi culpa quos, facere ratione eum dignissimos enim eveniet! Ad cum excepturi vero voluptate odit, beatae, nesciunt, veritatis similique ducimus veniam sit? Quo, amet esse incidunt voluptatem ipsam ad, inventore odit illum reiciendis ea temporibus provident nam blanditiis magnam? Sequi exercitationem voluptatem tempore assumenda velit laudantium sunt eaque?</p></>}
            >
            </Layout>

            
        </div>
    )
}