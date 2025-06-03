import "@/styles/globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function App({ Component, pageProps }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      <GoogleAnalytics gaId={GA_ID} />
      <Component {...pageProps} />
    </>
  );
}

