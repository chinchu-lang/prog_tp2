import { useState, useEffect } from "react";
import axios from "axios";
import Tarjeta from "./Tarjeta";

export default function Tarea() {

    const [tareas, setTareas] = useState([]);
    const [categoria, setCategoria] = useState("");
    const [orden, setOrden] = useState("ASC");
    const actualizar = () => {

        const url = "https://api-tareas.ctpoba.edu.ar/api/tareas";

        const config = {
            headers: {
                Authorization: '48191403'
            },
            params: {
                categoria: categoria,
                orden: orden
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
    }, [categoria, orden]);

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
        1: "URGENTE",
        2: "importante",
        3: "leve"
    };

    return (
    <div className="ContenedorTareas">

        <div className="Filtros">

            <h1>Filtros</h1>

            <select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
            >
                <option value="">Todas las categorías</option>
                <option value="hogar">Hogar</option>
                <option value="escuela">Escuela</option>
                <option value="trabajo">Trabajo</option>
                <option value="particular">Particular</option>
            </select>

            <select
                value={orden}
                onChange={(e) => setOrden(e.target.value)}
            >
                <option value="ASC">Mayor prioridad</option>
                <option value="DESC">Menor prioridad</option>
            </select>

        </div>

        <div className="ListadoDeTareas">

            {tareas.map((tarea) => (
                <Tarjeta
                    key={tarea.id}
                    id={tarea.id}
                    titulo={tarea.nombre}
                    descripcion={tarea.descripcion}
                    categoria={tarea.categoria}
                    prioridad={prioridades[tarea.prioridad]}
                    estado={tarea.estado}
                    eliminar={() => eliminar(tarea.id)}
                    actualizar={actualizar}
                />
            ))}

        </div>

    </div>
);
}