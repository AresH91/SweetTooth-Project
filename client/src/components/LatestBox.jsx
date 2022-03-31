import '../styles/main.css'
//Importing the following modules
import React, { useState, useEffect } from 'react' //useState to store info, useEffect to preload info for edit forms
import { Link, useParams, useHistory } from 'react-router-dom'
import axios from 'axios'

const LatestBox = () => {

    const [latest, setLatest] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/recipes/latest`)
            .then(res => {
                setLatest(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
    <div className='pb-4 pt-4'>
        <div className='d-flex mb-2 align-items-center'>
            <h2>
                Latest Recipes
            </h2>
            <Link className='ms-auto' to="/recipes">View More</Link>
        </div>

        {/* Map through DB data to populate */}
        <div className='row row-cols-2 row-cols-lg-5 g-2 g-lg-3'>
            {
                latest?latest.map((recipe, i)=>{
                    return (
                        <Link to={`/recipe/${recipe._id}`} className='col text-center category__link'>
                            <div className='category__img category__img--large shadow'>
                                <img src={recipe.image} alt={recipe.name} loading='lazy'/>
                            </div>
                            <div className='pt-1'><b>{recipe.name}</b></div>
                        </Link>
            )
                }):''
            }
        </div>


    </div>
    )
}

export default LatestBox