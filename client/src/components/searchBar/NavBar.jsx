import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { buscarPor, paginacion } from "../../redux";
import { SearchBar } from './SearchBar';

export const NavBar = () => {
    const dispatch = useDispatch(); 
    const [cerrar, setCerrar] = useState(true);
    const products = useSelector((store) => store.productos.productos);

    const abrirModal = () => {
        setCerrar(true);
    };

    const cerrarModal = () => {
        setCerrar(false);
      };

    const buscador = (b) => {
        dispatch(buscarPor(b, products));
    };

    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="row">
                <div className="col-8 ">
                    <button className="btn btn-outline-dark" name="ascendente" onClick={e => buscador(e.target.name)}>Precio Ascendente</button>
                    <button className="btn btn-outline-dark" name="descendente" onClick={e => buscador(e.target.name)}>Precio Descendente</button> 
                    <button className="btn btn-outline-dark" name="new" onClick={e => buscador(e.target.name)}>Condicion new</button>
                    <button className="btn btn-outline-dark" name="used" onClick={e => buscador(e.target.name)}>Condicion used</button>                   
                </div>
                <div className="col-3 d-flex flex-row-reverse">
                  <button className="btn btn-dark" onClick={abrirModal}>Search</button>
               </div>
            </div> 
        </nav>
       
        <SearchBar cerrarModal={cerrarModal} estado={cerrar} />

        </>
    )
}
