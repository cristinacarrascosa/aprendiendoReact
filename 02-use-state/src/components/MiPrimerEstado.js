import React, {useState} from 'react';

export default function MiPrimerEstado() {
let nombre = 'Cristina';

const cambiarNombre = e => {
    nombre ='Paquito el chocolatero';
}

  return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong>
            {nombre}
        </strong>
        &nbsp;
        <button onClick={cambiarNombre}>Cambiar</button>
    </div>
  )
}
