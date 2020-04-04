import React from 'react';
import Top from '../../components/Top';
import Footer from '../../components/Footer'
import NewBody from '../../components/NewBody';

export default function New() {
  return (
    <div style={{ display: "flex", flexDirection: 'column' }}>
      <Top></Top>
        <NewBody />
      <Footer></Footer>
    </div>
  );
}
