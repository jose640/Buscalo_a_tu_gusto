import axios from "axios";
import {
  OBTENER_PRODUCTOS,
  BUSCAR_POR_ASCENDENTE,
  BUSCAR_POR_DESCENDENTE,
  BUSCAR_POR_CONDICION_NEW,
  BUSCAR_POR_CONDICION_USED,
} from "../types";

export const obtenerProductos = (nomProduct) => async (dispatch) => {
  try {
    const result = await axios.get(
      `http://localhost:5000/api/search?product=${nomProduct}`
    );
    dispatch({
      type: OBTENER_PRODUCTOS,
      payload: result.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const buscarPor = (filtro, products) => async (dispatch) => {
  console.log(filtro);
  switch (filtro) {
    case "ascendente":
      const ascend = products.sort((a1, a2) => a1.price - a2.price);
      dispatch({
        type: BUSCAR_POR_ASCENDENTE,
        payload: ascend,
      });
      break;
    case "descendente":
      const descend = products.sort((a1, a2) => a2.price - a1.price);
      dispatch({
        type: BUSCAR_POR_DESCENDENTE,
        payload: descend,
      });
      break;
    case "new":
      const condnew = products.filter(pro => {
        if(pro.condition !== "used") {
          return pro;
        }
      });
      console.log(condnew);
      dispatch({
        type:BUSCAR_POR_CONDICION_NEW,
        payload: condnew,
      });
      break;
    case "used":
      const condused = products.filter(pro => {
        if(pro.condition !== "new"){
          return pro;
        }
      });
      console.log(condused);
      dispatch({
        type:BUSCAR_POR_CONDICION_USED,
        payload: condused,
      });
      break;
    default:
      try {
        throw new Error("El estado no coincide");
      } catch (error) {
        console.log(error);
      }
      break;
  }
};
