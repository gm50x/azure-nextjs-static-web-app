import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="description" content="Zack's Portal Website" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                </body>
                <NextScript />
            </Html>
        )
    }
}