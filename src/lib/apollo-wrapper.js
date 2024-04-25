"use client"
import { ApolloLink, HttpLink } from "@apollo/client"
import {ApolloNextAppProvider, NextSSRApolloClient, NextSSRInMemoryCache, SSRMultipartLink} from "@apollo/experimental-nextjs-app-support/ssr"

const makeClient = () => {

    const httpLink = new HttpLink({
        uri: "https://countries.trevorblades.com/graphql"
    });

    return new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link:
        typeof window === "undefined"
          ? ApolloLink.from([
              new SSRMultipartLink({
                stripDefer: true,
              }),
              httpLink,
            ])
          : httpLink
    });
}

export const ApolloWrapper = ({children}) => {
    return <ApolloNextAppProvider makeClient={makeClient}>
        {children}
    </ApolloNextAppProvider>;
}