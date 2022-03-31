import '../styles/main.css'
//Importing the following modules
import React, { useState, useEffect } from 'react' //useState to store info, useEffect to preload info for edit forms
import { Link, useParams, useHistory } from 'react-router-dom'
import axios from 'axios'

const CenterBox = () => {

  const [recipe, setRecipe] = useState();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/random`)
      .then(res => {
        setRecipe(res.data[0]._id)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <div className='row flex-lg-row-reverse align-items-center g-5 py-4 mb-4'>
        <div className='col-12 col-lg-6'>
              <img src="https://i.ibb.co/dpL4kG2/oie-oie-trim-image-1.png" alt="" width='607' height='510'className='d-block mx-lg-auto img-fluid' loading='lazy'/>
        </div>
        <div className='col-12 col-lg-6'>
            <h1 className='display-5 fw-bold mb-3'>View our selection of delicious recipes!
            </h1>
            <p className='lead'>
                Explore our huge selection of delicious dessert recipes that are sure to delight your friends and family!
            </p>
            <div className='d-grip gap-2 d-md-flex justify-content-md-start'>
                <Link to='/recipes'><button className='btn btn-danger btn-lg px-4 me-md-'>View Recipes</button></Link>
                <Link to={`/recipe/${recipe}`}><button className='btn btn-outline-secondary btn-danger btn-light btn-lg px-4 me-md-'>Random Recipe</button></Link>
            </div>
        </div>
    </div>
  )
}

export default CenterBox