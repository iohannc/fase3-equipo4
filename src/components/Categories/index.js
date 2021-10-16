import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {CategoriesS} from './Categories.styles';


const Categories = (props) =>{
    const cate = props.data;
    //cate.map(item => console.log(item));
    return(
        <CategoriesS>
            {(cate||[]).slice(0,9).map(item => <a key={item.toString()}>{item}</a>)}
            <a>... ver más</a>
        </CategoriesS>
    
    );
}


//Categories.propTypes = {cat :PropTypes.array.isRequired};
export default Categories;