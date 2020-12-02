class Footer extends HTMLElement{
    constructor(){
        super();

        const _footer = document.createElement('footer');
        const _style = document.createElement('style');
        _style.innerHTML = 
        `.copyright{
            font-size: small;
            padding: 10px;
        }`;
        _footer.innerHTML = 
            `<footer>
                <p class="copyright">&copy; 2020 Travel_with_us.com<p></p>
            </footer>`;

        this._shadowRoot = this.attachShadow({mode: "open"});
        this._shadowRoot.appendChild(_footer);
        this._shadowRoot.appendChild(_style)
    }
}
customElements.define('footer-element', Footer);