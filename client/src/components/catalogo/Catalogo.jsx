import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux"
import { ProductCard } from "../../components"


export const Catalogo = () => {
    const products = useSelector((store) => store.productos.productos);
  /*   const condnew = useSelector((store) => store.productos.condicionnew);
    const condused = useSelector((store) => store.productos.condicionused); */

    const [ paginacion, setPaginacion ] = useState(null);
 
    let pagNum = 1;
    const pageCont = Math.ceil(products.length/30);
     
    const paginate = (array, tamanoPag, pagNum) => {
        return array.slice( (pagNum - 1) * tamanoPag,  pagNum * tamanoPag);
    }

    const showProducts = (products) => {
        setPaginacion(paginate(products, 30, pagNum));
    }

    const nextpage = () => {
         pagNum ++;
         showProducts(products);         
    }

    const previuspage = () => {
        if(pagNum > 1) {
            pagNum --;
            showProducts(products);
        }else {
            pagNum = 1;
            showProducts(products);
        }
    }

    useEffect(() => {
       showProducts(products);
    },[products]);


    return (
        <div className="container"> 
        <br />
        <div className="row">
        
        <div className="col-md-12 d-flex justify-content-center">
              <nav className="col-12 d-flex justify-content-center" aria-label="Page navigation example">
              <ul className="col-8 d-flex justify-content-center pagination">
                <li className="active"><button className="btn btn-outline-info" onClick={previuspage}>&laquo;</button></li>
                <li><button className="btn btn-outline-info" onClick={nextpage}>&raquo;</button></li>
              </ul>
            </nav>
              </div>
          {paginacion ? paginacion.map(product => (            
              <div className="col-md-4 " key={product.id}>
                  <ProductCard 
                  nombre={product.title}
                  imagen={product.thumbnail}
                  stock={product.available_quantity}
                  precio={product.price}
                  condicion={product.condition}
                  />
              </div>                
          )): null}
        </div>       
        </div>
    )
}
