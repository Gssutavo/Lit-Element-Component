import { html, LitElement } from "lit-element";

class Route extends LitElement{
    render() {
        return html`
            <slot></slot>
        `;
    }
}
customElements.define('component-route',Route);