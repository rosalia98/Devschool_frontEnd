/* eslint-disable no-unused-vars */
import axios from 'axios';
const Base_URL = 'https://devschool-2020.firebaseio.com/rosalia-demartino';


class PostText extends HTMLElement{
    constructor(){
       super();
       //take article's content from server
        axios
            .get(`${Base_URL}/articles.json`)
            .then(resData => {
                const _articles = JSON.stringify(resData.data["-MORsXoEjZZCWXTGyCGC"].content);
                const _posttext = document.createElement('footer');
                const _style = document.createElement('style');
       
                _style.innerHTML = `
                    div{
                        text-align: center;
                        padding: 20px 0;
                        font-size: 15px;
                        background-color: mistyrose;
                    }`;
                
                _posttext.innerHTML = `
                    <div class="${this.getAttribute('class')}">
                        <h4>${this.getAttribute('title')}</h4>
                        <p>
                            ${_articles}
                        </p>
                    </div>
                `;

                this._shadowRoot = this.attachShadow({mode: "open"});
                this._shadowRoot.appendChild(_posttext);
                this._shadowRoot.appendChild(_style);
            });
            
            
        
    }
    
        
    

    
}
customElements.define('article-post-text', PostText);