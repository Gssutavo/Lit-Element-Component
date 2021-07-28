import { css, html, LitElement } from "lit-element";

class MyMenu extends LitElement{

    static get styles(){
        return css`
            *{
                box-sizing: border-box;
                /* display: flex; */
                height:100vh;
            }
            .menu{
                background-color:yellow;
                text-align:center;
                border: 4px solid;
                float:left;
                width:30%;
            }

            @media only screen and(max-width: 620){
                .menu, .pagina{
                    width: 100%;
                }
            }
            .contenedor{
                height: 32.5%;
                background-color: #6A737C;
                margin: 1% 1%;
              }
        `;
    }

    render(){
        return html`
            <div class="menu">
                <div class="contenedor">
                    UNO
                </div>
                <div class="contenedor">
                    DOS
                </div>
                <div class="contenedor">
                    TRES
                </div>
            </div>
        `;
    }
}
customElements.define('component-menu',MyMenu);