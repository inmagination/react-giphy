import React from 'react';
import ListOfGifs from '../../components/ListOfGifs';
import {useGifs} from '../../hooks/useGifs'

export default function SearchResults({ params }) { 
  const { keyword } = params  
  const { loading, gifs } = useGifs({ keyword }) // custom hook que devuelve loading y gifs   
  
  return (
    <React.Fragment>
      {loading
        ? <h4>Cargando....</h4>
        : <ListOfGifs gifs={gifs} />
      }
    </React.Fragment>     
  );
}