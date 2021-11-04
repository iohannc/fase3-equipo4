import React, { useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';

// Assets
import { TextMain, TextSecond, TextTags, TextTagsMain, ContenedorText, TextSub, TextEdit } from "../../GlobalStyle";
const MainHistoria = (props) => {
    let historia = useHistory();
    const cambiar = async () => {
        let token = document.cookie.split(';').find(row => row.trim().startsWith('token='));
        console.log(historia);
        if (!token) {
            alert("No tienes los permisos suficientes");
            return;
        }
        historia.push(`edit`);
    }
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
            console.log(result);
            document.cookie = `id=${result._id}`;
            titulo.innerHTML = result.titulo;
            tematica.innerHTML = result.tematica;
            texto.innerHTML = result.texto;
            tags.innerHTML = result.tag.slice(1, result.tag.length - 1).split(',');
        }).catch((err) => {
            console.log(err);
        });
        // const value = document.cookie.split(';').map(a => console.log(a));
    };
    let eliminar = async function () {
        let token = document.cookie.split(';').find(row => row.trim().startsWith('token='));
        if (!token) {
            alert("No tienes los permisos suficientes");
            return;
        }
        let id = document.cookie.split(';').find(row => row.trim().startsWith('id='))
        const url = `https://historiasdeterror.herokuapp.com/v1/historias/${id.split("=")[1]}`;
        let result2 = {};
        let a = false;
        await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token.split("=")[1],
            },
            method: "DELETE",
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
                    &nbsp;
                    <span className="button is-success is-outlined">
                        <i className="fas fa-pencil-alt" onClick={cambiar}></i>
                    </span>
                    <span className="button is-danger is-outlined">
                        <i className="fas fa-trash" onClick={eliminar}></i> </span>
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

    );
};

// const OkComponentes =(props)=>{
//     let { path, url } = useRouteMatch();
//     console.log(props.busqueda);
//     return(
//         <div>
//         <span class="button is-info is-outlined">
//         {/* <Link to ={`${url}`}><i class="fas fa-pencil-alt"></i></Link> */}
//             <Link to ={`/historia/edit/${props.busqueda}`}><i class="fas fa-pencil-alt"></i></Link>

//         </span>
//         </div> 
//     )
// }


export default MainHistoria;
