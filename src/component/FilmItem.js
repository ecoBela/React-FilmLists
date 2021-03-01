import React from 'react';

const FilmItem = ({children, url}) => {
    return(
        <>

        <h2>
            <a href={url} target="_blank">
                {children}
            </a>
        </h2>
        


        </>
    )
}

export default FilmItem;