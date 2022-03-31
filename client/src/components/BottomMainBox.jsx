import '../styles/main.css'
//Importing the following modules
import React, { useState, useEffect } from 'react' //useState to store info, useEffect to preload info for edit forms
import { Link, useParams, useHistory } from 'react-router-dom'

const BottomMainBox = () => {
  return (
    <div className='px-4 py-5 my-5 text-center'>
      <img className='d-block mx-auto mb-4 img-fluid' loading='lazy' src='https://i.ibb.co/m9pg5KF/Image-3-30-22-at-4-03-PM.jpg'></img>
        <h1 className='display-5 fw-bold'>Submit your recipe!</h1>
        <div className='col-lg-6 mx-auto'>
            <p className='lead mb-4'>Submit your recipe to be display on our site!</p>
            <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
                <Link className='btn btn-danger btn-lg'>Submit Recipe</Link>
            </div>
        </div>
    </div>
  )
}

export default BottomMainBox