import { LitElement, html, css} from "lit-element"


class MainDestination extends LitElement{
    render(){
        return html`
        <main>
        <h1>DESTINATION</h1>
        </main>
        `
    }
}
export default customElements.define("main-destination", MainDestination);