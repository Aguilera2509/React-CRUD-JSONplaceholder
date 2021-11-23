import React, { useState, useEffect } from 'react';

const DATA_FORM = {
    id: null,
    nombre: "",
    edad: ""
};

export const CRUD_FORM = ({ createUser, updateUser, dataUpdate}) =>{

    const [form, setForm] = useState(DATA_FORM);

    useEffect(()=>{
        if(dataUpdate){
            setForm(dataUpdate);
        }else{
            setForm(DATA_FORM);
        };
    },[dataUpdate]);


    const handlechange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }

    const handlesubmit = (e) =>{
        e.preventDefault();

        if(!form.nombre || !form.edad) return alert("Los datos solicitados están incompletos");

        if(form.id === null){
            createUser(form);
        }else{
            updateUser(form);
        };

        setForm(DATA_FORM);
    };

    return(

        <form onSubmit={handlesubmit}>
            <label htmlFor="name" >Name: </label>
            <input 
            type="text" 
            name="nombre" 
            id="name" 
            autoComplete="off" 
            value={form.nombre} 
            onChange={handlechange}/>
            <br />
            <label htmlFor="years" >Old Years: </label>
            <input 
            type="number" 
            name="edad" 
            id="years" 
            autoComplete="off" 
            value={form.edad} 
            onChange={handlechange} />
            <br />
            <input type="submit" />
        </form>

    );
};