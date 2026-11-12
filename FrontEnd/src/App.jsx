
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function BrowseItems() {
  return <h1>Browse Items</h1>;
}

function ReportLost() {
  return <h1>Report Lost Item</h1>;
}

function ReportFound() {
  return <h1>Report Found Item</h1>;
}

function Login() {
  return <h1>Login Page</h1>;
}

function Register() {
  return <h1>Registration Page</h1>;
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<BrowseItems />} />
        <Route path="/report-lost" element={<ReportLost />} />
        <Route path="/report-found" element={<ReportFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
