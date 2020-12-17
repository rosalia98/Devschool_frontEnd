/* eslint-disable no-unused-vars */
import axios from 'axios';
const Base_URL = 'https://devschool-2020.firebaseio.com/rosalia-demartino';
import {request} from "./lib"

class PostText extends HTMLElement{
    async getText(){
        
        localStorage.setItem("token","ana are mere");

        const response = await request(`${Base_URL}/articles.json`);
    }
    constructor(){
       super();
       this.getText();
       //take article's content from server
        // axios
        //     .get(`${Base_URL}/articles.json`)
        //     .then(resData => {
        //         //without json stringify, we would get "[object Object]", which is the default when trying to convert an object to a string
        //         //see more here: https://stackoverflow.com/questions/4750225/what-does-object-object-mean
        //         const _articles = JSON.stringify(resData.data["-MORsXoEjZZCWXTGyCGC"].content);
        //         const _posttext = document.createElement('footer');
        //         const _style = document.createElement('style');
       
        //         _style.innerHTML = `
        //             div{
        //                 text-align: center;
        //                 padding: 20px 0;
        //                 font-size: 15px;
        //                 background-color: mistyrose;
        //             }`;
                
        //         _posttext.innerHTML = `
        //             <div class="${this.getAttribute('class')}">
        //                 <h4>${this.getAttribute('title')}</h4>
        //                 <p>
        //                     ${_articles}
        //                 </p>
        //             </div>
        //         `;

        //         this._shadowRoot = this.attachShadow({mode: "open"});
        //         this._shadowRoot.appendChild(_posttext);
        //         this._shadowRoot.appendChild(_style);
        //     });

    }

}
customElements.define('article-post-text', PostText);