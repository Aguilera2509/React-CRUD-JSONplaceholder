//Add data on the table
export const CREATE = (data) =>{
    fetch("http://localhost:5000/amigos", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(() =>{
        //NOTHING
    })
    .catch(err =>{
        console.log(err);
    });
}

//Update data on the table
export const UPDATE = (data) =>{
    fetch(`http://localhost:5000/amigos/${data.id}`,{
        method:"PUT",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(()=>{
        //NOTHING
    })
    .catch(err =>{
        console.log(err);
    });
}

//delete data on the table
export const DELETE = (data) =>{
    fetch(`http://localhost:5000/amigos/${data.id}`,{
        method:"DELETE"
    })
    .then(() =>{
        //NOTHING
    })
    .catch(err =>{
        console.log(err);
    });
}