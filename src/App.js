import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css'

import RegisterContext from './context/RegisterContext'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Register from './components/Register'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {
    name: '',
    topic: 'Arts and Culture',
    isRegistered: false,
    showError: false,
  }

  changeName = name => {
    this.setState({name})
  }

  changeTopic = topic => {
    this.setState({topic})
  }

  //   registerName = () => {
  //     this.setState(prevState => ({isRegistered: !prevState.isRegistered}))
  //   }

  //   updateError = () => {
  //     this.setState(prevState => ({showError: !prevState.showError}))
  //   }

  registerName = () => {
    this.setState({isRegistered: true})
  }

  updateError = () => {
    this.setState({showError: true})
  }

  render() {
    const {name, topic, isRegistered, showError} = this.state

    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          isRegistered,
          showError,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          registerName: this.registerName,
          updateError: this.updateError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
