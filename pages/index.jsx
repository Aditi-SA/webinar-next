import Link from 'next/link';

const Index = () => {
  return <main>
    <h1>Next Tutorial</h1>
    <Link href="/about">About us</Link>
    <img src="/background.jpg" />
  </main>
}

export default Index;
