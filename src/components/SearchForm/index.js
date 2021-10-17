import React from "react";
// Styles
import { Form } from "./SearchForm.styles";

const SearchForm = (props) => {
    return(
        <Form className="field has-addons">
        <div className="control is-expanded has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="Iniciar una búsqueda"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <div className="control">
            <button type="submit" className="button is-danger">
              Buscar
            </button>
          </div> 
          </Form>
    );
}

export default SearchForm;