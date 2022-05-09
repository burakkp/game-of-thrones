import React, { useState, useEffect, createContext } from "react";

export const GOTContext = createContext({});

export const GOTProvider = ({children}) => {
    const [characters, setCharacters] = useState([]);
    const [resetFilter, setResetFilter] = useState([]);
    const [page, setPage] = useState(1);
    const [name, setName] = useState();
    const [checkPage, setCheckPage] = useState(false);
    

    useEffect(() => {
        
        const getCharacters = async () => {
            const res = await fetch('https://www.anapioficeandfire.com/api/characters?page='+ page +'&pageSize=10"');
            const data = await res.json();
            setCharacters(data);
            setResetFilter(data);
            console.log(data)
        }

        getCharacters(); 
        

    }, [page])
    

    return(
        <GOTContext.Provider value={{characters, setCharacters, page, setPage, resetFilter, setResetFilter, name, setName, checkPage, setCheckPage}}>
            {children}
        </GOTContext.Provider>
    );
}