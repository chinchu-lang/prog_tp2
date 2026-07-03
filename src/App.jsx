import { useEffect, useState } from "react";
import axios from "axios";
import { Router, Route, Switch } from 'wouter';
import Header from "./componentes/Header";
import Tarea from "./componentes/Tarea";
import Formulario from "./componentes/Formulario";
import Footer from "./componentes/Footer";
import "./App.css";


export default function App() {

    return (
        <div className="App">

            <Header />

            <Router>
                <Switch>

                    <Route path="/nueva">
                        <h1>Formulairo</h1>
                        <Formulario />
                    </Route>

                    <Route path="/listado">
                        <h1>Listado de Tareas</h1>
                        <Tarea />
                    </Route>

                    <Route path="/">
                        <div className="Inicio">
                            <h1>Bienvenido</h1>

                            <p>
                                Bienvenido a tu gestor de tareas. Desde esta aplicación podrás crear,
                                organizar y administrar tus tareas de forma sencilla.
                            </p>

                            <p>
                                Utilizá el menú superior para crear una nueva tarea o consultar el
                                listado de tareas existentes.
                            </p>
                        </div>
                    </Route>

                    <Route>
                        <div className="Error404">
                            <h1>404</h1>

                            <h2>Página no encontrada</h2>

                            <p>
                                Lo sentimos, la página que intentás visitar no existe o fue movida.
                            </p>

                            <p>
                                Utilizá el menú superior para volver al inicio o navegar hacia otra sección.
                            </p>
                        </div>
                    </Route>

                </Switch>
            </Router>
            <Footer />
        </div>
    );
}