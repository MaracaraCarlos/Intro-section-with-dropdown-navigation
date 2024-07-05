import audiophile from '../images/client-audiophile.svg'
import databiz from '../images/client-databiz.svg'
import meet from '../images/client-meet.svg'
import maker from '../images/client-maker.svg'

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={databiz} alt='databiz' />
      </div>
      <div>
        <img src={audiophile} alt='audiophile' />
      </div>
      <div>
        <img src={meet} alt='meet' />
      </div>
      <div>
        <img src={maker} alt='maker' />
      </div>
    </footer>
  )
}

export default Footer
