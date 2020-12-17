import { LitElement, html, css} from "lit-element"

import "./article-destination.js";
import "./article-post-image.js";
import "./article-post-text.js";
import "./navigation.js";
const axios = window.axios;

class MainComponent extends LitElement{
    render(){
        return html`
        
    <section class="section1">
        <h3>Some subtitle for our travel website!</h3>
        <p>Nam vitae est urna. Curabitur maximus dui eros, 
            dignissim pretium mi gravida ac. Praesent lorem 
            est, malesuada a ex eget, sagittis dignissim 
            libero. Duis et quam a metus venenatis accumsan id eu est.</p>
    </section>

    <section class="main_content">

        <div class="grid-container">

            <article-post-image class="item1"></article-post-image>
            <article-post-text class="item2 textpart" title="Article 1"></article-post-text>
            <article-post-image class="item3"></article-post-image>
            <article-post-text class="item4 textpart" title="Article 2"></article-post-text>
            <article-post-image class="item5"></article-post-image>
            <article-post-text class="item6 textpart" title="Article 3"></article-post-text>
            
        </div><!--grid-content-->
        
    </section><!--main_content-->

    `
    }
    static get styles(){
        return css`
        :root{
            --main-bakground-color: mistyrose;
            --second-background-color: darksalmon;
        }
        header{
            background-color: var(--main-bakground-color);
        }
        .section1{
            text-align: center;
        }
        .container{
            display: flex;
        }
        .description{
            background-color: var(--main-bakground-color);
            text-align: center;
        }
        .item1 { grid-area: pic1; }
        .item2 { grid-area: des1; }
        .item3 { grid-area: pic2; }
        .item4 { grid-area: des2; }
        .item5 { grid-area: pic3; }
        .item6 { grid-area: des3; }

        .grid-container {
            display: grid;
            grid-template-areas:
            'pic1 pic1  pic1 des1 des1 des1 des1 '
            'des2 des2 des2 des2 pic2 pic2 pic2'
            'pic3 pic3 pic3 des3 des3 des3 des3 ';
            grid-row-gap: 10px;
            grid-column-gap: 10px;
            padding: 10px;
        }
        .grid-container div {
            text-align: center;
            padding: 20px 0;
            font-size: 15px;
            background-color: var(--second-background-color);
        }
        .textpart{
            background-color: mistyrose !important;
        }
        `
    }
}
export default customElements.define("main-component", MainComponent);