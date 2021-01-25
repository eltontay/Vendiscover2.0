import './App.css';
import Landingpage from '../src/components/Landingpage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Landingpage} exact />
      </Switch>
    </Router>
  );
}

export default App;
