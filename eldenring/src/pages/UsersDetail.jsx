import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const UsersDetail = () => {
    const { idUser } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [character, setCharacter] = useState({});

    useEffect(() => {
      setIsLoading(true);
      const getUser = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${idUser}`);
        const data = await response.json();
        setCharacter(data);
        setIsLoading(false)
      }
      getUser();
    }, [idUser]);

    return (
        <div>
            {isLoading ? <p>Cargando...</p> : <>
            <img src={character.image} alt="img-profile"/>
            <p>Name: {character.name}</p>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Tipo: {character.type}</p>
            <p>Gender: {character.gender}</p>
            <p>Episodios: {character.episode}</p>
            </>}
        </div>
    )
}

export default UsersDetail