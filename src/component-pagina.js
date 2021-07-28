import { css, html, LitElement } from "lit-element";

class MyPagina extends LitElement{

    static get styles(){
        return css`
            *{
                box-sizing: border-box;
                height:100vh;
                display: flex;
            }
            .pagina{
                background-color: green;
                border: 4px solid;
                text-align: center;
                float:left;
                width:70%;
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
                pagina
            </div>
        `;
    }

}
customElements.define('component-pagina',MyPagina);