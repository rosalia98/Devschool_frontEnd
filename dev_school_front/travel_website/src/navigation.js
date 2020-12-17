class Navigation extends HTMLElement{

    // updated(changedProperties){
    //     if(changedProperties.has('theme')){
    //         this.updateTheme();
    //     }
    // }

    // updateTheme(){
    //     document.head.querySelector("link[data-team]")?.remove();
    //     const themeStyle = document.createElement('link');
    //     themeStyle.dataset.theme = this.theme;
    //     themeStyle.rel = 'stylesheet';
    //     themeStyle.href = `./css/${this.theme.css}`
    //     document.head.appendChild(themeStyle);
    //     localStorage.setItem(this.team);
    // }

    // changeTheme(){
    //     this.theme = this.theme ==='dark'?'light':'dark';
    // }
    
    constructor(){
        super();
        const _style = document.createElement('style');
        const _nav = document.createElement('nav');

        //console.log(window.location.pathname)//ramane mereu la fel, constructorul incarca o singura data

        //varianta imperativa:
        window.addEventListener('vaadin-router-location-changed', (event)=>{
            let pathname = event.detail.location.pathname;
            if( pathname == "/"){
                this.shadowRoot.getElementById("homepage").classList.add("active");
                this.shadowRoot.getElementById("destinationspage").classList.remove("active");
            }else if(pathname == "/destinations"){
                this.shadowRoot.getElementById("destinationspage").classList.add("active");
                this.shadowRoot.getElementById("homepage").classList.remove("active");
            }
        });

        //var checkbox = document.querySelector("input[name=checkbox]");
        // checkbox.addEventListener('change', function() {
        //     if (this.checked) {
        //       //todo - add "dark class"
        //     } else {
        //       //todo - add "light class"
        //     }
        //   });

        _style.innerHTML = `.nav{
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
            background-color: mistyrose;
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
        }
        .active{
            background-color: lightcoral !important;
        }`;
        _nav.innerHTML = 
        `
        <nav class="nav">
            <ul class="nav-list">
                <li id="homepage">
                    <a href="/">Home</a>
                </li>
                <li id="destinationspage">
                    <a href="/destinations">Destinations</a>
                </li>
                <li>
                    <a href="#">Language</a>
                </li>
                <li>
                    <input type="checkbox" name="checkbox">Use dark theme</input>
                </li>
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