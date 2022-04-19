import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { Navbar } from "./components/Navbar";
import { Home } from './components/Home';
import { AddContact } from './components/AddContact';
import { EditContact } from './components/EditContact';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />

      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
      </main>

    </BrowserRouter>
  );
};

export default App;
