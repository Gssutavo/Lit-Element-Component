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
                Default
            </div>
        `;
    }
}
customElements.define('component-page',MyPage);