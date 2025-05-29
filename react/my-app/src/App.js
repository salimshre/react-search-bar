import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  const [mode, setMode] = useState("light");

  return (

 <>
<Navbar title="TextUtils" home="Home" blog="Blogs" mode={mode} />
<div className="container my-3">
  <TextForm header="Enter the text"/>
  {/* <About /> */}
</div>
 </>
  );
}


export default App;
