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
            <div>
                Mensaje 2
            </div>
        `;
    }
}
customElements.define('component-page',MyPage);