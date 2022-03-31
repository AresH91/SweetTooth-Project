import '../styles/main.css'
//Importing the following modules
import React, { useState, useEffect } from 'react' //useState to store info, useEffect to preload info for edit forms
import { Link, useParams, useHistory } from 'react-router-dom'
import axios from 'axios'

const ListedRecipes = (props) => {

    const { recipes } = props



    return (
        <div>
            <div className='row row-cols-2 row-cols-lg-5 g-2 g-lg-3 d-flex flex-wrap mt-4'>
                {
                    recipes ? recipes.map((recipe, i) => {
                        return (
                            <Link to={`/recipe/${recipe._id}`} className='col text-center category__link'>
                                <div className='category__img category__img--large shadow'>
                                    <img src={recipe.image} alt={recipe.name} loading='lazy' />
                                </div>
                                <div className='pt-1'><b>{recipe.name}</b></div>
                            </Link>
                        )
                    }) : ''
                }

            </div>
            <div className='px-4 py-5 my-5 text-center'>
                <img className='d-block mx-auto mb-4 img-fluid' loading='lazy' src='https://i.ibb.co/m9pg5KF/Image-3-30-22-at-4-03-PM.jpg'></img>
            </div>
        </div>

    )
}

export default ListedRecipes