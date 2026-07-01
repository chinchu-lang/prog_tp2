import axios from "axios";

const ESTADOS = [
    "pendiente",
    "en curso",
    "completada"
];

export default function Tarjeta({
    id,
    titulo,
    categoria,
    prioridad,
    descripcion,
    estado,
    eliminar,
    actualizar
}) {

    const avanzarEstado = () => {

        const estadoActual = ESTADOS.indexOf(estado);

        if (estadoActual === ESTADOS.length - 1) {
            return;
        }

        const nuevoEstado = ESTADOS[estadoActual + 1];

        const url = `https://api-tareas.ctpoba.edu.ar/api/tareas/estado/${id}`;

        const config = {
            headers: {
                Authorization: "48191403"
            }
        };
        console.log({
            id,
            estadoActual: estado,
            nuevoEstado
        });
        axios.put(
            url,
            {
                estado: nuevoEstado
            },
            config
        )
            .then(() => {
                actualizar();
            })
            .catch((error) => {
                console.error(error.response?.data);
                alert("Error al actualizar el estado");
            });

    };

    return (
        <div className={`Tarjeta ${prioridad} estado-${ESTADOS.indexOf(estado)}`}>

            <span
                className="Eliminar"
                onClick={eliminar}
            >
                X
            </span>

            <h1>{prioridad}</h1>

            <h2>{titulo}</h2>

            <h2>{categoria}</h2>

            <h3>{descripcion}</h3>

            <button
                className="BtnEstado"
                onClick={avanzarEstado}
            >
                {estado}
            </button>

        </div>
    );

}