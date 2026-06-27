import { useState } from "react"
import ListadoDeTareas from "./componentes/Tarea"
import Formulario from "./componentes/Formulario"
import "./App.css"

const tareasDefault = [
    { id: 1, titulo: "resolver tarea de prog", categoria: "escuela", prioridad: "urgente", descripcion: "entregar en tiempo y forma la tarea que pide el profe" },
    { id: 2, titulo: "resolver tarea de prog", categoria: "hogar", prioridad: "urgente", descripcion: "entregar en tiempo y forma la tarea que pide el profe" },
    { id: 3, titulo: "resolver tarea de prog", categoria: "trabajo", prioridad: "urgente", descripcion: "entregar en tiempo y forma la tarea que pide el profe" },
    { id: 4, titulo: "resolver tarea de prog", categoria: "particular", prioridad: "urgente", descripcion: "entregar en tiempo y forma la tarea que pide el profe" },
];

export default function App() {
    const [tareas, setTareas] = useState(tareasDefault);
    const [nextId, setNextId] = useState(5);

    const guardar = (tarea) => {
        setTareas([...tareas, { ...tarea, id: nextId }]);
        setNextId(nextId + 1);
    }

    const eliminar = (tarea_id) => {
        const nuevasTareas = tareas.filter((tarea) => tarea.id != tarea_id);
        setTareas(nuevasTareas);
    }

    const [filtro, setFiltro] = useState("todas");
    const tareasFiltradas = filtro === "todas" ? tareas : tareas.filter((t) => t.categoria === filtro);

    return (
        <div className="App">
            <h1>Listado De Tareas</h1>
            <div className="Contenedor">
                <Formulario
                    guardar={(tarea) => guardar(tarea)}
                />
                <div className="Filtros">
                    <h2 className="Filtros__titulo">Filtros</h2>
                    <div className="Filtros__grupo">
                        <label className="Filtros__label" htmlFor="filtro-categoria">Categoría</label>
                        <div className="Filtros__selectWrapper">
                            <select
                                id="filtro-categoria"
                                className="Filtros__select"
                                onChange={(e) => setFiltro(e.target.value)}
                                value={filtro}
                            >
                                <option value="todas">Todas</option>
                                <option value="hogar">Hogar</option>
                                <option value="escuela">Escuela</option>
                                <option value="trabajo">Trabajo</option>
                                <option value="particular">Particular</option>
                            </select>
                            <span className="Filtros__arrow">▾</span>
                        </div>
                    </div>
                </div>
                <ListadoDeTareas
                    tareas={tareasFiltradas}
                    eliminar={(id) => eliminar(id)}
                />
            </div>
        </div>
    )
}