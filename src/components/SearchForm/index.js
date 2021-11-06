import React from "react";
// Styles
import { Form } from "./SearchForm.styles";
import { Link, useHistory } from "react-router-dom";
const SearchForm = (props) => {
  let historia = useHistory();
  const cambiar = () => {
    const campobusqueda = document.getElementById("busqueda").value;
    historia.push(`/busqueda/${campobusqueda}`);
  }
  return (
    <Form className="field has-addons">
      <div className="control is-expanded has-icons-left">
        <input
          className="input"
          type="text"
          placeholder="Iniciar una búsqueda"
          id="busqueda"
        />
        <span className="icon is-small is-left">
          <i className="fas fa-search"></i>
        </span>
      </div>
      <div className="control">
        <button onClick={cambiar} className="button is-danger">
          Buscar
        </button>
      </div>
    </Form>
  );
}

export default SearchForm;