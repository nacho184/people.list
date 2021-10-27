import Link from 'next/link'
import styles from '../styles/Home.module.css'
//import Image from 'next/image

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
            <h1>  PEOPLE LIST </h1>
            {/* <Image src="/logo.png" width={128} height={77} /> */}
            </div>
            <Link  href="/"><a className={styles.links}>Home</a></Link>
            <Link  href="/about"><a className={styles.links}>About</a></Link>
            <Link  href="/ninjas"><a className={styles.linksninja}>Listing</a></Link>

        </nav>
     );
}
 
export default Navbar;