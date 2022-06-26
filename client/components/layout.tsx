import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Router from 'next/router';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import * as React from 'react';

import Header from './header.tsx';
import Footer from './footer.tsx';

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Layout = ({ children }) => {

    // represents the HTML head tag, not a page header
    const head = () => (
        <React.Fragment>

            <title>Recourse</title>
            <meta name="description" content="A website for course reviews at Ashoka University" />
            <meta name="viewport" content="initial-scale=1, width=device-width" />

            <link rel="icon" href="../assets/img/favicon.ico" />
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                crossOrigin="anonymous"
            />
            <link rel="stylesheet" href="../styles/Layout.modules.css" />

            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />

        </React.Fragment>
    );

    return (
        <React.Fragment>
            {head()} <Header/> <div className="container pt-5 pb-5">{children}</div> <Footer/>
        </React.Fragment>
    );
};

export default Layout;
