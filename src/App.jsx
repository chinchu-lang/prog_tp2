import { useEffect, useState } from "react";
import axios from "axios";
import { Router, Route, Switch } from 'wouter'
import Header from "./componentes/Header";
import Tarea from "./componentes/Tarea"
import Formulario from "./componentes/Formulario"
import "./App.css"


export default function App() {

    return (
        <div className="App">

            <Header />

            <Router>
                <Switch>

                    <Route path="/nueva">
                        <Formulario />
                    </Route>

                    <Route path="/listado">
                         <Tarea />
                    </Route>

                    <Route path="/">
                        <h1>Inicio</h1>
                    </Route>

                    <Route>
                        <h1>Pagina no encontrada</h1>
                    </Route>

                </Switch>
            </Router>

        </div>
    );
}