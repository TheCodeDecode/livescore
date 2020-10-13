import React, { useEffect ,useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import { fetchMatches } from "./api/api";
import Navbar from "./components/Navbar";
import MyCard from "./components/Mycard";

import "./App.css";


function App() {

  const [matches, setMatches] = useState([]);



  useEffect(() => {
    fetchMatches()
      .then((data) => {
        console.log(data);
        setMatches(data.matches)
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <>
      <Navbar />
     <div className='container-fluid'>
    <div className='row'>
    
    { matches.map((item,i) => (  <MyCard key ={i} {...item}/>  )) }
     </div>
     </div>
    
   
    </>
  );
}

export default App;
