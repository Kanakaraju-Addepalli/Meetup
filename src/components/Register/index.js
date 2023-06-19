import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'
import {
  RegisterContainer,
  RegisterImg,
  Form,
  Heading,
  InputContainer,
  Label,
  Input,
  Select,
  RegistrationButton,
  ErrMsg,
  Option,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        showError,
        registerName,
        updateError,
      } = value

      const onSubmitRegistrationForm = event => {
        event.preventDefault()
        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }
      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }
      return (
        <div>
          <Header />
          <div>
            <RegisterContainer>
              <RegisterImg
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <Form onSubmit={onSubmitRegistrationForm}>
                <Heading>Let us join</Heading>
                <InputContainer>
                  <Label htmlFor="name">NAME</Label>
                  <Input
                    id="name"
                    value={name}
                    type="text"
                    onChange={onChangeName}
                    placeholder="Enter Name"
                  />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="topic">Topics</Label>
                  <Select id="topic" value={topic} onChange={onChangeTopic}>
                    {topicsList.map(each => (
                      <Option value={each.id} key={each.id}>
                        {each.displayText}
                      </Option>
                    ))}
                  </Select>
                </InputContainer>
                <RegistrationButton type="submit">
                  Register Now
                </RegistrationButton>
                {showError ? <ErrMsg>Please enter your name</ErrMsg> : ''}
              </Form>
            </RegisterContainer>
          </div>
        </div>
      )
    }}
  </RegisterContext.Consumer>
)
export default Register
