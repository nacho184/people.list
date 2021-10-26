import Link from 'next/link'
import styles from '../styles/Home.module.css'


const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
            <h1>Ninja List</h1>
            </div>
            <Link  href="/"><a className={styles.links}>Home</a></Link>
            <Link  href="/about"><a className={styles.links}>About</a></Link>
            <Link  href="/ninjas"><a className={styles.linksninja}>Ninja Listing</a></Link>

        </nav>
     );
}
 
export default Navbar;