import React, { useState, useEffect } from "react";
// Componente externo que facilita la paginación
import ReactPaginate from "react-paginate";
import { NavLink } from 'react-router-dom';
// Styles
import { StoriesS } from "./Stories.styles";

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

const Items = ({ stories }) => {
  return (
    <StoriesS>
      {stories && stories.map((item, index) => (
        <ItemList item={item} key={index}></ItemList>
      ))}
    </StoriesS>
  );
};

const ShowStories = ({ itemsPerPage, stories }) => {
  const [currentStories, setCurrentStories] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);



  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentStories(stories.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(stories.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % stories.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items stories={stories} />
      {/* <ReactPaginate
        containerClassName="pagination is-centered"
        pageClassName="page-item"
        pageLinkClassName="pagination-link"
        previousLinkClassName="pagination-previous"
        nextLinkClassName="pagination-next"
        activeClassName="is-current"
        role="navigation"
        aria-label="pagination"
        breakLabel="..."
        breakClassName="pagination-ellipsis"
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      /> */}
    </>
  );
};

export default ShowStories;
