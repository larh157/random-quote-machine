import { useEffect, useState } from 'react';
import './App.css';
import { BoxQuotes } from './Componentes/box-quotes'
// import { MyComponent } from './Componentes/MyComponent'
import { GoQuote } from "react-icons/go";

let Colors = [
  'black',
  'green',
  'blue',
  'yellow',
  '#F0F8FF',
  '#FAEBD7',
  '#00FFFF',
  '#0000FF',
  '#8A2BE2',
  '#A52A2A',
  '#DC143C',
  '#006400'

];
let na = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function App() {
  const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
  const [quotes, setTodos] = useState();

  let jsoRecibido = quotes;

  const fechApi = async () => {
    const response = await fetch(url)
    // console.log (response.status)
    let respuesta = await response.json();
    setTodos(respuesta);
    // console.log(responseJSON)
  }
  useEffect(() => {
    fechApi()
  }, [])

  function recibir(prop) {
    let arrEnvolvente = [];
    arrEnvolvente = jsoRecibido;
    let arr = [];
    let ic = <GoQuote id='comilla' />; //icono de Comillas
    // let na = 9; // numero aleatorio para navegar por las citas

   const nuale = na(0,103)// numero aleatorio
    for (let i in arrEnvolvente) {
      if ((prop) !== 0) {
        arr = <li className='lista' style={{color:[Colors[na(0, 13)]]}} id="text">{ic}{arrEnvolvente[i][nuale].quote} <span className='listaAutor' id="author"><br />Author:  {arrEnvolvente[i][nuale].author}</span></li>;
      } else {
        return alert('Datos Invalidos')

      }
    }
    return arr;
  }




  return (<div className='fondo'style={{background:[Colors[na(0, 13)]]}}>
    <div className="App"  >

      <BoxQuotes recibir={recibir}  />



    </div>

  </div>
  );
}

export default App;
