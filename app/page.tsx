import Link from 'next/link';
import ProductCard from './components/ProductCard';

export default function Home() {
  return (
    <main>
      <h1>Hello World from nextJS</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}

// goto: 31 Getting a Collection of Objects
