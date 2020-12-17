import{LitElement, html, css} from 'lit-element';
import "./header.js";
import "./footer.js";

//headerul si footerul apar doar aici!
class MainWrapper extends LitElement{
    render(){
        console.log(this.location);
        return html`
        <header>
        <header-element></header-element>
        </header>
        <slot></slot>
        <footer-element></footer-element>
        `
    }
}
export default customElements.define("main-wrapper", MainWrapper)