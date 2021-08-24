import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import Head from "next/dist/shared/lib/head";

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])
    return (
        <>
            <Head>
                <title>Ninja List | 404</title>
                <meta name="keyword" content="ninja" />
            </Head>
            <div className="not-found" style={{ textAlign: 'center' }}>
                <h1>Ooops...</h1>
                <h2>That page cannot be found :(</h2>
                <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
            </div>
        </>
    );
}

export default NotFound;
