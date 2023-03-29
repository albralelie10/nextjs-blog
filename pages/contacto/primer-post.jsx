import Link from "next/link";
import Image from "next/image";
import Head from "next/head";


export default function PrimerPost(){
 
    return (
        <>
           <Head>
            <title>
                Este es un Post
            </title>
            </Head>
            <h1>Primer Post</h1>
            <Image 
                src="/img/image-1.jpg"
                width={600}
                height={600}
            >

            </Image>
            <Link href="/"  >
                Home Page
            </Link>
        </>
    );
}