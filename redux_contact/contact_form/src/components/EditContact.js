import React, { useDebugValue, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';


const EditContact = () => {
    const [name, setName ] = useState();
    const [email, setEmail ] = useState();
    const [number, setNumber ] = useState();

    const { id } = useParams();

    const contacts = useSelector(state=>state);
    const dispatch = useDispatch();
    const history = useNavigate();
    const currentContact = contacts.find(contact => contact.id === parseInt(id));

    useEffect(() => {
        if(currentContact){
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.number);
        }
    }, [currentContact]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find(
            (contact) => contact.id !== parseInt(id) &&
             contact.email === email);
             
        const checkNumber = contacts.find(
            (contact) => 
            contact.id !== parseInt(id) && contact.number === parseInt(number));


        if(!email || !number || !name) {
            return toast.warning("Please fill in all fields");
        }

        if(checkEmail) {
            return toast.error("This email is already exists");
        }
        if(checkNumber) {
            return toast.error("This number is already exists");
        }
        const data = {
            id: parseInt(id),
            name,
            email,
            number,
        }
        dispatch({ type: "UPDATE_CONTACT", payload: data}); 
        toast.success("Student Details added successfully!");
        history.push("/");
    }

    return (
        <div>
            <div className='container'>
                {
                    currentContact? (
                        <>  
                <div className='row'>
            <div className='col-md-6 shadow mx-auto p-5'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input type="text" placeholder='Name' className='form-control'
                        value= {name} onChange = { e => setName(e.target.value) } />
                    </div>
                    <div className='form-group'>
                        <input type="email" placeholder='E-mail' className='form-control' 
                        value= {email} onChange = { e => setEmail(e.target.value) }/>
                    </div>
                    <div className='form-group'>
                        <input type="number" placeholder='Number' className='form-control' 
                         value= {number} onChange = { e => setNumber(e.target.value) }
                         />
                    </div>
                    <div className='form-group'>
                        <input type="submit" value= "Update Student" className='btn btn-dark' 
                       />
                        <Link to="/" className='btn btn-danger ml-3'>Cancel</Link>
                    </div>         
                </form>
            </div>
            </div>
            </>
            ):(
                <h1 className='display-3 my-5 text-center'>Student Contact Id {id} is not exist</h1>
            )};
        </div>
        </div>
    ) };

export default EditContact;