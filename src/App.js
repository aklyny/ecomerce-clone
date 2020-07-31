import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';
function App() {
  const [{user},dispatch] = useStateValue();
  useEffect(()=>{
    const unsubscripe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
    return ()=>{
      unsubscripe()
    }
  },[])
  return (
    <Router>
  <div className="App">
    <Switch>
      <Route path="/checkout">
      <Header />
       <Checkout />
      </Route>
      <Route path="/login">
      <Header />
      <Login />
      </Route>
      <Route path="/">
      <Header/>
      <Home />
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
