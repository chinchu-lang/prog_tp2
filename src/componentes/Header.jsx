import { Link } from "wouter";

export default function Header(){
    return(
        <div className="wouter">
            <Link className="opcion" href="/"><h1>Inicio</h1></Link>
            <Link className="opcion" href="/nueva"><h1>Crea nueva Tarea</h1></Link>
            <Link className="opcion" href="/listado"><h1>Listado de Tareas</h1></Link>
        </div>
    )
}