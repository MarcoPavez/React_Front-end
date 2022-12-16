import React from "react";

const TablaAuto = () => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Marca</th>
            <th scope="col">Modelo</th>
            <th scope="col">AnioFabricacion</th>
            <th scope="col">Color</th>
            <th scope="col">Usado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <th scope="row">1</th>
            <td>Suzuki</td>
            <td>Swift</td>
            <td>2010</td>
            <td>Rojo</td>
            <td>No</td>
            <td> </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default TablaAuto;
