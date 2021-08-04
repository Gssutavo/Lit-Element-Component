import { html, LitElement } from "lit-element";

class PaginaTres extends LitElement{

    render(){
        return html`
            <div>
                <h1>Pagina Tres</h1>
            </div>
        `;
    }
}
customElements.define('component-tres',PaginaTres);