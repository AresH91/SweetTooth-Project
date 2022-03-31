import '../styles/main.css'
//Importing the following modules
import React, { useState, useEffect } from 'react' //useState to store info, useEffect to preload info for edit forms
import { Link, useParams, useHistory } from 'react-router-dom'
const CategoryBox = () => {
    return (
    <div className='row row-cols-2 row-cols-lg-6 g-2 g-lg-3 py-4'>
        
        <Link className='category__link' to='/recipes/results/Cake'>
            <div className='category__img shadow'>
                <img src="https://i.ibb.co/cCywsLm/cake.jpg" alt="" />
            </div>
            <div className='pt-1'>
                <b>Cakes</b>
            </div>
        </Link>
        <Link className='category__link' to='/recipes/results/Candy'>
            <div className='category__img shadow'>
                    <img src="https://i.ibb.co/r7zZr2d/candy.jpg" alt="" />
            </div>
            <div className='pt-1'>
                <b>Candy</b>
            </div>
        </Link>
        <Link className='category__link' to='/recipes/results/Cookies'>
            <div className='category__img shadow'>
                    <img src="https://i.ibb.co/xXnFMw2/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg" alt="" />
            </div>
            <div className='pt-1'>
                <b>Cookies</b>
            </div>
        </Link>
        <Link className='category__link' to='/recipes/results/Cheesecake'>
            <div className='category__img shadow'>
                    <img src="https://i.ibb.co/HFky528/Best-Cheesecake-Recipe-2-1-of-1-4.jpg" alt="" />
            </div>
            <div className='pt-1'>
                <b>Cheesecake</b>
            </div>
        </Link>
        <Link className='category__link' to='/recipes/results/Pie'>
            <div className='category__img shadow'>
                    <img src="https://i.ibb.co/MhZBVyQ/Blueberry-Pie-Recipe-2-1200.jpg" alt="" />
            </div>
            <div className='pt-1'>
                <b>Pie</b>
            </div>
        </Link>
        <Link className='category__link' to='/categories'>
            <div className='category__img shadow'>
                    <img src="https://i.ibb.co/VNY2dxj/istockphoto-627067474-1024x1024.jpg" alt="" />
            </div>
            <div className='pt-1'>
                <b>View All</b>
            </div>
        </Link>


    </div>
)
}

export default CategoryBox