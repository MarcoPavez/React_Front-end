import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Boton, FormUsuario, TablaUsuario } from "../components"

import { getAllUsers, addUser, editUser, deleteUser } from "../services/User";

const usuario = [
    {
        id:"9.000.100-1",
        name: "Joseph",
        lastName: "Joestar",
        correo: "jojo1@gmail.com"
       
    },

    {
        id:"15.000.100-1",
        name: "Jotaro",
        lastName: "Joestar",
        correo: "jojo2@gmail.com"
    
    },
    {
        id:"20.000.100-1",
        name: "Jolyne",
        lastName: "Kujoh",
        correo: "jojo3@gmail.com"
     
    }
]




const HomePage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate("/Auto", {}, [navigate]));

    //En este momento state vale lo mismo que usuario1
    //por dentro, setState genera una funcion setteadora que me va a permitir cambiar los datos de usuario 1 sin afectarlo directamente
    const [user, setUser] = useState(usuario);
    const [usuarioEditado,setUsuarioEditado] = useState(null);

    useEffect(() => {
        getUsers();
    },[])

    const getUsers = async() => {
        const usuariosBD = await getAllUsers();
        setUser(usuariosBD);
    }

    const userAdd = async(usuarioAgregado) => {
        //en esta linea agregamos usuario a bbdd
        const usuarioBD = await addUser(usuarioAgregado);
        //aqui haremos que la tabla se actualice
        getUsers();
    }

    const userEdit = async(usuarioEditado) => {
        const usuarioBD = await editUser(usuarioEditado);
        getUsers();
    }

    const userDelete = async(idUsuario) => {
        const usuarioBD = await deleteUser(idUsuario);
        getUsers();
    }
    /* Añadir usuarios de manera "local" */
    /* const userAdd = (usuario) => {
        const addUsuario = [
            //mantiene los datos que tengo en user y agrega lo que le entrego
            ...user, usuario
        ];
        setUser(addUsuario);
    } */

    /* const userEdit = (usuarioEditado) => {
        const editUser = user.map(usuario => (usuario.id === usuarioEditado.id ? usuarioEditado  :  usuario))
    
        setUser(editUser);
    }
 */

    /* //Usuario filtrado segun el rut
    const userDelete = (rutUsuario) => {
        const changeUser = user.filter((usuario) => usuario.id !== rutUsuario);
        //al momento de ocupar setState, le cambio el valor temporal a mis usuarios
        setUser(changeUser);
    } */


    return (
        <div>
            <FormUsuario userAdd={userAdd} usuarioEditado={usuarioEditado} setUsuarioEditado={setUsuarioEditado} userEdit={userEdit}/>
            <Boton infoBoton={'Ir a autos'} handleOnClick={handleOnClick} />
            <TablaUsuario usuarios={user} deleteUser={userDelete} setUsuarioEditado={setUsuarioEditado}/>

        </div>
    )
}

export default HomePage;