import { LitElement, html, css } 
    from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

import "./todo.js";

class Todos extends LitElement{
    static get styles(){
        return css`
        .todo-checked{
            color: red;
        }`;
    }
    static get properties(){
        return {
            todos: {type: Array},
            title: {type: String}, 
        }
    }
    constructor(){
        super();
        this.title = "My TODO App";
        this.todos = [
            {
                name: "De cumparat mere",
                done: true,
            },
            {
                name: "pagina 3 licenta", 
                done: false,
            },
        ]
    }
    render(){
        return html`
        <h2> ${this.title} </h2>
        <ul>
        ${this.todos.map((item, index) => {
            return html`
            <my-todo .name="${item.name}" .done="${item.done}"></my-todo>
            `
        })}
        </ul>
        `;
    }
    handleClick(event, index){
        const newTodos = [...this.todos];
        newTodos[index].done = event.currentTarget.checked;
        this.todos = newTodos;
    }
    
}
customElements.define('my-todos', Todos);
