import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getData = async (url) => {
            let res = await fetch(url),
            json = await res.json();


            json.results.forEach(async (el) => {
                let res = await fetch(el.url),
                    json = await res.json();
                    
                    let pokemon = {
                        id: json.id,
                        name: json.name,
                        avatar: json.sprites.front_default
                    };
                    setPokemons((pokemons) => [...pokemons, pokemon]);
            })
        }
        getData(url);
    }, [url]);
    return {data, isPending, error}
}
