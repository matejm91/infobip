import React from 'react';
import { Link } from 'react-router-dom';
import 'assets/style/_404.css';
import notFoundGif from 'assets/image/404.webp';

function NotFoundPage() {
  return (
    <div className="notFoundPage__content">
      <iframe
        src={notFoundGif}
        title="Tom cant find it"
        width="480"
        height="370"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      />
      <p>sorry mate, can t seem to find the page you re looking for</p>
      <Link to="/">Go to home page</Link>
    </div>
  );
}

export default NotFoundPage;