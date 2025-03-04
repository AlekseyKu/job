export default function NotFound() {
  return (
    <html className="hide-popup">
      <body>
        <div className="not-found-container">
          <h1 className="error-code">404</h1>
          <p className="error-message">This page could not be found.</p>
          <a href="/" className="home-link">Home Page</a>
        </div>
      </body>
    </html>
  );
}
