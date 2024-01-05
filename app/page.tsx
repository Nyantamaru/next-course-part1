'use client';

export default function Home() {
  return (
    <main className="relative h-screen">
      <h1 className="font-poppins">Hello world from nextjs</h1>
      <button
        onClick={async () => {
          //lazy loading of lodash by nextJs
          const _ = (await import('lodash')).default;
          const users = [
            { name: 'c' },
            { name: 'b' },
            { name: 'a' },
            { name: 'd' },
          ];
          const sorted = _.orderBy(users, ['name']);
          console.log(sorted);
        }}
      >
        Show
      </button>
    </main>
  );
}
