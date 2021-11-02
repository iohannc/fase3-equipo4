import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

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
                    <span class="button is-info is-outlined">
                    <i class="fas fa-pencil-alt"></i>    
                    </span>
                    &nbsp;
                    <span class="button is-danger is-outlined">
                    <i class="fas fa-trash"></i>    
                    </span>
                    {/* &nbsp;
                    <span class="button is-success is-outlined">
                    <i class="fas fa-check"></i>    
                    </span>
                    &nbsp;
                    <span class="button is-outlined">
                    <i class="fas fa-times"></i>    
                    </span> */}


                    {/* <TextMain>Iconos</TextMain>
                    <i class="fas fa-trash"></i>
                    <i class="fa fa-trash" aria-hidden="true"></i>
                    <i class="fas fa-trash"></i>
                    <i class="fas fa-pencil-alt"></i>

                    <i class="fa fa-pencil" aria-hidden="true"></i>
                    <i class="fal fa-comment-alt-edit"></i>
                    <i class="fas fa-comment-alt-edit"></i>
                        <button class="button">
                        <span class="icon is-small">
                            <i class="fas fa-align-left"></i>
                        </span>
                        <span>Edit</span>
                        </button>
                        <button class="button is-danger is-outlined">
                            <span>Delete</span>
                            <span class="icon is-small">
                            <i class="fas fa-times"></i>
                            </span>
                        </button>
                    &nbsp;&nbsp;
                    <button class="button is-success">
                        <span class="icon is-small">
                        <i class="fas fa-check"></i>
                        </span>
                        <span>Save</span>
                    </button>
                    <button class="button is-danger is-outlined">
                            <span>Cancel</span>
                            <span class="icon is-small">
                            <i class="fas fa-times"></i>
                            </span>
                    </button> */}
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
                        <span class="tag is-danger">
                            <i class="fas fa-tag" is-medium></i>
                        </span>
                        Tags 
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
