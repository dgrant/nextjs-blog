import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'
import React from 'react'

type Props = {}

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (
            <Html lang="en">
                <Head/>
                <body className="bg-white">
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}
