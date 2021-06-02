import React, { useEffect, useState } from 'react';
import keys from "./Keys";

const id= keys.SEARCH_ENGINE_ID;
const googleKey = keys.GOOGLE_KEY;


const useGoogleSearch= (term) => {
    const [data, setData] = useState(null);


    useEffect(() => {

        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${googleKey}&cx=${id}&q=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setData(result);
                
            });
        };
        fetchData(); //dont forget tho call the function to actually run it
        
    }, [term]);

    return {data};
    
};


export default useGoogleSearch
