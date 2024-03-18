import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import places from './src/consts/places';

// Define types for your state

// Define action types

interface Place {
    id: string;
    name: string;
    location: string;
    details: string;
    image: any; // You can adjust the type according to your actual image type
  }
  interface PlaceProviderProps {
    children: ReactNode;
  }
  // Define the type for the state
  interface PlaceState {
    places: Place[];
  }
  
  // Define action types
  type Action =
    | { type: 'ADD_PLACE'; payload: Place }
    | { type: 'REMOVE_PLACE'; payload: string }; // Payload is the id of the place to remove
  
  // Define initial state
  const initialState: PlaceState = {
    places: places, // Initially empty
  };
// Define reducer function
const reducer = (state: PlaceState, action: Action): PlaceState => {
    switch (action.type) {
      case 'ADD_PLACE':
        return {
          ...state,
          places: [...state.places, action.payload],
        };
      case 'REMOVE_PLACE':
        return {
          ...state,
          places: state.places.filter(place => place.id !== action.payload),
        };
      default:
        return state;
    }
  };

// Create context
const PlaceContext = createContext<{
    state: PlaceState;
    dispatch: React.Dispatch<Action>;
  }>({ state: initialState, dispatch: () => null });
  
  // Create provider component
  export const PlaceProvider: React.FC<PlaceProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <PlaceContext.Provider value={{ state, dispatch }}>
      {children}
    </PlaceContext.Provider>
  );
};
export const usePlaceStore = () => useContext(PlaceContext);
