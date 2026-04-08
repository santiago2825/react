// trae la barra de navegacion
import Navbar from "./components/Navbar";
// trae el contenido del home
import Home from "./components/Home";
//trae el contenido del about
import About from "./components/About";
//trae el contenido del footer
import Footer from "./components/footer";
// trae los estilos
import "./App.css";
// este es el componente principal
const App = () => {
  // retorna el contenido que se va mostra en la pantalla
  return (
    // se utiliza un fragmento para agrupar varios elementos
    <>
    {/* muestra la barra de navegacion */}
    <Navbar/>
    {/* muestra el contenido del home */}
    <Home/>
    {/* muestra el contendio del about */}
    <About/>
    {/* muestra el contenido del footer */}
    <Footer/>
    </>
  )
}
//exporta el componente para usarlo en la app 
export default App
