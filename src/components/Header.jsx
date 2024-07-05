import React, { useContext, useState } from 'react'
import logo from '../images/logo.svg'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Features from './Features'
import Company from './Company'
import { WidthContext } from '../context/WidthContext'
import MenuMobile from './MenuMobile'

const Header = () => {
  const [showFeatures, setShowFeatures] = useState(false)
  const [showCompany, setShowCompany] = useState(false)

  const handleShowFeatures = () => {
    if (!showFeatures) {
      setShowFeatures(true)
    } else if (showFeatures) {
      setShowFeatures(false)
    }
  }
  const handleShowCompany = () => {
    if (!showCompany) {
      setShowCompany(true)
    } else if (showCompany) {
      setShowCompany(false)
    }
  }
  const { desktopWidth, showMenu } = useContext(WidthContext)
  return (
    <header>
      <div className='left'>
        <img src={logo} alt='logo' />
        <ul className={desktopWidth ? 'menu_desktop' : 'hide'}>
          <li className='feature_li' onClick={handleShowFeatures}>
            Features <i className={showFeatures ? 'bi bi-chevron-down' : 'hide'} /><i className={showFeatures ? 'hide' : 'bi bi-chevron-up'} />
            <Features
              showFeatures={showFeatures}
            />
          </li>
          <li className='company_li' onClick={handleShowCompany}>
            Company <i className={showCompany ? 'bi bi-chevron-down' : 'hide'} /><i className={showCompany ? 'hide' : 'bi bi-chevron-up'} />
            <Company
              showCompany={showCompany}
            />
          </li>
          <li>Careers</li>
          <li>About</li>
        </ul>
      </div>
      <div className={desktopWidth ? 'right' : 'hide'}>
        <div>Login</div>
        <button>Register</button>
      </div>
      <div className={desktopWidth ? 'hide' : 'menu_mobile'}>
        <i id='burguer' className='bi bi-list' onClick={showMenu} />
      </div>
      <MenuMobile />
    </header>
  )
}

export default Header
