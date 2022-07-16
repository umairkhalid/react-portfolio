import React from 'react';
import NavTabs from './NavTabs';

export default function Header(currentPage, handlePageChange) {
  return (
    <header className="hero">
      <h1 className="headings">Umair Khalid</h1>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}
