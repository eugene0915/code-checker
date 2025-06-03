import Head from 'next/head';
import dynamic from 'next/dynamic';

const CodeEditor = dynamic(() => import('../components/CodeEditor'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Code Checker</title>
        <meta name="description" content="Paste your code and match brackets instantly" />
      </Head>

      <div className="min-h-screen bg-gray-900 text-white font-mono flex flex-col justify-center items-center px-4 py-12">
        <h1 className="text-3xl font-bold mb-4 text-center">
          🧠 Code Bracket Checker
        </h1>
        <p className="mb-8 text-center text-gray-300">
          Paste your code below. Matching brackets will be highlighted!
        </p>
        <div className="w-full max-w-4xl">
          <CodeEditor />
        </div>
      </div>
    </>
  );
}
