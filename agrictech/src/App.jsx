import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import axios from 'axios';
import {useState} from 'react'
import { useEffect } from 'react';

function App() {
  const [userInfo, setuserInfo] = useState()
  const [userData, setUserData ]= useState([])
    const request = async () =>{

        let data = {
          title:"tutor",
          body: "Mr Obi"
        }
      // let result = await axios.get("https://jsonplaceholder.typicode.com/posts");
      let result = await axios.post("https://jsonplaceholder.typicode.com/posts", data);
      setUserData(result.data)
    // console.log(axios);
      
        
    }

    console.log(userData)
    useEffect(() => {
      request()
    }, [])




    console.log(userInfo)
  return (
    <>
      {/* <form>
          <input type="text" name='title' onChange={(e) => setuserInfo(e.target.value) }/>
          <input type="text" name='body' onChange={}/>
          <button type='submit'>Submit</button>
      </form> */}


      
    <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
    </>

  );

  
}
 
 

export default App;
