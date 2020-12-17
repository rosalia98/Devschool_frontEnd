import{LitElement, html, css} from 'lit-element';

class DestinationsComponent extends LitElement{
    render(){
        console.log(this.location);
        return html`
        <h1>one destination with id: ${this.location.params.id}</h1>
        `
    }
}
export default customElements.define("destinations-component", DestinationsComponent)