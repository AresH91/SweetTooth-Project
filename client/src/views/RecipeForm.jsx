import '../styles/main.css'
import React, { useState, useEffect } from 'react' //useState to store info, useEffect to preload info for edit forms
import { Link, useParams, useHistory } from 'react-router-dom' // useParams to use Param Vars + useHistory to redirect
import axios from 'axios'

const RecipeForm = () => {

    const [formValues, setFormValues] = useState([{ name: "", quantity: "" }])
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [instructions, setInstructions] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    const addFormFields = () => {
        setFormValues([...formValues, { name: "", quantity: "" }])
        console.log(formValues)
    }

    const removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let ingredients = formValues
        axios.post(`http://localhost:8000/api/add/recipe`, { image, name, category, instructions, ingredients })
            .then(res => {
                history.push(`/`)
            })
            .catch(err => {
                const errorRes = err.response.data.errors
                const errorArr = []
                for (const key of Object.keys(errorRes)) {
                    errorArr.push(errorRes[key]["message"])
                }
                setErrors(errorArr)
            })
    }

    const [searchby, setSearchby] = useState();

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`/recipes/search/results/${searchby}`)
    }

    return (
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
                    </form>
                </div>
            </header>
            <nav aria-label='breadcrumb'>
                <ol className='breadcrumb'>
                    <li className='breadcrumb-item'><Link to='/'>Home</Link></li>
                    <li className='breadcrumb-item-active' aria-current="page">&nbsp; /&nbsp; Submit your recipe</li>
                </ol>
            </nav>
            <div className='px-4 py-5 my-5 text-center'>
                <h1 className='display-5 fw-bold'>Submit Your Recipe</h1>
                <div className='col-lg-6 mx-auto'>
                    <p className='lead'>Share your amazing recipes with people all across the world! Fill out our form to get started!</p>
                </div>
            </div>

            <div className='row justify-content-center'>
                <div className='col-8'>
                    <form >
                        <div className='row g-3'>
                            {
                                errors.map((err, i) => (
                                    <div className='block'>
                                        <p key={i} style={{ color: 'red' }}>{err}</p>
                                    </div>
                                ))
                            }
                            <div className='col-12'>
                                <label htmlFor="" className='form-label'>Recipe Image URL</label>
                                <input type="text" className='form-control' onChange={(e)=>{setImage(e.target.value)}}/>
                            </div>
                            <div className='col-12'>
                                <label htmlFor="" className='form-label'>Recipe Name</label>
                                <input type="text" className='form-control' onChange={(e)=>{setName(e.target.value)}} />
                            </div>
                            <div className='col-12'>
                                <label htmlFor="" className='form-label'>Recipe Category</label>
                                <select className='form-select' onChange={(e)=>{setCategory(e.target.value)}}>
                                    <option selected>Select Category</option>
                                    <option value="Cake">Cake</option>
                                    <option value="Candy">Candy</option>
                                    <option value="Caramel">Caramel</option>
                                    <option value="Cheesecake">Cheesecake</option>
                                    <option value="Cookies">Cookies</option>
                                    <option value="Custard">Custard and Pudding</option>
                                    <option value="Pie">Pie</option>
                                    <option value="Frozen">Frozen Dessert</option>
                                    <option value="Mousse">Mousse</option>
                                    <option value="Healthy">Healthy Dessert</option>
                                </select>
                            </div>
                            <div className='col-12'>
                                <label htmlFor="" className='form-label'>Recipe Instructions</label>
                                <textarea className='form-control' cols="30" rows="8" onChange={(e) => {setInstructions(e.target.value)}}></textarea>
                            </div>
                            {formValues.map((element, index) => {
                                return (
                                    <div className='col-12 row mt-1'>
                                        <div className='col'>
                                            <label htmlFor="" className='form-label'>Ingredients</label><br />
                                            <input type="text" className='form-control' name='name' value={element.name || ""} onChange={e => handleChange(index, e)}/>
                                            <small>Example: Flour</small>
                                        </div>
                                        <div className='col'>
                                            <label htmlFor="" className='form-label'>Quantity</label><br />
                                            <input type="text" className='form-control' name='quantity' value={element.quantity || ""} onChange={e => handleChange(index, e) }/>
                                            <small>Example: 1 Cup </small>
                                        </div>                                        
                                        {
                                                index?
                                                    
                                                    <div className='col-12 mt-1 d-flex justify-content-end'><button className='btn btn-danger btn-small' onClick={() => removeFormFields(index)} >Remove</button></div>:
                                                    <br/>
                                            }
                                    </div>
                                )
                            })}

                            <div className='col-12'>
                                <button type='button' className='btn btn-outline-primary' id="addIngr" onClick={() => addFormFields()}>+ Ingredient</button>
                            </div>
                            <button className='btn btn-info mb-5' onClick={(e)=>{handleSubmit(e)}}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='text-center'>
                <h4>Your Recipe Will Be Submitted to our Admins!</h4>
                <div className='px-4 py-5 my-5 text-center'>
                    <img className='d-block mx-auto mb-4 img-fluid' loading='lazy' src='https://i.ibb.co/m9pg5KF/Image-3-30-22-at-4-03-PM.jpg'></img>
                </div>
                
            </div>

        </div>
    )
}

export default RecipeForm