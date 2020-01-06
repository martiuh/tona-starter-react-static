import React from 'react';

import CuteDog from 'components/CuteDog';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEO from '../components/SEO';

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <main className="index">
        <SEO title="Home" />
        <h1>Tona React-Static starter</h1>
        <CuteDog />
      </main>
      <Footer />
    </>
  );
}
