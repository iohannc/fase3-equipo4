import React, { useEffect, useState } from "react";
import { ResultItem, Container, TitleBusq } from "./results.styles";
import { Link, useParams } from "react-router-dom";

function ResultBusq() {
  const [results, datosBusq] = useState([]);
  const { busqueda } = useParams();
  const buscar = async () => {
    const datos = await fetch(`https://proyecto-equipo7.herokuapp.com/v1/historias/${busqueda}`);
    const resultados = await datos.json();
    datosBusq(resultados);
  }

  useEffect(() => {
    buscar();
  },)

  return (
    <>
      <TitleBusq>Resultados de la búsqueda</TitleBusq>
      {
        results.map(item => (
          <Container key={item.id}>
            <Link to={`/historia/${item.titulo}`}>
              <ResultItem>
                <div>
                  <h3>{item.titulo}</h3>
                  <span>Temática: {item.tematica}</span>
                </div>
                <div>
                  <span>{item.ficcion ? "Ficcion" : "Historia verdadera"}</span>
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