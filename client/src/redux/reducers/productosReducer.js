import { BUSCAR_POR_DESCENDENTE, BUSCAR_POR_ASCENDENTE, OBTENER_PRODUCTOS } from "../types";

const initialState = {
  productos: [],
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
        ...state,
        productos: action.payload,
      };
    case BUSCAR_POR_DESCENDENTE:
        return {
          ...state,
          productos: action.payload,
        };
    default:
      return state;
  }
}
