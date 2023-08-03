import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
// import PageNotFound from './components/PageNotFound';
import QnASection from './components/QnASection';

//! REACT ROUTER IMPORT
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar logo="SKS" theme="dark-mode" />}>
            <Route index element={<Form />} />
            <Route exact path="home" element={<Form />} />
            <Route exact path="QnASection" element={<QnASection />} />

            {/* if the path is wrong */}
            {/* <Route path="/*" element={<PageNotFound />} /> */}
            <Route path="/*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
