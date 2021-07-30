import { css, html, LitElement } from "lit-element";
import './component-menu';
class MyPagina extends LitElement{

    static get styles(){
        return css`
        
        `;
    }

    render(){
        return html`
            <div class="pagina">
                Componente de la Pagina
            </div>
        `;
    }

}
customElements.define('component-pagina',MyPagina);