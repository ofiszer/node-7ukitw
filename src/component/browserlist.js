import React from 'react';
import Browser from './browser';
import Footer from './footer';
import Navigation from './navigation';

export default function BrowsersList({ list }) {
  return (
    <article>
      <Navigation />
      <header>
        <h1>Popular web browser</h1>
      </header>
      <ul>
        {list.map((browser, i) => (
          <Browser key={i} {...browser} />
        ))}
      </ul>
      <Footer />
    </article>
  );
}
