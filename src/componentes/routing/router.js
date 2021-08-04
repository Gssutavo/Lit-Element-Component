import { html, LitElement } from "lit-element";

class Router extends LitElement{

    static get properties() {
        return {
            name: { type: String, attribute: true },
        };
    }
    constructor(){
        super();
        this._listenerGoEvent = this._listenerGoEvent.bind(this);
    }
    connectedCallback() {
        super.connectedCallback();
        this.viewPortList = this.querySelectorAll('component-viewport');
        this.addEventListener('goEvent',this._listenerGoEvent)
    }
    _listenerGoEvent(event){
        let {to, routerName } = event.detail;
        if(routerName === undefined || routerName === this.name) {
            this.viewPortList.forEach((viewPort)=>{
                viewPort.renderView(to);
            })
            event.stopPropagation();
        }
    }
    render(){
        return html`
            <slot></slot>
        `;
    }

}
customElements.define('component-router',Router);