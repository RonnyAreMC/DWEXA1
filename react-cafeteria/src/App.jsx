import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Reservation from './components/Reservation'
import Footer from './components/Footer'

// COMPONENTE RAÍZ: arma la página uniendo todos los componentes.
// La estructura de la interfaz se ve clara: cada sección es un componente.
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Reservation />
      <Footer />
    </>
  )
}
