import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const AddContact = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[number, setNumber] = useState("");


    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

    const checkEmail = contacts.find(contact => contact.email === email && email) 
    const checkNumber = contacts.find(contact => contact.number === parseInt(number))

    if(!name || !email || !number) {
        return toast.warning('Please fill all the required details');
    }
        if(checkEmail) {
        return toast.error('Email is already exist');
    }
        if(checkNumber) {
        return toast.error('Number is already exist');

    }
        const data = {
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            number
        }   
       dispatch({type: "ADD_CONTACT", payload: data})
       toast.success("Student added Successfully");
       history.push("/");
    };

  return (
    <div className='container'>
        <h1 className='display-3 my-5 text-center'>Add Contact</h1>
    <div className='row'>
        <div className='col-md-6 shadow mx-auto p-5'>
            <form onSubmit = { handleSubmit }>
                <div className="mb-3 mt-3">
                    <input type="text" placeholder='Name' className='form-control' 
                    value={ name } onChange = { (e)=> setName(e.target.value)}
                    />
                </div>
                <div className="mb-3 mt-3">
                    <input type="email" placeholder='Email' className='form-control'
                    value={ email } onChange = { (e)=> setEmail (e.target.value)}/>
                </div>
                <div className="mb-3 mt-3">
                    <input type="number" placeholder='Phone' className='form-control' 
                    value={ number } onChange = { (e)=> setNumber(e.target.value)}/>
                </div>
                <div className="mb-3 mt-3">
                    <input type="submit" value='Add Student' className='btn btn-block btn-dark' />
                </div>
            </form>
        </div>
    </div>
    </div>  
  )
};

export default AddContact