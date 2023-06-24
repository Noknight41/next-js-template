import Head from 'next/head';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-[100vh] min-w-full p-4 flex flex-col justify-center items-center">
      <Head>
        <title>Create Next Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="text-center text-[40px]">
          Welcome to{' '}
          <a className="text-[#0070f3] focus:underline" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="text-center">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="flex flex-wrap justify-center items-center mt-12">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/master/examples" className="card">
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel" className="h-4" />
        </a>
      </footer>
    </div>
  );
}
