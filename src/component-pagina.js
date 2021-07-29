import { css, html, LitElement } from "lit-element";
import './component-menu';
class MyPagina extends LitElement{

    static get styles(){
        return css`
            *{
                box-sizing: border-box;
                height:100vh;     
            }
            .pagina{
                background-color: grey;
                border: 4px solid;
                text-align: center;
                float:left;
                width:70%;
                font-size: 20px;
                line-height: 500px;
            } 

            @media only screen and(max-width: 620){
                .menu, .pagina{
                    width: 100%;
                }
            }


        `;
    }

    render(){
        return html`
            <div class="pagina">
                Componente de la Pagina
            </div>
        `;
    }

}
customElements.define('component-pagina',MyPagina);