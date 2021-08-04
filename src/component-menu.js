import { css, html, LitElement } from "lit-element";
/* import './component-pagina'
import './paginas/component-page' */
class MyMenu extends LitElement{

    static get styles(){
        return css`
        `;
    }
 
    constructor(){
        super();
    }
    render(){
        return html`
            <div>
                <component-link to="/default">
                    <component-button texto="pagina 1"></component-button>
                </component-link>

                <component-link to="/pagina_2">
                    <component-button texto="pagina 2"></component-button>   
                </component-link>
                
                <component-link to="/pagina_3">
                    <component-button texto="pagina 3"></component-button>
                </component-link>
            </div>
        `;
    }
}
customElements.define('component-menu',MyMenu);