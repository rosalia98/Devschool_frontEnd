class PostImage extends HTMLElement{
    constructor(){
        super();

        const _postimage = document.createElement('footer');
        const _style = document.createElement('style');
        _style.innerHTML = 
        `
        img{
            width:80%;
            object-fit: contain;
        }
        div{
            text-align: center;
            padding: 20px 0;
            font-size: 15px;
            background-color: darksalmon;
        }
        `;
        _postimage.innerHTML = `
            <div class="${this.getAttribute('class')}">
                <picture>
                    <source media="(min-width: 600px )" srcset="https://picsum.photos/500/250">
                        <img src="https://picsum.photos/200/300" alt="could not load">
                </picture>
            </div>
        `;

        this._shadowRoot = this.attachShadow({mode: "open"});
        this._shadowRoot.appendChild(_postimage);
        this._shadowRoot.appendChild(_style)
    }
}
customElements.define('article-post-image', PostImage);