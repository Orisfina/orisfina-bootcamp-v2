import Document, { Html, Head, Main, NextScript } from 'next/document'
import { env } from 'process';


class MyDocument extends Document {
  render() {
    return (
      
      <Html lang='en'>
        <Head>
            
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Mulish:wght@400;700;800;900&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${env.NEXT_PUBLIC_GA_ID}`} />
          <script 
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
              `
            }}
          />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument


