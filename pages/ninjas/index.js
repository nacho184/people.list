import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');//fetch request
    const data = await res.json();

    return {
        props: {people: data}
    }

}

const Ninjas = ({people}) => {
    return ( 
        <div>
            <h1>All people</h1>
            {people.map(person => (
                <Link href={"/ninjas/"+person.id} key={person.id}>
                    <a className={styles.single}>
                        <h3>{person.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
     );
}
 
export default Ninjas;