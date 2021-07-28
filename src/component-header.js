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
            background-color: blue;
            border: 4px solid;
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
                header
            </div>
        `;
    }
}
customElements.define('component-header',MyHeader);