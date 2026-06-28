import { Link } from "wouter";

export default function Header(){
    return(
        <div className="wouter">
            <Link className="opcion" href="/"><h1>Inicio</h1></Link>
            <Link className="opcion" href="/nueva"><h1>nueva</h1></Link>
            <Link className="opcion" href="/Listado"><h1>Listado</h1></Link>
        </div>
    )
}