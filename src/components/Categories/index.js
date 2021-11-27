import React from 'react';
import PropTypes from 'prop-types';
import {CategoriesS} from './Categories.styles';
// import { Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// import {earchCategory} from '../SearchCategory/index';


const Categories = (props) =>{
    const cate = props.data;
    //cate.map(item => console.log(item));
    return(
        <CategoriesS>
            {(cate||[]).slice(0,10).map(item => 
                <NavLink to={`/categoria/${item.toString()}`}>{item}</NavLink>
            )}
            {/* <a>...ver más</a> */}
        </CategoriesS>
    
    );
}


Categories.propTypes = {data :PropTypes.array.isRequired};
export default Categories;