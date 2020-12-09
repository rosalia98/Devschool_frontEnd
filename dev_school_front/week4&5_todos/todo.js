import { 
    LitElement, html, css } 
from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'


class Todo extends LitElement{
    static get styles(){
        return css`.todo-checked{color:red;}`
    }
    static get properties(){
        return{
            id: {type: Number}, 
            name: {type: String},
            done: {type: Boolean},
            state: {type: String},
        };
    }
    render() {
        return html`
        <div class="${this.done ? "todo-checked" : ""}">
            ${this.name} 
            ${this.state == "editing" ? 
            html`
                <input id="newtitle" type="text" value="${this.name}">
                <button @click="${this.handleSaveClick}">Save</button>
                <button @click="${this.handleCancelClick}">Cancel</button>
            `
            :
            html`
            
            
            <input type="checkbox" ?checked="${this.done}" @click="${(event) => this.handleClick(event)}"/>
            <button @click="${this.handleEditClick}">Edit</button>
            `}
        </div>
        `;
    }

    handleClick(event) {
        this.dispatchEvent(new CustomEvent("checkboxClick",{
            detail:{
                id: this.id,
                // done: !this.done,
                //echivalent:
                done: event.target.checked,
            }
        }));

    }
    handleEditClick(event){
        this.state = "editing";
    }

    handleCancelClick(event){
        this.state = "";
    }
    handleSaveClick(event){
        this.state="";
        this.dispatchEvent(new CustomEvent("todoUpdateTitle",{
            detail:{
                name: this.shadowRoot.querySelector("#newtitle").value,
                id: this.id
            }
        }));
    }
}

export default customElements.define("my-todo", Todo);
