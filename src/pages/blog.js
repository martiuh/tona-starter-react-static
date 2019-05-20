import React from 'react';
import { useRouteData } from 'react-static';
import { Link } from '@reach/router';

import SEO from '../components/SEO';

export default function Blog() {
  const { posts } = useRouteData();
  return (
    <main>
      <SEO title="Blog" description="Personal blog by Tonatiuh González" />
      <h1>Últimas entradas</h1>
      <code>
        Enumerar nuestros posts (del último al final) También blogs de otros
        servicios/páginas nuestros (de carácter dinámico)
      </code>
      {/* <br />
    All Posts:
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
        </li>
      ))}
    </ul> */}
    </main>
  );
}
