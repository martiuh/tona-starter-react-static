import React from 'react';

import SEO from '../components/SEO';
import '../css/index.scss';

export default function IndexPage() {
  return (
    <main className="index">
      <SEO
        title="Home"
      />
      <h1>Tona React-Static starter</h1>
    </main>
  );
}
