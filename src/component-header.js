import { LitElement, html, css } from 'lit-element';

class MyHeader extends LitElement{

    static get styles(){
        return css`
        `;
        

    }

    render(){
        return html`
            <div class="menu">
                Componente Header
            </div>
        `;
    }
}
customElements.define('component-header',MyHeader);