import Link from 'next/link';
import Head from 'next/head';

export default function index() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title">
        Read{' '}
        <Link href="/posts/first-post">
          <a>
            This Page!
          </a>
        </Link>
      </h1>
    </>
  );
}