import { useState, useEffect } from "react";
import axios from "axios";
import Tarjeta from "./Tarjeta";

export default function Tarea() {

    const [tareas, setTareas] = useState([]);

    const actualizar = () => {

        const url = "https://api-tareas.ctpoba.edu.ar/api/tareas";

        const config = {
            headers: {
                Authorization: '48191403'
            }
        };

        axios.get(url, config)
            .then((resp) => {
                console.log(resp.data);
                setTareas(resp.data.tareas);
            })
            .catch((error) => {
                console.error(error);
            });

    };

    useEffect(() => {
        actualizar();
    }, []);

    const eliminar = (tarea_id) => {

        const url = `https://api-tareas.ctpoba.edu.ar/api/tareas/${tarea_id}`;

        const config = {
            headers: {
                Authorization: '48191403'
            }
        };

        axios.delete(url, config)
            .then(() => {
                alert("Tarea eliminada");
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                actualizar();
            });

    };

    const prioridades = {
        1: "urgente",
        2: "importante",
        3: "leve"
    };

    return (
        <div style={{ flex: 3 }}>
            <div className="ListadoDeTareas">

                {tareas && tareas.map((tarea) => (

                    <Tarjeta
                        key={tarea.id}
                        titulo={tarea.nombre}
                        descripcion={tarea.descripcion}
                        categoria={tarea.categoria}
                        prioridad={prioridades[tarea.prioridad]}
                        estado={tarea.estado}
                        eliminar={() => eliminar(tarea.id)}
                    />

                ))}

            </div>
        </div>
    );
}