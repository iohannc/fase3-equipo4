import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
// Assets
import { TextMain, TextSecond, TextTags, TextTagsMain, ContenedorText, TextSub } from "../../GlobalStyle";

const MainHistoria = (props) => {
    let historia = useHistory();
    const regresar = () => {
        historia.push(`/`);
        return true;
    }

    // let enviando = false;
    const cambiar = () => {
        // if (!enviando) {
        //     enviando= true;
        //     historia.push(`/historia/${props.show}/edit`);
        //     return true;
        // } else {
        //     //Si llega hasta aca significa que pulsaron 2 veces el boton submit
        //     alert("El formulario ya se esta enviando");
        //     return false;
        // }
        historia.push(`/historia/${props.show}/edit`);
    }
    const entrar = () => {
        const url = `https://historiasdeterror.herokuapp.com/v1/historias/${props.show}`;
        const titulo = document.getElementById("titulo");
        const tematica = document.getElementById("tematica");
        const texto = document.getElementById("texto");
        const tags = document.getElementById("tags");
        let result = {};
        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            result = res["0"];
            console.log(result);
            document.cookie = `id=${result._id}`;
            titulo.innerHTML = result.titulo;
            tematica.innerHTML = result.tematica;
            texto.innerHTML = result.texto;
            tags.innerHTML = result.tag.slice(1, result.tag.length - 1).split(',');
        }).catch((err) => {
            console.log(err);
        });
    };
    const eliminar = () => {
        let token = document.cookie.split(';').find(row => row.trim().startsWith('token='));
        let id = document.cookie.split(';').find(row => row.trim().startsWith('id='))
        const url = `https://historiasdeterror.herokuapp.com/v1/historias/${id.split("=")[1]}`;
        // let a = false;
        let status;
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token.split("=")[1],
            },
            method: "DELETE",
        })
        .then((res) => { 
            status = res.status; 
            return res.json() 
        })
        .then((jsonData) => {
            // console.log("jsonData", jsonData);
            // console.log("status", status);
            // a = true;
            alert("Eliminación realizada exitosamente");
            historia.replace("/")
            return true;
        })        
        .catch((err) => {
            if(status === 201 || status === 200) {
                // a = true;
                console.log("status", status);
            } 
            console.log(err);
            alert("Eliminación no realizada, no eres administrador o autor de la historia");
        });


        // .then((res) => res.json())
        // .then((res) => {
        //     console.log(res);
        //     a = true;
        // }).catch((err) => {
        //     console.log(err);
        // });
        // if (a) {
        //     alert("Cambios realizados");
        //     historia.replace("/")
        // }
        // if (!a) {
        //     alert("Cambios no realizados, no eres administrador o autor de la historia");
        // }
    };
    useEffect(() => {
        entrar();
    });
    let tokenG = document.cookie.split(';').find(row => row.trim().startsWith('token='));
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
                    &nbsp;
                    {tokenG &&
                        <>
                            <span className="button is-success is-outlined">
                                <i className="fas fa-pencil-alt" onClick={cambiar}></i>
                            </span>
                            <span className="button is-danger is-outlined">
                                <i className="fas fa-trash" onClick={eliminar}></i> 
                            </span>
                            <span className="button is-home is-link is-outlined">
                                <i className="fas fa-home" onClick={regresar}></i>
                            </span>
                            <div className="columns is-centered">
                            </div>
                        </>
                    }
                </div>
            </div>
            <div className="columns is-centered is-narrow">
                <div className="column is-8">
                    <TextSecond id="texto" className="is-narrow" />
                </div>
            </div>
            <div className="columns is-centered">
                <div className="column is-8">
                    <TextTagsMain>
                        <span className="tag is-danger">
                            <i className="fas fa-tag is-medium"></i>
                        </span>
                        <p>Tags</p>
                    </TextTagsMain>
                </div>
            </div>

            <div className="columns is-centered">
                <div className="column is-8">
                    <TextTags id="tags" />
                </div>
            </div>
        </ContenedorText>

    );
};


export default MainHistoria;
