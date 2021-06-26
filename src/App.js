import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import './App.css';
import Home from "./component/pages/Home";
import Sendmail from "./component/pages/Sendmail";
import Signin from "./component/pages/Signin";
import Signup from "./component/pages/Signup";
import History from "./component/pages/History";

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component= {Home}/>
        <Route exact path="/sendmail" component={Sendmail}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/history" component={History}/>
      
        <Redirect to="/"/>      
      </Switch>

      <Footer/>
    </div>
  );
}

export default App;