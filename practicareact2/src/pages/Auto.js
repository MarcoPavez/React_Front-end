import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {Boton,FormAuto,TablaAuto} from "../components"



const AutoPage = () =>{
    const navigate  = useNavigate();
    const handleOnClick = useCallback(() => navigate("/", {}, [navigate]));

   

    return(
        <div>
            <FormAuto/>
            <Boton infoBoton={"Ir a Usuario"} handleOnClick={handleOnClick}/>
            
    

            <TablaAuto/>
        </div>
    )
}

export default AutoPage;