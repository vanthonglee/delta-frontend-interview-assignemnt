import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import { Provider } from "react-redux";
import store from "@redux/store";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <html data-theme="luxury">
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </html>
    );
}

export default MyApp;
