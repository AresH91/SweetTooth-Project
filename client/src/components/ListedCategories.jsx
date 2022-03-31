import '../styles/main.css'
import React, { useState, useEffect } from 'react' //useState to store info, useEffect to preload info for edit forms
import { Link, useParams, useHistory } from 'react-router-dom' // useParams to use Param Vars + useHistory to redirect
import axios from 'axios'


const ListedCategories = () => {



    return (
        <div>
            <div className='row row-cols-2 row-cols-lg-6 g-2 g-lg-3 py-4 d-flex flex-wrap'>

                <Link className='category__link' to='/recipes/results/Brownie'>
                    <div className='category__img shadow'>
                        <img src="https://natashaskitchen.com/wp-content/uploads/2020/08/Chocolate-Brownie-Recipe-5.jpg" alt="" />
                    </div>
                    <div className='pt-1'>
                        <b>Brownies and Blondies</b>
                    </div>
                </Link>
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
                <Link className='category__link' to='/recipes/results/Caramel'>
                    <div className='category__img shadow'>
                        <img src="https://bellyfull.net/wp-content/uploads/2020/07/Homemade-Caramel-Sauce-Recipe-blog.jpg" alt="" />
                    </div>
                    <div className='pt-1'>
                        <b>Caramel</b>
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
                <Link className='category__link' to='/recipes/results/Cookies'>
                    <div className='category__img shadow'>
                        <img src="https://i.ibb.co/xXnFMw2/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg" alt="" />
                    </div>
                    <div className='pt-1'>
                        <b>Cookies</b>
                    </div>
                </Link>
                <Link className='category__link' to='/recipes/results/Custard'>
                    <div className='category__img shadow'>
                        <img src="https://cdn.cdnparenting.com/articles/2020/04/12154824/Egg-Custard-Recipe.jpg" alt="" />
                    </div>
                    <div className='pt-1'>
                        <b>Custard and Pudding</b>
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
                <Link className='category__link' to='/recipes/results/Frozen'>
                    <div className='category__img shadow'>
                        <img src="data:image/jpeg;base64,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" alt="" />
                    </div>
                    <div className='pt-1'>
                        <b>Frozen Desserts</b>
                    </div>
                </Link>
                <Link className='category__link' to='/recipes/results/Mousse'>
                    <div className='category__img shadow'>
                        <img src="https://www.callmepmc.com/wp-content/uploads/2017/06/Homemade-Chocolate-Mousse-with-Cocoa-Powder-and-Whipping-Cream.jpg" alt="" />
                    </div>
                    <div className='pt-1'>
                        <b>Mousse</b>
                    </div>
                </Link>
                <Link className='category__link' to='/recipes/results/Healthy'>
                    <div className='category__img shadow'>
                        <img src="https://blog.williams-sonoma.com/wp-content/uploads/2014/02/img1l.jpg" alt="" />
                    </div>
                    <div className='pt-1'>
                        <b>Healthy Dessert</b>
                    </div>
                </Link>


            </div>
            <div className='px-4 py-5 my-5 text-center'>
                <img className='d-block mx-auto mb-4 img-fluid' loading='lazy' src='https://i.ibb.co/m9pg5KF/Image-3-30-22-at-4-03-PM.jpg'></img>
            </div>
        </div>
    )
}

export default ListedCategories