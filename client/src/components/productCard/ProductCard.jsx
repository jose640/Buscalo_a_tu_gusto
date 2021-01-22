import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "./ProductCard.css"

export const ProductCard = ({nombre, imagen, stock, precio, condicion}) => {
    return (
    
            <div className="container mb-5 mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-10">
                    <div className="card mt-3">
                        <div className="pruduct-1 align-items-center p-2 text-center">
                            <img className="rounded" src={imagen} alt="" width="160"/>
                            <h5>{nombre}</h5>
                            <div className="mt-3 info">
                                <span className="text2">Condicion</span>
                                <span className="text1 d-block">{condicion}</span>
                                <span className="text2">Stock</span>
                                <span className="text1"> {stock}</span>
                            </div>
                            <div className="cost mt-3 text-dark">
                            <span className="text2">Precio $</span>
                                <span>{precio}</span>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    )
}
