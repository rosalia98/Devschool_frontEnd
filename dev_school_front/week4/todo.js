import { 
    LitElement, html, css } 
from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'


class Todo extends LitElement{
    static get styles(){
        return css`.todo-checked{color:red;}`
    }
    static get properties(){
        return{
            name: {type: String},
            done: {type: Boolean},
        };
    }
    render() {
        return html`
        <div class="${this.done ? "todo-checked" : ""}">
            ${this.name} 
            <input type="checkbox" ?checked="${this.done}" @click="${(event) => this.handleClick(event, index)}"/>
        </div>
        `;
    }

     handleClick(event, index) {
        const newTodos = [...this.todos]; //copie
        newTodos[index].done = event.currentTarget.checked;
        this.todos = newTodos;
    }
}

export default customElements.define("my-todo", Todo);
