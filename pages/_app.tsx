// Import AppProps from next/app for typing the props correctly
import type { AppProps } from "next/app";
import RootLayout from "./main";
import "../styles/globals.css";
import Home from ".";

// This function wraps the application's components with the RootLayout component
function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Wrap the page component with the RootLayout component
    <RootLayout>
      <Home />
    </RootLayout>
  );
}

export default MyApp;
