import { useContext } from 'react'
import designDesktop from '../images/image-hero-desktop.png'
import designMobile from '../images/image-hero-mobile.png'
import { WidthContext } from '../context/WidthContext'

const Picture = () => {
  const { desktopWidth } = useContext(WidthContext)
  return (
    <div className='picture_container'>
      <img src={desktopWidth ? designDesktop : designMobile} alt='design' />
    </div>
  )
}

export default Picture
