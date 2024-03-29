import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate"; // Componente externo que facilita la paginación
// Routing
import { NavLink, useHistory } from 'react-router-dom';
// Styles
import { StoriesS } from "./Stories.styles";
import './pagination.scss'

const ItemList = ({ item }) => {

  return (
    <div >
      <h2>{item.titulo}</h2>
      <p
        style={{
          whiteSpace: "nowrap",
        }}
      >
        {item.tematica}
        <br />
        <NavLink to={`/historia/${item.titulo}`}>Leer completa</NavLink>
      </p>
      <hr />
    </div>
  );
};

const Items = ({ currentStories}) => {
  return (
    <StoriesS>
      {currentStories && currentStories.map((item, index) => (
        <ItemList item={item} key={index}></ItemList>
      ))}
    </StoriesS>
  );
};

const ShowStories = ({ leyenda, tematica, itemsPerPage }) => {
  const [currentStories, setCurrentStories] = useState(null);
  // Es importante aquí conservar el prop 'tematica', de lo contrario
  // hay problemas cuando el usuario da click sobre el logo para
  // regresar a la pantalla principal.
  const [currentCategory, setCurrentCategory] = useState(tematica);
  //---------------------------------------------------------------
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const history = useHistory();



  // Escucha por cambios en la url para cambiar el estado currentCategory
  // y triggerear el rerenderizado. Fue imposible utilizar otros 
  // eventHandlers.
  useEffect(() => {
    history.listen((location) => {
    setCurrentCategory(location.pathname.split("/")[2]);
    });
}, [history])

  // Todo esto es específico para react-paginate.
  // https://www.npmjs.com/package/react-paginate
  // ^^^ Documentación ^^^

  useEffect(() => {
    const getStories = async () => {
        let fetchedStories;
        if( leyenda === 'HISTORIAS NUEVAS') {
          fetchedStories = await fetch(
            "https://proyecto-equipo7.herokuapp.com/v1/historias/"
          );  
        } else {
          fetchedStories = await fetch(
            "https://proyecto-equipo7.herokuapp.com/v1/historias/buscarPorAtributo?tematica=".concat(currentCategory)
          );  
        }
        return await fetchedStories.json();
      };
    getStories().then( stories => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentStories(stories.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(stories.length / itemsPerPage));
  })}, [itemOffset, itemsPerPage, currentCategory, leyenda]);

  const handlePageClick = (event) => {
    const getStories = async () => {
        let fetchedStories;
        if(leyenda==='HISTORIAS NUEVAS') {
          fetchedStories = await fetch(
            "https://proyecto-equipo7.herokuapp.com/v1/historias/"
          );  
        } else {
          fetchedStories = await fetch(
            "https://proyecto-equipo7.herokuapp.com/v1/historias/buscarPorAtributo?tematica=".concat(currentCategory)
          );  
        }
        return await fetchedStories.json();
      };
    getStories().then( stories => {
    const newOffset = (event.selected * itemsPerPage) % stories.length;
    setItemOffset(newOffset);
    })
  };

//----------------------------------------------------------------
  return (
    <>
      <Items currentStories={currentStories} />
      <div className='pagination is-centered'>
      <ReactPaginate

        // Todo esto es específico para react-paginate.
        // https://www.npmjs.com/package/react-paginate
        // ^^^ Documentación ^^^

        containerClassName="pagination-list"
        pageClassName="page-item"
        pageLinkClassName="pagination-link"
        previousLinkClassName="pagination-previous"
        nextLinkClassName="pagination-next"
        activeClassName="is-current"
        role="navigation"
        aria-label="pagination"
        breakLabel="{ . . . }"
        breakClassName="pagination-ellipsis"
        nextLabel="Siguiente"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Anterior"
        renderOnZeroPageCount={null}
      />
      </div>
    </>
  );
};

export default ShowStories;
