import React, { useState, useEffect, createContext } from "react";

export const GOTContext = createContext({});

export const GOTProvider = ({children}) => {
    const [character, setCharacter] = useState([]);
    const [page, setPage] = useState(1)

    
    useEffect(() => {
        fetch('https://www.anapioficeandfire.com/api/characters?page='+ page +'&pageSize=10"')
        .then((res) => res.json())
        .then(data => {

            console.log(data)

            data.forEach(item => {
                
                console.log(item.name)
                
            });
            //setCharacter(data)

        })
        .catch((error) => {
            console.error(error)
        })     
    }, [])
    

    return(
        <GOTContext.Provider value={{character, page, setPage}}>
            {children}
        </GOTContext.Provider>
    );
}