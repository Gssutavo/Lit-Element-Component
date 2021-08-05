import { html, LitElement } from "lit-element";

class PaginaDos extends LitElement {

    render(){
        return html`
            <h1>Soy Componente Dos</h1>
        `;
    }
}
customElements.define('component-dos',PaginaDos);