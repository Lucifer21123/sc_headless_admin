import React, { useEffect, useState } from "react";
import { Router } from "next/router";
import { ThemeProvider } from "styled-components";
import { LocationProvider } from "contexts/location/location.provider";
import { defaultTheme } from "site-settings/site-theme/default";
import AppLayout from "layouts/app-layout";
import { useMedia } from "utils/use-media";
import PageLoader from "components/Loader/page-loader";

import { ApolloProvider } from "@apollo/client";
import { useApollo } from "utils/apollo-client";

//! import LayoutContext
import { LayoutProvider } from "contexts/layout/layout.provider";
// External CSS import here
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//!import the fonts

import "assets/fonts/index.css";
import { GlobalStyle } from "site-settings/site-style/global.style";

//! Language translation messages
import { messages } from "site-settings/site-translation/messages";
import "typeface-lato";
import "typeface-poppins";

//! need to provide types
export default function ExtendedApp({ Component, pageProps }) {
  const mobile = useMedia("(max-width: 580px)");
  const tablet = useMedia("(max-width: 991px)");
  const desktop = useMedia("(min-width: 992px)");

  const [loading, setLoading] = useState(false);
  const apolloClient = useApollo(pageProps.initialApolloState);
  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      setLoading(true);
    });
    Router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
    Router.events.on("routeChangeError", (err) => {
      setLoading(false);
      console.log(`error===>>${err}`);
    });
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={defaultTheme}>
        <LocationProvider messages={messages}>
          <LayoutProvider>
            <>
              <AppLayout deviceType={{ mobile, tablet, desktop }}>
                {loading ? (
                  <PageLoader />
                ) : (
                  <Component
                    {...pageProps}
                    deviceType={{ mobile, tablet, desktop }}
                  />
                )}
              </AppLayout>
              <GlobalStyle />
            </>
          </LayoutProvider>
        </LocationProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
