import React, {useEffect} from "react";
import { ResultItem, Container, TitleBusq } from "./results.styles";
import { Link } from "react-router-dom";

function ResultBusq (){

  const [results, datosBusq] = React.useState([]);

  useEffect(()=>{
    buscar();
  }, [])

  const buscar = async () =>{
    const datos = await fetch('https://proyecto-equipo7.herokuapp.com/v1/historias/gato')
    const resultados = await datos.json();
    datosBusq(resultados)
  }
  
  return (
    <>
      <TitleBusq>Resultados de la búsqueda</TitleBusq>
    {
      results.map(item => (
        <Container key={item.id}>
          <Link to="/">
            <ResultItem>
              <div>
                  <h3>{item.titulo}</h3>
                  <span>Temática: {item.tematica}</span> 
              </div>
              <div>
                <span>Subido el {item.createdAt}</span>
              </div>
            </ResultItem>
          </Link>
        </Container>
      ))
    }
    
    </>
  );
}

export default ResultBusq;