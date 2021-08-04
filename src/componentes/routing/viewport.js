import { LitElement } from "lit-element";

class ViewPort extends LitElement{
    constructor(){
        super();
        this.viewNow = 'pagina_2'
    }
    connectedCallback() {
        super.connectedCallback();
        this.viewList = this.querySelectorAll('component-route');
        this.renderView(this.viewNow);
    }
    renderView(path){
        this.innerHTML = '';
        this.shadowRoot.innerHTML = '';

        let view = Array.from(this.viewList).find((node)=>{
            return node.getAttribute('path') === path
        });

        !!view && this.shadowRoot.appendChild(view);
        this.viewNow = path;
    }
}
customElements.define('component-viewport',ViewPort);