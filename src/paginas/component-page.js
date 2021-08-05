import { css, html, LitElement } from "lit-element";

class MyPage extends LitElement{


    static get styles(){

        return css`
            .div{
                
            }
        `;
    }



    render(){
        return html`
            <h1>
                Soy componente Default
            </h1>
        `;
    }
}
customElements.define('component-page',MyPage);