import axios from 'axios';
const Base_URL = 'https://devschool-2020.firebaseio.com/rosalia-demartino';

class PostImage extends HTMLElement{
    constructor(){
        
        super();
        
        //take the picture link + the alternative for smaller screens from the server:
        axios
            .get(`${Base_URL}/articles.json`)
            .then(resData=>{
                const _normalpic = JSON.stringify(resData.data["-MORto3bFFQYsQfr9DdC"].normal_sized_pic);
                // console.log('normal pic:', _normalpic);
                const _smallpic = JSON.stringify(resData.data["-MORtyG7kdP5BoSoY7sQ"].small_sized_pic);
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
                            <source media="(min-width: 600px )" srcset=${_normalpic}>
                                <img src=${_smallpic} alt="could not load">
                        </picture>
                    </div>
                `;

                this._shadowRoot = this.attachShadow({mode: "open"});
                this._shadowRoot.appendChild(_postimage);
                this._shadowRoot.appendChild(_style);
            })
    }
}
customElements.define('article-post-image', PostImage);