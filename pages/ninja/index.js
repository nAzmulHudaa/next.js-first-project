import Head from "next/dist/shared/lib/head";
import Link from "next/link";
export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    return {
        props: {
            ninjas: data
        }
    }
}

const Test = ({ ninjas }) => {
    
    return (
        <>
            <Head>
                <title>Ninja List | List</title>
                <meta name="keyword" content="ninja" />
            </Head>
            <div>
                <h2>Helllo Ninjas</h2>
                {
                    ninjas.map(ninja => {
                        return (
                            <Link  href={`/ninja/${ninja.id}`} key={ninja.id}>
                                <a>
                                    <h3>{ninja.name}</h3>
                                </a>
                            </Link>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Test;