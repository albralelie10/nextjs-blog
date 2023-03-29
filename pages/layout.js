"use client"
import NavBar from "../NavBar";
import Head from "next/head";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import stylesHeader from "../components/layout.module.css";
export default function LayoutPage({children,title,description,home,name,content}){
    return(
 
          <div>
            <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
            <meta name="description"  content={description} />
            </Head>
        
            <main>
            <NavBar /><br></br>
            {children}
            <header className={stylesHeader.headerProfile}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
             
                {name}
              
            </h2>
          </>
        )}
      </header>
      {content}
      <br></br>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
            </main>
            
          </div>
   
    )
}

LayoutPage.defaultProps={
    title:"Mi pagina de NextJS 12",
    description:"Pagina de la aplicacion",
};