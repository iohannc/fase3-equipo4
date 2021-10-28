import React, { useEffect } from "react";
// Assets
import { TextMain, TextSecond, TextTags, TextTagsMain, ContenedorText, TextSub } from "../../GlobalStyle";
const MainHistoria = (props) => {
    const entrar = async () => {
        const url = `https://historiasdeterror.herokuapp.com/v1/historias/${props.show}`;
        const titulo = document.getElementById("titulo");
        const tematica = document.getElementById("tematica");
        const texto = document.getElementById("texto");
        const tags = document.getElementById("tags");
        // console.log(cuerpo);
        let result = {};
        console.log(url)
        await fetch(url).then(async (res) => await res.json()).then((res) => {
            result = res["0"];
            titulo.innerHTML = result.titulo;
            tematica.innerHTML = result.tematica;
            texto.innerHTML = result.texto;
            tags.innerHTML = result.tag.slice(1, result.tag.length - 1).split(',');
        }).catch((err) => {
            console.log(err);
        });
        // const value = document.cookie.split(';').map(a => console.log(a));

    };
    useEffect(() => {
        entrar();
    });
    return (
        <ContenedorText>
            <div className="columns is-centered">
                <div className="column is-7">
                    <div className="is-narrow">
                        <TextMain id="titulo">
                            ID: {props.show}
                        </TextMain>
                        <TextSub id="tematica">
                            Tematica
                        </TextSub>
                    </div>
                </div>
                <div className="is-2">
                    <TextMain>Iconos</TextMain>
                </div>
            </div>
            <div className="columns is-centered is-narrow">
                <div className="column is-8">
                    <TextSecond id="texto" className="is-narrow">
                        Mucho texto xd
                    </TextSecond>
                </div>
            </div>
            <div className="columns is-centered">
                <div className="column is-8">
                    <TextTagsMain>
                        Tags (icono de tags)
                    </TextTagsMain>
                </div>
            </div>
            <div className="columns is-centered">
                <div className="column is-8">
                    <TextTags id="tags">
                        Tags
                    </TextTags>
                </div>
            </div>
        </ContenedorText>

    );
};

export default MainHistoria;
