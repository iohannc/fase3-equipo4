import React, { useEffect } from "react";
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import Header from "../Header/index3";
import { GlobalStyle, Ids } from "../../GlobalStyle";

// Assets
import { TextMain, TextEdit, TextTags, TextTagsMain, ContenedorText, TextSub } from "../../GlobalStyle";
const MainHistoria = (props) => {
    let datos = function () {
        let username = document.cookie.split('; ').find(row => row.startsWith('user='))
        if (username) {
            username = username.split('=')[1];
        } else {
            username = ""
        }
        document.getElementById("username").innerHTML = "  " + username;
    }
    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        datos();
    });
    let { path, url } = useRouteMatch();
    console.log(url);
    let historia = useHistory();
    const cambiar = () => {
        let busq = historia.location.pathname.split("/")[2];
        historia.push(`/historia/${busq}/`);
    }
    let token = document.cookie.split(';').find(row => row.trim().startsWith('token='));
    let id = document.cookie.split(';').find(row => row.trim().startsWith('id='))

    const entrar = async () => {
        let busq = historia.location.pathname.split("/")[2];
        const url = `https://historiasdeterror.herokuapp.com/v1/historias/${busq}`;
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
            console.log(result.texto);
            tags.innerHTML = result.tag.slice(1, result.tag.length - 1).split(',');
        }).catch((err) => {
            console.log(err);
        });
        // const value = document.cookie.split(';').map(a => console.log(a));

    };

    //console.log(document.getElementById("texto").value);
    let enviar = async function () {
        const url = `https://historiasdeterror.herokuapp.com/v1/historias/${id.split("=")[1]}`;
        let cuerpo = { "texto": document.getElementById("texto").value };
        console.log(cuerpo)
        let a = false;
        await fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token.split("=")[1],
            },
            body: JSON.stringify(cuerpo),
        }).then(async (res) => await res.json()).then((res) => {
            console.log(res);
            a = true;
        }).catch((err) => {
            console.log(err);
        });
        if (a) {
            alert("Cambios realizados");
            historia.replace("/")
        }
        if (!a) {
            alert("Cambios no realizados, no eres administrador o autor de la historia");
        }
    }


    useEffect(() => {
        entrar();
    });
    return (
        <>
            <Header />
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
                        <span className="button is-info is-outlined" onClick={enviar}>
                            <i className="fas fa-check"></i>
                        </span>
                        &nbsp;
                        <span className="button is-danger is-outlined">
                            <i className="fas fa-times" onClick={cambiar}></i>
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
                        <TextEdit id="texto" className="is-narrow">
                        </TextEdit>
                    </div>
                </div>
                <div className="columns is-centered">
                    <div className="column is-8">
                        <TextTagsMain>
                            <span className="tag is-danger">
                                <i className="fas fa-tag is-medium"></i>
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
            <GlobalStyle />
        </>
    );
};

export default MainHistoria;
