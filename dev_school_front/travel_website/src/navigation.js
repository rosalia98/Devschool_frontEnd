class Navigation extends HTMLElement{
    constructor(){
        super();
        const _style = document.createElement('style');
        const _nav = document.createElement('nav');
        _style.innerHTML = 
        `.nav{
            justify-content: center;
            text-align: center;
            display: flex;
        }
        .nav-list{
            list-style-type: none;
            margin:0;
            padding:0;
            display:flex;
            
        }
        .nav-list li{
            border: 1px solid black;
            margin: 10px;
            flex: 1; 
            
        }
        .nav-list a{
            display: block;
            padding:10px 20px;
            color: black;
            text-decoration: none;
            font-size: 18px;
            color:rgb(25, 4, 41);
            
        }
        .nav-list a:hover{
            background-color: lightcoral;
        }`;
        _nav.innerHTML = 
        `
        <nav class="nav">
            <ul class="nav-list">
                <li><a href="homepage.html">Home</a></li>
                <li><a href="destinations.html">Destinations</a></li>
                <li><a href="#">Language</a></li>
            </ul>
        </nav>
        <slot name="title"></slot>
        `;

        this._shadowRoot = this.attachShadow({ mode: 'open'});
        this._shadowRoot.appendChild(_nav);
    
        this._shadowRoot.appendChild(_style);
    }
    static get observedAttributes(){
        return ['color'];
    }
    //lyfecylce hooks:

    //initial - se baga in DOM
    connectedCallback(){
        console.log("hello from connected callback!")
    }
    //la iesirea din DOM
    disconnectedCallback(){
        console.log('hello from disconnected callback!')
    }
    //cand se muta elementul pe o alta pagina
    adoptedCallback(){}

    attributeChangedCallback(name, oldValue, newValue){
        console.log('changed color', name, oldValue, newValue);
        this.updateStyle(this);
    }

    updateStyle(element){
        const style = element.shadowRoot.querySelector('style');
        style.innerHTML = 
        `.nav{
            justify-content: center;
            text-align: center;
            display: flex;
        }
        .nav-list{
            list-style-type: none;
            margin:0;
            padding:0;
            display:flex;
            
        }
        .nav-list li{
            border: 1px solid black;
            margin: 10px;
            flex: 1; 
            color: ${element.getAttribute('color')};
        }
        .nav-list a{
            display: block;
            padding:10px 20px;
            color: black;
            text-decoration: none;
            background-color: var(--second-background-color);
            font-size: 18px;
            color:rgb(25, 4, 41);
            
        }
        .nav-list a:hover{
            background-color: lightcoral;
        }`;
    }
}

customElements.define('navigation-element', Navigation);