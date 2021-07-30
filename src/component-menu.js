import { css, html, LitElement } from "lit-element";
import './component-pagina'
import './component-page'
class MyMenu extends LitElement{

    static get styles(){
        return css`
        `;
    }
   /*  static get properties() {
        return {
            uno: { type: String },
            dos: { type: String },
            tre: { type: String }
        };
    } */

    constructor(){
        super();
    }
    render(){
        return html`
            <div class="menu" id="page">
                <div class="contenedor" @click="${this.pagina}">
                    UNO
                </div>
                <!-- <div class="contenedor" @click="${this.paginaDos}">
                    ${this.dos}  DOS
                </div>
                <div class="contenedor" @click="${this.paginaTres}">
                    ${this.tre}TRES
                </div> -->
            </div>
        `;
    }
    pagina(){
        let contendor = this.shadowRoot.getElementById('page');
        this.shadowRoot.querySelector('component-page');
        contendor.innerHTML="<component-page></component-page>";
    }
   /*  paginaDos(){

    }
    paginaTres(){

    } */
    /* pagina(){
        this.uno = 'soy pagina';
    }    
    paginaDos(){
        this.dos = 'soy pagina';
    }
    paginaTres(){
        this.tre = 'soy pagina';
    } */

}
customElements.define('component-menu',MyMenu);