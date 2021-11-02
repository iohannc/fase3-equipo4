import React from 'react';
import PropTypes from 'prop-types';
import {StoriesS} from "./Stories.styles";

const ItemList = ({ item }) => {
    return (
        <>
            <h2>{item.titulo}</h2>
            <p>
                { item.texto }
            Leer completa
            </p>
            <hr />
        </>
    );
};

const ShowStories = (props) =>{
    const listado = props.listHist;
    listado.map(item => console.log(listado));
    return(
        <StoriesS>
            {
                listado.map((item) => (
                    <ItemList item={ item }>
                    </ItemList>
                ))
            }
        </StoriesS>
    
    );
}


ShowStories.propTypes = {listHist :PropTypes.array.isRequired};
export default ShowStories;