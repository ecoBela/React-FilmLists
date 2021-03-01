import React from 'react';
import FilmItem from './FilmItem';

const FilmList = ({films}) => {

    //const {id, name, url} = 

    const filmNodes = films.map(({id, name, url}) => {
        return (
            <FilmItem key={id} url={url}>{name}</FilmItem>
        )
    });

    return (
        <>
       
        {filmNodes}
        </>
    )
}

export default FilmList;