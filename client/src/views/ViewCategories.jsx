import '../styles/main.css'
import React, { useState, useEffect } from 'react' //useState to store info, useEffect to preload info for edit forms
import { Link, useParams, useHistory } from 'react-router-dom' // useParams to use Param Vars + useHistory to redirect
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios'
import ListedCategories from '../components/ListedCategories';


const ViewCategories = () => {

    const history = useHistory();
    const [searchby, setSearchby] = useState();

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`/recipes/search/results/${searchby}`)
    }

    return (
        <div>
            <div className='container-xxl px-md-5 bg-white shadow-lg'>
                <header className='d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom'>
                    <Link className='d-flex align-items-center- col-md-3 mb-2 mb-md-0 text-dark text-decoration-none' to='/'><img width="125" height="100" src='https://i.ibb.co/68gYxBc/Sweet-Tooth-logos.jpg' /></Link>
                    <ul className='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 '>
                        <li>
                            <Link to="/" className='nav-link px-2 text-dark text-decoration-none'><b>Home</b></Link>
                        </li>
                        <li>
                            <Link to="/recipes" className='nav-link col-md-auto mb-2 justify-content-center mb-md-0 text-dark text-decoration-none'><b>Recipes</b></Link>
                        </li>
                        <li>
                            <Link to="/recipe/submit/new" className='nav-link col-md-auto mb-2 justify-content-center mb-md-0 text-dark text-decoration-none'><b>Add Recipe</b></Link>
                        </li>
                    </ul>

                    <div className='col-md-3 text-end'>
                        <form onSubmit={(e) => { handleSearch(e) }}>
                            <input type="search" class="form-control" placeholder="Search..." aria-label="Search" onChange={(e) => { setSearchby(e.target.value) }} />
                        </form>                    </div>
                </header>
                <nav aria-label='breadcrumb'>
                    <ol className='breadcrumb'>
                        <li className='breadcrumb-item'><Link to='/'>Home</Link></li>
                        <li className='breadcrumb-item-active' aria-current="page">&nbsp; /&nbsp; Categories&nbsp;<i className='bi bi-tag'></i></li>
                    </ol>
                </nav>
                <ListedCategories />
            </div>
            
        </div>
            )
}

            export default ViewCategories