class Destination extends HTMLElement{
    constructor(){
        super();

        const _destination = document.createElement('destination');
        const _style = document.createElement('style');
        _style.innerHTML = 
        `.destination{
            display: inline-flex;
            margin: 5px;
            background-color: mistyrose;
        }
        .destination_picture{
            margin:10px;
            width:100%;
            height:100%;
        }
        .destination:nth-child(even){
            text-align: right;
        }
        img{
            width:80%;
            object-fit: contain;
        }`;
        
        _destination.innerHTML = 
            `<div class="destination">
                <div class="destination_picture">
                    <picture>
                        <source media="(min-width: 600px )" srcset="https://picsum.photos/300/150">
                            <img src="https://picsum.photos/200/300" alt="could not load">
                    </picture>
                </div>
                <div class="title_text_link">
                    <h4>Destination 1</h4>
                    <p>
                        Nam vitae est urna. Curabitur maximus dui eros, 
                        dignissim pretium mi gravida ac. Praesent lorem 
                        est, malesuada a ex eget, sagittis dignissim 
                        libero. Duis et quam a metus venenatis accumsan id eu est
                    </p>
                    <a href="">More details</a>
                </div>
            </div>
            <div class="destination">
                <div class="destination_picture">
                    <picture>
                        <source media="(min-width: 600px )" srcset="https://picsum.photos/300/150">
                            <img src="https://picsum.photos/200/300" alt="could not load">
                    </picture>
                </div>
                <div class="title_text_link">
                    <h4>Destination 1</h4>
                    <p>
                        Nam vitae est urna. Curabitur maximus dui eros, 
                        dignissim pretium mi gravida ac. Praesent lorem 
                        est, malesuada a ex eget, sagittis dignissim 
                        libero. Duis et quam a metus venenatis accumsan id eu est
                    </p>
                    <a href="">More details</a>
                </div>
            </div>
            <div class="destination">
                <div class="destination_picture">
                    <picture>
                        <source media="(min-width: 600px )" srcset="https://picsum.photos/300/150">
                            <img src="https://picsum.photos/200/300" alt="could not load">
                    </picture>
                </div>
                <div class="title_text_link">
                    <h4>Destination 1</h4>
                    <p>
                        Nam vitae est urna. Curabitur maximus dui eros, 
                        dignissim pretium mi gravida ac. Praesent lorem 
                        est, malesuada a ex eget, sagittis dignissim 
                        libero. Duis et quam a metus venenatis accumsan id eu est
                    </p>
                    <a href="">More details</a>
                </div>
            </div>
            <div class="destination">
                <div class="destination_picture">
                    <picture>
                        <source media="(min-width: 600px )" srcset="https://picsum.photos/300/150">
                            <img src="https://picsum.photos/200/300" alt="could not load">
                    </picture>
                </div>
                <div class="title_text_link">
                    <h4>Destination 1</h4>
                    <p>
                        Nam vitae est urna. Curabitur maximus dui eros, 
                        dignissim pretium mi gravida ac. Praesent lorem 
                        est, malesuada a ex eget, sagittis dignissim 
                        libero. Duis et quam a metus venenatis accumsan id eu est
                    </p>
                    <a href="">More details</a>
                </div>
            </div>
            <div class="destination">
                <div class="destination_picture">
                    <picture>
                        <source media="(min-width: 600px )" srcset="https://picsum.photos/300/150">
                            <img src="https://picsum.photos/200/300" alt="could not load">
                    </picture>
                </div>
                <div class="title_text_link">
                    <h4>Destination 1</h4>
                    <p>
                        Nam vitae est urna. Curabitur maximus dui eros, 
                        dignissim pretium mi gravida ac. Praesent lorem 
                        est, malesuada a ex eget, sagittis dignissim 
                        libero. Duis et quam a metus venenatis accumsan id eu est
                    </p>
                    <a href="">More details</a>
                </div>
            </div>
            <div class="destination">
                <div class="destination_picture">
                    <picture>
                        <source media="(min-width: 600px )" srcset="https://picsum.photos/300/150">
                            <img src="https://picsum.photos/200/300" alt="could not load">
                    </picture>
                </div>
                <div class="title_text_link">
                    <h4>Destination 1</h4>
                    <p>
                        Nam vitae est urna. Curabitur maximus dui eros, 
                        dignissim pretium mi gravida ac. Praesent lorem 
                        est, malesuada a ex eget, sagittis dignissim 
                        libero. Duis et quam a metus venenatis accumsan id eu est
                    </p>
                    <a href="">More details</a>
                </div>
            </div>
            `;

        this._shadowRoot = this.attachShadow({mode: "open"});
        this._shadowRoot.appendChild(_destination);
        this._shadowRoot.appendChild(_style)
    }
}
customElements.define('article-destination', Destination);