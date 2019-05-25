import React from 'react';
import { Root, Routes } from 'react-static';
import { Router, Location } from '@reach/router';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import gTag from './gTag';
import './main.scss';

// addPrefetchExcludes(['dynamic']);

function App() {
  return (
    <Root>
      <Navbar />
      <React.Suspense
        fallback={
          <div style={{ height: '102vh' }}>
            <em>Loading...</em>
          </div>
        }
      >
        <Location>
          {({ location }) => {
            if (typeof ANALYTICS_ID !== 'undefined') {
              gTag('config', ANALYTICS_ID, {
                page_path: location.pathname
              });
            }

            return (
              <Router location={location}>
                <Routes path="*" />
              </Router>
            );
          }}
        </Location>
      </React.Suspense>
      <Footer />
    </Root>
  );
}

export default App;
