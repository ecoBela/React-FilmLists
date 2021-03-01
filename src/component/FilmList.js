import React from 'react';
import FilmItem from './FilmItem';

const FilmList = ({films}) => {

    //const {id, name, url} = 

    const filmNodes = films.map(({id, name, url}) => {
        return (
            <FilmItem name={name} key={id} url={url}></FilmItem>
        )
    });

    return (
        <>
       
        {filmNodes}
        </>
    )
}

export default FilmList;