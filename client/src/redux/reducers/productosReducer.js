import {
  BUSCAR_POR_DESCENDENTE,
  BUSCAR_POR_ASCENDENTE,
  OBTENER_PRODUCTOS,
  BUSCAR_POR_CONDICION_NEW,
  BUSCAR_POR_CONDICION_USED,
} from "../types";

const initialState = {
  productos: [],
  condicionnew: [],
  condicionused: [],
};

export function productosReducer(state = initialState, action) {
  switch (action.type) {
    case OBTENER_PRODUCTOS:
      return {
        ...state,
        productos: action.payload,
      };
    case BUSCAR_POR_ASCENDENTE:
      return {
        productos: state.productos.map((producto) => {
          if (producto.id === action.payload.id) {
            return { ...action.payload };
          } else {
            return producto;
          }
        }),
      };
    case BUSCAR_POR_DESCENDENTE:
      return {
        productos: state.productos.map((producto) => {
          if (producto.id === action.payload.id) {
            return { ...action.payload };
          } else {
            return producto;
          }
        }),
      };
    case BUSCAR_POR_CONDICION_NEW:
      return {
        ...state,
        condicionnew: action.payload,
      };
    case BUSCAR_POR_CONDICION_USED:
      return {
        productos: action.payload,
      };
    default:
      return state;
  }
}
