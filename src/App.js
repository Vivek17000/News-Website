/* eslint-disable no-undef */

import './App.css';

import React, { useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route 
  
} from "react-router-dom";


<<<<<<< HEAD
const App =() => {
  const pageSize = 8;
 

  const [progress, setProgress] = useState(0)
  


=======
export default class App extends Component {
  pageSize = 70
  state = {
    progress : 0
  }
  
  setProgress = (progress) => {
    this.setState({progress : progress})
  }


  render() {
>>>>>>> 5c460d6d38e6e0ac66b16d0f17c7e3390d1d5239
    return (
     <div>

      <Router>
      <Navbar/>
      <LoadingBar
      height={3}
        color='#f11946'
        progress={progress}
      />

      <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/>}></Route>

          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business"/>}></Route>

         <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route>

         <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/>}></Route>

         <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health"/>}></Route>

         <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science"/>}></Route>

         <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports"/>}></Route>

         <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology"/>}></Route>
          
        </Routes>

      </Router>

     </div>

    )
  
}
export default App;