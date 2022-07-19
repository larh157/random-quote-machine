import { useState } from "react";
import "../stylesheet/box-quotes.css";
import { FaTwitterSquare, FaTumblrSquare } from "react-icons/fa";
// import { BsFillPlusCircleFill } from "react-icons/bs";
// import { GoQuote } from "react-icons/go";
import Button from 'react-bootstrap/Button';




export function BoxQuotes({ recibir }) {
    const rf = recibir; //recibir funcion de cita y guardarlo en constante.
    const kW = 1; //keyword palabra clave para activar la funcion.
    const [Cita, setCita] = useState(kW);
    const newCita = (pc) => setCita(pc + Cita);// pc es igual a parametro o palabra clave 


    return (<>
        <div className="box-quote" id="quote-box">
            <div className="box-text" >
                {rf(Cita)}
            </div>

            <div className="icon-container box-quote">                
            <a href="https://twitter.com/intent/tweet" id="tweet-quote" target="_blank"rel="noopener noreferrer" ><FaTwitterSquare /></a>
                <FaTumblrSquare />
                <Button onClick={() => newCita(1)} className="boton"  id="new-quote">NEW QUOTE</Button>
            </div>
        </div>






    </>

    );
}
