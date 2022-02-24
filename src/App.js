import {BrowserRouter, Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import CreatePost from './components/CreatePost'

import './App.css'
import SignUp from './components/SignUp'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/createPost" component={CreatePost} />
    </Switch>
  </BrowserRouter>
)

export default App
