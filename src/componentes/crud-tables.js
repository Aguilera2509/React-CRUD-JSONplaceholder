import React from 'react';
import { CRUD_TABLES_ROW } from './crud-tables-row';

export const CRUD_TABLES = ({list, deleteUser, setDataUpdate}) =>{
    return(
        <>
    <legend>Tabla de Datos</legend>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Old Years</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {list.length === 0 ? <tr><td colSpan="3">Sin Datos. Active la db</td></tr> : list.map(el => <CRUD_TABLES_ROW key={el.id} list={el} deleteUser={deleteUser} setDataUpdate={setDataUpdate} />)}
            </tbody>
      </table> 
      </>
    );
};