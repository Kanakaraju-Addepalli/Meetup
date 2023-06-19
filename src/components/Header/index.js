import {Link} from 'react-router-dom'

import {Nav, Logo, ResponsiveContainer} from './styledComponents'

const Header = () => (
  <Nav>
    <ResponsiveContainer>
      <Link to="/">
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
          alt="website logo"
        />
      </Link>
    </ResponsiveContainer>
  </Nav>
)

export default Header
