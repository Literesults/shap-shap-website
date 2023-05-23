import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased dark:bg-black select-none" >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}