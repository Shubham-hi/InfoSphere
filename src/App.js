import './App.css';
// b1f4f5a2fb4841f580177a51a6e7285c - API KEY
// 4f15388d58744148a9c1919e674b054e - API KEY2
// npm install react-router-dom@5 it should install to use switch otherwise in 


import React, {useState} from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const  App  = () => {

  // apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

 
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Switch>
          <Route path="/"><News setProgress=  {setProgress}  apiKey = {"4f15388d58744148a9c1919e674b054e"}key="science" pageSize={5} country='in' category='science'/>
</Route>
<Route exact path="/buisness"><News setProgress=  {setProgress} apiKey = {"4f15388d58744148a9c1919e674b054e"}key="buisness" pageSize={5} country='in' category='buisness'/></Route>
<Route exact path="/entertainment"><News setProgress=  {setProgress} apiKey = {"4f15388d58744148a9c1919e674b054e"}key= "entertainment" pageSize={5} country='in' category='entertainment'/></Route>
<Route exact path="/general"><News setProgress=  {setProgress} apiKey = {"4f15388d58744148a9c1919e674b054e"}key="general" pageSize={5} country='in' category='general'/></Route>
<Route exact path="/health"><News setProgress=  {setProgress} apiKey = {"4f15388d58744148a9c1919e674b054e"}key="health" pageSize={5} country='in' category='health'/></Route>
<Route exact path="/science"><News setProgress=  {setProgress} apiKey = {"4f15388d58744148a9c1919e674b054e"}key= "science" pageSize={5} country='in' category='science'/></Route>
<Route exact path="/sports"><News setProgress=  {setProgress} apiKey = {"4f15388d58744148a9c1919e674b054e"}key="sports" pageSize={5} country='in' category='sports'/></Route>
<Route exact path="/technology"><News setProgress={setProgress} apiKey={"4f15388d58744148a9c1919e674b054e"} key="technology" pageSize={5} country='in' category='technology'/></Route>

        </Switch>
      </Router>
      </div>
    )
  }

export default App;