import React from 'react';

const FilmItem = ({name, id, url}) => {
    return(
        <>

        <h2>
            <a href={url}>
                {name}
            </a>
        </h2>
        {/* <h3>{url}</h3> */}


        </>
    )
}

export default FilmItem;