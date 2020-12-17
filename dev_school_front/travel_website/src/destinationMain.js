import { LitElement, html, css} from "lit-element"


class MainDestination extends LitElement{
    render(){
        console.log(this.location);
        return html`
        <main>
        <h1>all destinations</h1>
        </main>
        `
    }
}
export default customElements.define("main-destination", MainDestination);