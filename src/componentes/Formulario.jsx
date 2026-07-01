import axios from "axios";
import useTarea from "../hook/useTarea";

export default function Formulario() {

    const [tarea, setDatoTarea] = useTarea();

    const hanlderSubmit = (e) => {
        e.preventDefault();

        const url = "https://api-tareas.ctpoba.edu.ar/api/tareas";

        const config = {
            headers: {
                Authorization: "48191403"
            }
        };

        const prioridades = {
            urgente: 1,
            importante: 2,
            leve: 3
        };

        const nuevaTarea = {
            nombre: tarea.titulo,
            descripcion: tarea.descripcion,
            categoria: tarea.categoria,
            prioridad: prioridades[tarea.prioridad],
            estado: "pendiente"
        };

        axios.post(url, nuevaTarea, config)
            .then((resp) => {
                console.log(resp.data);
                alert("Tarea guardada");
            })
            .catch((error) => {
                console.error(error);
                alert("Error al guardar");
            });
    };

    return (
        <div className="Formulario">
            <h1>Componente Formulario</h1>

            <form onSubmit={hanlderSubmit}>

                <input
                    type="text"
                    placeholder="Titulo"
                    onChange={(e) => setDatoTarea("titulo", e.target.value)}
                    value={tarea.titulo}
                />

                <input
                    type="text"
                    placeholder="Descripcion"
                    onChange={(e) => setDatoTarea("descripcion", e.target.value)}
                    value={tarea.descripcion}
                />

                <select
                    onChange={(e) => setDatoTarea("categoria", e.target.value)}
                    value={tarea.categoria}
                >
                    <option value="-1" disabled>Seleccionar una categoria</option>
                    <option value="hogar">Hogar</option>
                    <option value="escuela">Escuela</option>
                    <option value="trabajo">Trabajo</option>
                    <option value="particular">Particular</option>
                </select>

                <select
                    onChange={(e) => setDatoTarea("prioridad", e.target.value)}
                    value={tarea.prioridad}
                >
                    <option value="-1" disabled>Seleccionar una prioridad</option>
                    <option value="leve">Leve</option>
                    <option value="importante">Importante</option>
                    <option value="urgente">Urgente</option>
                </select>

                <button type="submit">
                    Guardar
                </button>

            </form>
        </div>
    );
}