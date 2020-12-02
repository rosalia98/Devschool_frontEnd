import './navigation.js'

class Header extends HTMLElement{
    constructor(){
        super();

        const _header = document.createElement('header');
        const _style = document.createElement('style');
        _style.innerHTML = 
        `h1{
            text-align: center;
            color:rgb(25, 4, 41);
        }`;
        _header.innerHTML = 
            `<navigation-element></navigation-element>
            <h1>Travel with us! </h1>`;

        this._shadowRoot = this.attachShadow({mode: "open"});
        this._shadowRoot.appendChild(_header);
        this._shadowRoot.appendChild(_style);
    }
}
customElements.define('header-element', Header);