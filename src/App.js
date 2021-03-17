import { HashRouter, Route, Switch } from 'react-router-dom';

import Header from './components/navBar';
import Footer from './components/Footer';
import Error from './components/Error';


import Tracker from './components/Tracker';
import RawTracker from './components/RawTracker';
import Info from './components/MoreInfo'
import TechInfo from './components/TechInfo';

import { Container } from 'react-bootstrap';


function App() {

  const itemList = [
    { name: "Home", link: "/", comp: Tracker },
    { name: "Technology", link: "/tech", comp: TechInfo },
    { name: "Info", link: "/info", comp: Info },
    { name: "Raw", link: "/raw", comp: RawTracker }
  ];

  return (
    <div id="main">
    <HashRouter>
      <Header siteName="COVID-19 Tracker" items={itemList}/>
      <Container fluid>        
        <div className='mt-5'>
        <Switch>
          {itemList.map((e, index) => <Route exact path={e.link} key={index} component={e.comp} exact/>)}
          <Route component={Error}/>
        </Switch>
        </div>
      </Container>
    </HashRouter>
    <div style={{ margin: '100px'}}/>
    <Footer/>
  </div>);
}

export default App;
