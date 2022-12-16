import React from "react";

const Boton = ({infoBoton,handleOnClick}) =>{
    return(
        <div>
            <button 
            type="button" 
            class="btn btn-warning" 
            onClick={()=>{handleOnClick();}}> 
            {infoBoton}
            </button>
        </div>
    )
}

export default Boton;