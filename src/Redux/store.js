import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import thunk from "redux-thunk";
import { addcityreducer } from "./AddCity/reducer";
import { addcountryReducer } from "./Addcountry/Reducer";



const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

    const middleware = [thunk];

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

const rootreducer = combineReducers({
    addCity: addcityreducer,
    addcountry: addcountryReducer
});

export const store = createStore(rootreducer, enhancer);