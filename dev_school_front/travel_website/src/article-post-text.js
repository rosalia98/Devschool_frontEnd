/* eslint-disable no-unused-vars */
const axios = window.axios;
    
class PostText extends HTMLElement{
    
    constructor(){
        super();

        this.articles = [];
        // this.getArticles();
        
        const _posttext = document.createElement('footer');
        const _style = document.createElement('style');
        _style.innerHTML = 
        `
        
        div{
            text-align: center;
            padding: 20px 0;
            font-size: 15px;
            background-color: mistyrose;
        }
        `;
        
        _posttext.innerHTML = `
            <div class="${this.getAttribute('class')}">
                <h4>${this.getAttribute('title')}</h4>
                <p>
                    Aliquam erat sapien, posuere sit amet ligula et, volutpat consequat lectus. 
                    In eu faucibus ante. Sed accumsan ex at tellus aliquet, cursus placerat nibh eleifend. 
                    Integer dignissim et est ut auctor. Cras vitae nulla lorem. Nulla facilisi. Cras hendrerit 
                    tellus eget urna ultrices suscipit. Duis laoreet imperdiet ipsum, id consequat libero tempor 
                    eu. 
                </p>
            </div>
        `;

        this._shadowRoot = this.attachShadow({mode: "open"});
        this._shadowRoot.appendChild(_posttext);
        this._shadowRoot.appendChild(_style)
    }
    // getArticles(){
    //     axios
    //     .get('https://devschool-2020.firebaseio.com/rosalia-demartino/articles.json')
    //     .then((resData) => {
            
    //         console.log(resData.data);
            
            
    //     });
    // }
}
customElements.define('article-post-text', PostText);