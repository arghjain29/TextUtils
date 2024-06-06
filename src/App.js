import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" AboutText="About TextUtils" />
      
      <div className="container mt-4">
      <TextForm header="Enter the Text to Analyze" />
      </div>
    </>
  );
}

export default App;
