import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';


const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            //router.go(-1)
            router.push("/");
        }, 3000)
    }, []);
    return ( 

        <>
      <Head >
        <title>@Nacho184 | 404 Not Found</title>
        <meta name="keywords" content="home"/>
      </Head>

        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
            <h3>Redirecting...</h3>
        </div>
        </>
     );
}
 
export default NotFound;