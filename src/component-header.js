import { LitElement, html, css } from 'lit-element';

class MyHeader extends LitElement{

    static get styles(){
        return css`
        *{
            box-sizing: border-box;
            height: 100%;
        }
        .menu{
            text-align: center;
            padding: 35px;
            background-color: grey;
            border: 4px solid;
            font-size: 20px;
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
            <div class="menu">
                Componente Header
            </div>
        `;
    }
}
customElements.define('component-header',MyHeader);