import { css, html, LitElement } from "lit-element";

class ButtonComponent extends LitElement{

    static get properties() {
        return {
            texto: { type: String },
        };
    }

    constructor(){
        super();
    }

    static get styles(){

        return css`
            button {
                background-color: #00FFFF;
            }
        `;
        
    }
    render(){

        return html`
            <button>${this.texto}</button>
        `;
    }

}
customElements.define('component-button',ButtonComponent);