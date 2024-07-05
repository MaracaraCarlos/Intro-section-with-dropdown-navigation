import Header from './components/Header'
import Picture from './components/Picture'
import Info from './components/Info'
import Footer from './components/Footer'
import { WidthProvider } from './context/WidthContext'

function App () {
  return (
    <>
      <WidthProvider>
        <Header />
        <main>
          <Picture />
          <section className='left_main'>
            <Info />
            <Footer />
          </section>
        </main>
      </WidthProvider>
    </>
  )
}

export default App
