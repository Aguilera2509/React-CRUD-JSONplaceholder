import React, { useEffect, useState } from 'react';
import { CRUD_FORM } from './crud-form';
import { CRUD_TABLES } from './crud-tables';
import { CREATE, DELETE, UPDATE } from './helpers/fetchs';

export const CRUD_APP = () =>{

    const [list, setList] = useState([]);
    const [dataUpdate, setDataUpdate] = useState(null); 

    //The DB is activated with the command "npm run api-fake"
    //Y React is activated with the command "npm start"
    //READ DATA! 
    useEffect(()=>{
        fetch("http://localhost:5000/amigos")
        .then(res =>{
            return res.json();
        })
        .then(json =>{
            //console.log(json);
            setList(json);
        })
        .catch(err =>{
            console.log(err);
        });
    },[setList]);

    const createUser = (data) =>{
        CREATE(data);
        
        setList([...list,data]);
    };

    const updateUser = (data) =>{
        UPDATE(data);

        let newData = list.map(el => el.id === data.id ? data : el);
        setList(newData);
    };

    const deleteUser = (data) =>{
        let isDelete = window.confirm(`¿Seguro que quieres eliminar a ${data.nombre}?`);

        if(isDelete){
            DELETE(data);
            
            let filtro = list.filter(el => el.id !== data.id);
            setList(filtro);
        }else{
            alert("Perfecto, nos ha eliminado al Usuario");
        }
    };

    return(
        <>
            <CRUD_FORM 
            createUser={createUser} 
            updateUser={updateUser} 
            dataUpdate={dataUpdate} />
            <br />
            <CRUD_TABLES 
            list={list} 
            deleteUser={deleteUser} 
            setDataUpdate={setDataUpdate} />
            <br />
            <br />
        </>
    );
};