// import React, { useState, useEffect, useContext } from "react";
import React, { useState, useEffect } from "react";
// import { ThemeContext } from "../contexts/ThemeContext";

const UseEffectApi = () => {
  //Definimos el array de posts
    let [posts, setPosts] = useState([]);
  //Queremos mostrar un loading mientras carga
    let [isLoading, setIsLoading] = useState(false);

    // const theme = useContext(ThemeContext);

    useEffect(() => {
        setIsLoading(true); //mostramos loading
        fetch("https://eldenring.fanapis.com/api/creatures?limit=100")
        .then((response) => response.json())
        .then((data) => setPosts(data.posts))
        .finally(() => setIsLoading(false)); //ocultamos el loading
    }, []); //El array vacío es el estado inicial y el effect no se volverá a ejecutar cuando su contenido cambie

    const loading = isLoading ? "Loading..." : null;

    return (
        <fieldset>
        {/* <h5 className={"color-" + theme.name}>Listado de la API</h5> */}
        <div>
            {loading}
            {posts.map((post, key) => (
            <div key={key}>
                <p
                // style={{ background: theme.background, color: theme.foreground }}
                >
                {post.name}
                </p>
            </div>
            ))}
        </div>
        </fieldset>
    );
};

export default UseEffectApi;
