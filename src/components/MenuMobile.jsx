import 'bootstrap-icons/font/bootstrap-icons.css'
import { useContext } from 'react'
import { WidthContext } from '../context/WidthContext'

const MenuMobile = () => {
  const { desktopWidth, hideMenu, showMobileMenu } = useContext(WidthContext)
  return (
    <div className={!desktopWidth && showMobileMenu ? 'mobile_container' : 'hide'}>
      <div className='bg_white_right'>
        <div id='icon_x' onClick={hideMenu}>
          <i className='bi bi-x-lg' />
        </div>
        <ul className='mobile_bg_white'>
          <li>Features</li>
          <li>Company</li>
          <li>Careers</li>
          <li>About</li>
        </ul>
        <div className='mobile_container_login'>
          <div id='login_m'>Login</div>
          <button>Register</button>
        </div>
      </div>
      <div className='bg_black_left' />
    </div>
  )
}

export default MenuMobile
