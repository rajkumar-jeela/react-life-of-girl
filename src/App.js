import './App.css'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import CreatePost from './components/CreatePost'
import SignUp from './components/SignUp'
import ImageUpload from './components/ImageUpload'
import EditPost from './components/EditPost'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/createPost" component={CreatePost} />
      <Route exact path="/imageUpload" component={ImageUpload} />
      <Route exact path="/editPost" component={EditPost} />
    </Switch>
  </BrowserRouter>
)

export default App
