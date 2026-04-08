
// este el contenido principal
const Navbar = () => {
  // retorna el contenido que se va mostrar en la pantalla
  return (
    // se utliza la etiqueta header para hacer un encabezado
    <header>
      {/* se hace para agrupar los enlaces del menu */}
        <nav>
          {/* etiqueta para hacer una lista desordenada y opciones del menu */}
            <ul>
                <li><a href="Home">Home</a></li>
                <li><a href="About">About</a></li>
            </ul>
        </nav>
    </header>
  )
}
//exporta el componente para usarlo en otros archivos
export default Navbar





