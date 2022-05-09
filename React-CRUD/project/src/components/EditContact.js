import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditContact = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[number, setNumber] = useState("");
    const { id } = useParams();

    const contacts = useSelector(state => state);
    const dispatch = useDispatch(); 
    const history = useHistory();
    const currentContact = contacts.find(contact => contact.id === parseInt(id));

    useEffect(() => {
        if(currentContact) {
            setName(currentContact.name)
            setEmail(currentContact.email)
            setNumber(currentContact.number)
        }
    }, [currentContact]);

    const handleSubmit = (e) => {
        e.preventDefault();

    const checkEmail = contacts.find((contact) => contact.id !== parseInt(id) && contact.email === email) 
    const checkNumber = contacts.find((contact) => contact.id !== parseInt(id) && contact.number === parseInt(number));

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
            id: parseInt(id),
            name,
            email,
            number
        }   
       dispatch({type: "UPDATE_CONTACT", payload: data})
       toast.success("Student Updated Successfully");
       history.push("/");
    };

  return (
    <div className='container'>
        {currentContact ? (
            <>
        <h1 className='display-3 my-5 text-center'>Edit Contact {id} </h1>
    <div className='row'>
        <div className='col-md-6 shadow mx-auto p-5'>
            <form onSubmit = { handleSubmit }>
                <div class="mb-3 mt-3">
                    <input type="text" placeholder='Home' className='form-control' 
                    value={ name } onChange = { (e)=> setName(e.target.value)}
                    />
                </div>
                <div class="mb-3 mt-3">
                    <input type="email" placeholder='Email' className='form-control'
                    value={ email } onChange = { (e)=> setEmail(e.target.value)} />
                </div>
                <div class="mb-3 mt-3">
                    <input type="number" placeholder='Phone' className='form-control'
                    value={ number } onChange = { (e)=> setNumber(e.target.value)}  />
                </div>
                <div class="mb-3 mt-3">
                    <input type="submit" value='Update Student' className='btn  btn-dark' />
                    <Link to="/" className='btn btn-danger'>Cancel</Link>
                </div>
            </form>
        </div>
    </div>
    </>
    ) : (
        <h1 className='display-3 my-5 text-center'>Student Contact with Id {id} is not exist </h1>
    )};
    </div>  
  );
}

export default EditContact