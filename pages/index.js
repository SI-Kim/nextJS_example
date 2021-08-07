import Link from 'next/link';

export default function index() {
  return (
  <h1 className="title">
    Read{' '}
    <Link href="/posts/first-post">
      <a>
        This Page!
      </a>
    </Link>
  </h1>
  );
}