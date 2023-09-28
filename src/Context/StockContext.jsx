import React from 'react'
import { createContext, useState } from 'react'
import { useContext } from 'react';

export const StockContext = createContext({
    order:[]
})


export const StockProvider = ({children}) =>{
    const [stock, setStock] = useState(10)
    const [sinStock, setSinStock] = useState(false)

    const restaStock = ()=>{
        setSinStock(false)
        if(stock - 1 >= 1 && stock -1 <= 25){
            setStock(stock-1)
            console.log('stock en restaStock')
            console.log(stock)
       }else{
           setSinStock(true)
        }
    }

    const sumaStock = ()=>{ 
        console.log('suma stock sinStock')
        console.log(sinStock)
        if(stock + 1 <= 25 && stock +1 >=1 ){
            setSinStock(false)
            console.log('stock en sumaStock adentro del if')
            console.log(sinStock)
            console.log(stock)
            setStock(stock+1)
       }else{
            console.log('stock en sumaStock adentro del else')
            console.log(sinStock)
            setSinStock(true)
        }
    }

    
    return(
        <StockContext.Provider value={{stock, setStock, restaStock, sumaStock, setSinStock}}>
            {children}
        </StockContext.Provider>
    )
}

