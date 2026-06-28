import { useState } from "react"
import { Router, Route, Switch } from 'wouter'
import Axios from "axios"
import Header from "./componentes/Header";
import ListadoDeTareas from "./componentes/Tarea"
import Formulario from "./componentes/Formulario"
import "./App.css"


export default function App() {
    

    return (
        <div className="App">
            <Header />
            <h1>Listado De Tareas</h1>
            <div className="Contenedor"></div>
            <Router>
                <Switch>
                    <Route path="/nueva">
                        <Formulario />
                    </Route>
                    <Route path="/listado">
                        <ListadoDeTareas/>
                        <h1>listado</h1>
                    </Route>
                    <Route path="/">
                        <h1>Componente APP</h1>
                    </Route>
                    <Route>
                        <h1>Pagina no encontrada</h1>
                    </Route>
                </Switch>
            </Router>


        </div>

    )
}