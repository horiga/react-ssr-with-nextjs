import Head from 'next/head'

function IndexPage() {
    return (
        <div>
            <Head>
                <title>My Page title</title>
                <meta 
                  name="viewport" 
                  content="initial-scale=1.0, width=device-width"
                  key="viewport"
                />
            </Head>
            <Head>
                <meta 
                  name="viewport" 
                  content="initial-scale=1.2, width=device-width"
                  key="viewport"
                />
            </Head>
            <p>Hello, world!</p>
        </div>
    )
}

export default IndexPage;