import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { obtenerProductos } from "../../redux";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Modal, ModalBody, ModalHeader, FormGroup } from "reactstrap";

import "./SearchBar.css";
import { Link } from 'react-router-dom';


export const SearchBar = ({cerrarModal, estado}) => {
   const dispatch = useDispatch(); 
   const [ product, setProduct ] = useState("");

   const enviar = () => {
    if(product.length > 2) {
      dispatch(obtenerProductos(product));
        cerrarModal();
    }else {
      return;
    }
  };


    return (
        <>
            <Modal isOpen={estado} >
            <ModalHeader className="cabecera"> 
            ¿Que producto buscas?
            </ModalHeader> 
            <ModalBody className="cuerpo">
                <FormGroup>
                    <br />

                    <input 
                    type="search"
                    autoComplete="off"
                    placeholder="Ingrese nombre del producto"
                    className="form-control my-2 search"
                    name="product"
                    onChange={e => setProduct(e.target.value)}
                     /> 
                     <br />
                       <div className="d-flex flex-row-reverse">
                       <Link className="btn btn-primary" to="/catalogo" onClick={enviar}>Buscar</Link>
                       </div>
                    
                </FormGroup>
            </ModalBody>   
        </Modal>   
       
        </>
    )
};
