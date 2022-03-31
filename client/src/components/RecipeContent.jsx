import '../styles/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';


import React, { useState, useEffect } from 'react' //useState to store info, useEffect to preload info for edit forms
const RecipeContent = (props) => {
    const {recipe} = props;

    return (
        <div className='row'>
            <div className='col-12 col-md-4'>
                <img src={recipe.image} alt="" className='recImg img-fluid sticky-top' loading='lazy'/>
            </div>

            <div className='col-12 col-md-8'>
                <div className='row'>
                    <div className='col-12'><h1>{recipe.name}</h1></div>
                    <div className='col-12 mb-4'><i className='bi bi-tag'></i>{recipe.category}</div>
                    <div className='col-12' >
                        <h4>Cooking Instructions</h4>
                        <p>{recipe.instructions}</p>
                    </div>
                </div>
                <div className='row pt-4'>
                    <div className='col-12'>
                        <h4>Ingredients</h4>
                        <ul className='list-group list-group-flush'>
                            {recipe.ingredients?recipe.ingredients.map((ingredient, i)=>{
                                return (
                                    <li className='list-group-item'>
                                        {ingredient.quantity} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ingredient.name}
                            </li>
                                )
                            })
                            :''
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-4 py-5 my-5 text-center'>
                <img className='d-block mx-auto mb-4 img-fluid' loading='lazy' src='https://i.ibb.co/m9pg5KF/Image-3-30-22-at-4-03-PM.jpg'></img>
            </div>
        </div>

    )
}

export default RecipeContent