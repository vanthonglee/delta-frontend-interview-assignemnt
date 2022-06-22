import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import { Provider } from "react-redux";
import store from "@redux/store";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";

import { ReactQueryDevtools } from "react-query/devtools";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                    },
                },
            }),
    );

    return (
        <html data-theme="luxury">
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <Provider store={store}>
                        <Component {...pageProps} />
                        <ReactQueryDevtools
                            initialIsOpen={false}
                        ></ReactQueryDevtools>
                    </Provider>
                </Hydrate>
            </QueryClientProvider>
        </html>
    );
}

export default MyApp;
