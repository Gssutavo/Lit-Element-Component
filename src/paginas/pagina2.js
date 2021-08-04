import { html, LitElement } from "lit-element";

class PaginaDos extends LitElement {

    render(){
        return html`
            <div>
                <h1>Pagina Dos</h1>
            </div>
        `;
    }
}
customElements.define('component-dos',PaginaDos);