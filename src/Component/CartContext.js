// CartContext.js
import { createContext, useContext, useReducer } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const cartReducer = (state, action) => {

  /// swith case 

  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];

    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload);

    case 'CLEAR_CART':
        return [];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartStateContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

export const useCartState = () => {
  const context = useContext(CartStateContext);
  if (!context) {
    throw new Error('useCartState must be used within a CartProvider');
  }
  return context;
};

export const useCartDispatch = () => {
  const context = useContext(CartDispatchContext);
  if (!context) {
    throw new Error('useCartDispatch must be used within a CartProvider');
  }
  return context;
};
