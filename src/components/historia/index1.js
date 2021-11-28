import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import Header from "../Header/index3";
import { GlobalStyle } from "../../GlobalStyle";
// import FormSimple from "../FormSimple";

// Assets
//, TextInput
//TextMain,
//, TextSub
import { TextEdit, TextTags, TextTagsMain, ContenedorText } from "../../GlobalStyle";

const MainHistoria = (props) => {
    let let_titulo = "";
    let let_tematica = "";
    let let_texto = "";
    const datos =  () => {
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
    let historia = useHistory();
    const cambiar_pagina = () => {
        // console.log("Cambiar pagina");
        let busq = historia.location.pathname.split("/")[2];
        historia.push(`/historia/${busq}/`);
        return true;
    }
    let token = document.cookie.split(';').find(row => row.trim().startsWith('token='));
    let id = document.cookie.split(';').find(row => row.trim().startsWith('id='))

    const entrar = () => {
        let busq = historia.location.pathname.split("/")[2];
        const url = `https://historiasdeterror.herokuapp.com/v1/historias/${busq}`;
        const titulo = document.getElementById("titulo");
        const tematica = document.getElementById("tematica");
        // console.log("tematica", tematica);
        let_titulo =  titulo;
        let_tematica = tematica;
        const texto = document.getElementById("texto");
        const tags = document.getElementById("tags");
        // console.log(cuerpo);
        let result = {};
        // console.log(url)
        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            // console.log("Entro a asignar datos");
            result = res["0"];
            titulo.innerHTML = result.titulo;
            tematica.innerHTML = result.tematica;
            tematica.value = result.tematica;
            titulo.value = result.titulo;
            let_titulo =  result.titulo;
            let_tematica = result.tematica;
            let_texto = result.texto;
            texto.innerHTML = result.texto;
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
        let tematica2 = { "tematica": document.getElementById("tematica").value };
        let titulo2 = { "titulo": document.getElementById("titulo").value };
        // console.log(cuerpo)
        // let a = false;
        if (let_titulo !== titulo2.titulo || let_tematica !== tematica2.tematica || let_texto !== cuerpo.texto) 
        {
            let bodyData = {
                'titulo': titulo2.titulo,
                'tematica': tematica2.tematica,
                'texto': cuerpo.texto
            }
            // console.log("bodyData", bodyData);
            let status;
            fetch(url, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + token.split("=")[1],
                },
                body: JSON.stringify(bodyData),
            })
            // .then((res) => res.json())
            .then((res) => { 
                status = res.status; 
                return res.json() 
            })
            .then((jsonData) => {
                // console.log("jsonData", jsonData);
                // console.log("status", status);
                // a = true;
                alert("Cambios realizados");
                historia.replace("/")
                return true;
            })        
            // .then((res) => {
            //     console.log(res);
            //     a = true;
            // })
            .catch((err) => {
                if(status === 201 || status === 200) {
                    // a = true;
                    console.log("status", status);
                } 
                console.log(err);
                alert("Cambios no realizados, no eres administrador o autor de la historia");
            });
            // if (a) {
            //     alert("Cambios realizados");
            //     historia.replace("/")
            // }
            // if (!a) {
            //     alert("Cambios no realizados, no eres administrador o autor de la historia");
            // }    
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
                            {/* <TextMain id="titulo">
                                ID: {props.show}
                            </TextMain> */}
                            {/* <TextSub id="tematica">
                                Tematica
                            </TextSub> */}
                            {/* <TextInput id="titulo" className="is-narrow">
                            ID: {props.show}
                            </TextInput> */}

                            <input type="text"
                            id="titulo"   
                            className="form-control" 
                            placeholder="Título" 
                            defaultValue={let_titulo}  
                            size="60"
                            required
                            autoFocus
                            />
                        </div>
                        <div className="is-narrow">
                            <input type="text"
                            id="tematica"   
                            className="form-control" 
                            placeholder="Temática" 
                            defaultValue={let_tematica}  
                            size="60"
                            required
                            />

                            {/* <TextInput id="tematica" className="is-narrow">
                            tematica
                            </TextInput> */}
                        </div>
                    </div>
                    <div className="is-2">
                        <span className="button is-info is-outlined" onClick={enviar}>
                            <i className="fas fa-check"></i>
                        </span>
                        &nbsp;
                        <span className="button is-danger is-outlined">
                            <i className="fas fa-times" onClick={cambiar_pagina}></i>
                        </span>
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
