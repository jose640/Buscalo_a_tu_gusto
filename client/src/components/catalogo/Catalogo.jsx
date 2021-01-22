import React, { useState } from 'react';
import { useSelector } from "react-redux"
import { ProductCard } from "../../components"


export const Catalogo = () => {
    const products = useSelector((store) => store.productos.productos);

    

    return (
        <div className="container"> 
        <div className="row">
          {products.map(product => (            
              <div className="col-md-4 " key={product.id}>
                  <ProductCard 
                  nombre={product.title}
                  imagen={product.thumbnail}
                  stock={product.available_quantity}
                  precio={product.price}
                  condicion={product.condition}
                  />
              </div>                
          ))}
        </div>       
        </div>
    )
}
