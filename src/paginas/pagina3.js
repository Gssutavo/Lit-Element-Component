import { html, LitElement } from "lit-element";

class PaginaTres extends LitElement{

    render(){
        return html`
            <h1>Soy componente Tres</h1>
        `;
    }
}
customElements.define('component-tres',PaginaTres);