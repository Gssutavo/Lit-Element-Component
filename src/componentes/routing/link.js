import { html, LitElement } from "lit-element";

class Link extends LitElement{

    static get properties() {
        return {
            to: { type: String, attribute: true },
            routerName: { type: String, attribute: true}
        }   
    }
    
    _handlerClick(){
        let detail = {
            to:this.to,
            routerName:this.routerName
        };
        this.dispatchEvent(new CustomEvent('goEvent', { detail:detail,bubbles:true,composed:true}));
    }

    render(){
        return html`
            <div @click="${this._handlerClick}">
                <slot></slot>
            </div>
        `;
    }

}
customElements.define('component-link',Link);