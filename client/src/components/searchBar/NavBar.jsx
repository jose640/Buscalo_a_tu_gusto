import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { buscarPor } from "../../redux";
import { SearchBar } from './SearchBar';

export const NavBar = () => {
    const dispatch = useDispatch(); 
    const [cerrar, setCerrar] = useState(true);
    const products = useSelector((store) => store.productos.productos);

    const abrirModal = () => {
        setCerrar(true);
    }


    const cerrarModal = () => {
        setCerrar(false);
      };

    const buscador = (b) => {
        dispatch(buscarPor(b, products));
    }
   
    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="row">
                <div className="col-8 ">
                    <button className="btn btn-outline-dark" name="ascendente" onClick={e => buscador(e.target.name)}>Precio Ascendente</button>
                    <button className="btn btn-outline-dark" name="descendente" onClick={e => buscador(e.target.name)}>Precio Descendente</button> 
                    <button className="btn btn-outline-dark" name="condicion" onClick={e => buscador(e.target.name)}>Condicion</button>                   
                </div>
                <div className="col-3 d-flex flex-row-reverse">
                  <button className="btn btn-dark" onClick={abrirModal}>Search</button>
               </div>
            </div> 
        </nav>
        <br />
        {products ? 
              <div className="col-md-12 d-flex justify-content-center">
              <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="active"><button className="btn btn-outline-info">&laquo;</button></li>
                <li><button className="btn btn-outline-info">1</button></li>
                <li><button className="btn btn-outline-info">2</button></li>
                <li><button className="btn btn-outline-info">&raquo;</button></li>
              </ul>
            </nav>
              </div>
              : null }
       
        <SearchBar cerrarModal={cerrarModal} estado={cerrar} />

        </>
    )
}
