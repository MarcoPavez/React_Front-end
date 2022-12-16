import React from "react";
import Boton from "./Boton";


const FormAuto = () => {

    return (
        <div>
            
            <form>
            
                <h1>Formulario de registro de auto</h1>
                <div class="row">

                <div class="mb-3 container col-sm ms-5">
                    <label for="inputMarca" class="form-label">Marca del auto</label>
                    <input type="marca" class="form-control" id="marcaEjemplo"></input>
                </div>

                <div class="mb-3 container col-sm ms-5">
                    <label for="inputModelo" class="form-label">Modelo del auto</label>
                    <input type="modelo" class="form-control" id="modeloEjemplo"></input>
                </div>

                <div class="mb-3 container col-sm ms-5">
                    <label for="inputAnio" class="form-label">Año de fabricación</label>
                    <input type="anio" class="form-control" id="anioEjemplo"></input>
                </div>

                <div class="mb-3 container col-sm ms-5">
                    <label for="inputColor" class="form-label">Color del auto</label>
                    <input type="colorr" class="form-control" id="colorEjemplo"></input>
                    
                </div>

                <div class="mb-3 container col-sm ms-5">
                    <label for="inputKilometraje" class="form-label">Kilometraje</label>
                    <input type="kilometraje" class="form-control" id="kilometrajeEjemplo"></input>
                </div>

                <div class="mb-3 container col-sm ms-5">
                    <label for="inputUsado" class="form-label">Usado</label>
                    <input type="usado" class="form-control" id="usadoEjemplo"></input>
                </div>
                <Boton infoBoton={'Agregar auto'}/>
                </div>
            </form>
        </div>
    );
};

export default FormAuto;
