import { BrowserRouter } from "react-router-dom"
import Approuter from "./router/Approuter";
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <BrowserRouter>
      <Approuter/>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
