import Link from "next/link";
import styles from "./styles/NavBar.module.css";

export default function NavBar(){
    return(
      <header className={styles.header}>
          <ul className={styles.navigation}>
            <li><Link href="/">
                Home
            </Link></li>
            <li><Link href="/about">
                About
            </Link></li>
            <li><Link href="/contacto">
                Contacto
            </Link></li>
            <li><Link href="/blog">
                Blogs
            </Link></li>
            
        </ul>
      </header>
    );
}