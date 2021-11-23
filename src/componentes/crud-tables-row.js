import React from 'react';

export const CRUD_TABLES_ROW = ({list, deleteUser, setDataUpdate}) =>{
    return(
    <tr>
        <td>{list.nombre}</td>
        <td>{list.edad}</td>
        <td>
            <button onClick={() =>{
                setDataUpdate(list);
            }} >Editar</button>
            <button onClick={() =>{
                deleteUser(list);
            }}>Eliminar</button>
        </td>
    </tr>
    );
}