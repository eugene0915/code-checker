import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const CodeEditor = dynamic(() => import('../components/CodeEditor'), { ssr: false });

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);
  
  return (
    <>
      <Head>
      <title>Code Bracket Checker – 무료 코드 괄호 검사기</title>
      <meta name="description" content="붙여넣기만 하면 코드의 괄호 매칭 오류를 즉시 확인할 수 있는 무료 도구입니다." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Code Bracket Checker" />
      <meta property="og:description" content="코드의 중괄호, 소괄호, 대괄호 오류를 한눈에 확인!" />
      <meta property="og:url" content="https://bracketchecker.com" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://bracketchecker.com/og-image.png" />
      <link rel="canonical" href="https://bracketchecker.com" />
      </Head>

      <div
  className={`min-h-screen font-mono px-4 py-12 transition-colors duration-300 ${
    isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'
  }`}
>
        <div className="flex justify-end max-w-4xl mx-auto mb-4">
        <button
          onClick={() => setIsDark(!isDark)}
          className={`
            px-4 py-2 rounded text-sm font-semibold transition-transform duration-150
            shadow-sm hover:shadow-md hover:scale-95 active:scale-90
            border
            ${isDark
              ? 'bg-gray-100 text-gray-900 border-gray-300' // 다크 모드 중 → 버튼은 Light 모드용 스타일
              : 'bg-gray-800 text-white border-gray-600'    // 라이트 모드 중 → 버튼은 Dark 모드용 스타일
            }
          `}
        >
            {isDark ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        <h1 className="text-3xl font-bold text-center mb-4">🧠 Code Bracket Checker</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Paste your code below. Matching brackets will be highlighted!
        </p>
        <div className="w-full max-w-4xl mx-auto">
          <CodeEditor isDark={isDark} />
        </div>
      </div>
    </>
  );
}
