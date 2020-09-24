import React , {createContext,useContext,useReducer} from "react"


const DataLayerContext = createContext();

const DataLayer = function({initialState,reducer,children}) //we have destructured the props objct in bracket
{  
   return (
    <DataLayerContext.Provider value={useReducer(reducer,initialState)}>
    {children}
    </DataLayerContext.Provider>
   )
}

const useDataLayerValue=function(){

return useContext(DataLayerContext);

}


export {
DataLayerContext,
DataLayer,
useDataLayerValue,


}