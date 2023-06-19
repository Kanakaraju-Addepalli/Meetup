import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  topic: '',
  isRegistered: false,
  showError: false,
  changeName: () => {},
  changeTopic: () => {},
  registerName: () => {},
  updateError: () => {},
})

export default RegisterContext
