import React from 'react';

function MyFooter() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} La libreria di Sara. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default MyFooter;
