import React from 'react';
import Favicons from './Favicons';
import Noscript from './Noscript';
import Analytics from './Analytics';

export default function Document({ Html, Head, Body, children }) {
  return (
    <Html lang="es-MX">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Favicons />
        <Noscript />
        <Analytics id="UA-139894602-1" />
      </Head>
      <Body>{children}</Body>
    </Html>
  );
}
