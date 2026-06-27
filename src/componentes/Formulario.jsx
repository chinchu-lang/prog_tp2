import useTarea from "../hook/useTarea";

export default function Formulario({ guardar }) {
    const [tarea, setDatoTarea] = useTarea();

    const hanlderSubmit = (e) => {
        e.preventDefault();

        const id = (new Date()).getTime();//agarra un segundo y sus milecimas para ponerle un id, alpedo esta esto aca

        guardar({ ...tarea, id });
    }//

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
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}