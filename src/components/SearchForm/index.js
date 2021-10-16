import React from "react";
// Styles
import { Form } from "./SearchForm.styles";

const SearchForm = (props) => {
    return(
        <Form className="field has-addons">
        <div className="control is-expanded has-icons-left">
            <input
              class="input"
              type="text"
              placeholder="Iniciar una búsqueda"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-search"></i>
            </span>
          </div>
          <div class="control">
            <button type="submit" class="button is-info">
              Buscar
            </button>
          </div> 
          </Form>
    );
}

export default SearchForm;