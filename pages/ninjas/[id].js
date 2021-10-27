export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(person => {
        return {
            params: {id: person.id.toString()}
        }
    });

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async(context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: {person: data}
    }
}

const Details = ({person}) => {
    return ( 
        <div>
            <h1>{person.name}</h1>
            <p><b>email:</b> {person.email}</p>
            <p><b>website:</b> {person.website}</p>
            <p><b>city:</b> {person.address.city}</p>

        </div>
     );
}
 
export default Details;