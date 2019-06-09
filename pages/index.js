import Link from 'next/link';

function Home() {
  return (
    <div>
      Welcome to Next.js!<br/>
      Click{' '}
      <Link href="/about"><a>here</a></Link>{' '}
      to read more
    </div>);
}

export default Home;
