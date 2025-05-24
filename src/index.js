import ReactDOM from 'react-dom/client';
import './index.css';

import Footer from "./Footer"
import Header from "./Header"
import MainContent from "./MainContent"

const root = ReactDOM.createRoot(document.getElementById('root'));

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

root.render(
  <Page />
);
