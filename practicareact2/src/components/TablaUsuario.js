import React, {useEffect} from "react";



const TablaUsuario = ({usuarios, deleteUser, setUsuarioEditado}) => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Correo</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
            {usuarios.map(usuario => (
              <tr>
              
              
              <td>
                {usuario.id}
              </td>
              <td>
                {usuario.name}
              </td>
              <td>
                {usuario.lastName}
              </td>
              <td>
                {usuario.correo}
              </td>
            
              
              <td>
              <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    deleteUser(usuario.id);
                  }}
                >
                 Eliminar
                </button>
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => {
                    setUsuarioEditado(usuario);
                  }}
                >
                 Editar
                </button>
                </td>
              </tr>
            ))}

        </tbody>
      </table>
    </div>
  );
};

export default TablaUsuario;