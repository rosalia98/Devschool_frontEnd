import { LitElement, html, css } 
    from 'lit-element';

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
            
            <form @submit="${ this.handleAddedTodo}">
                <input name="newTodo" id="newTodo" type="text" placeholder="New to-do...">
                <button type="submit">Add TODO</button>
            </form>
            <ul>
                ${this.todos.map((item, index) => {
                    return html`
                        <my-todo 
                            .id="${index}" 
                            .name="${item.name}" 
                            .done="${item.done}" 
                            @checkboxClick="${this.handleCheckboxClickEvent}"
                            @todoUpdateTitle="${this.handleTodoUpdate}"
                            >
                        </my-todo>`
                    })}
            </ul>
        `;
    }

    handleCheckboxClickEvent(event){
        const id = event.detail.id;
        const done = event.detail.done;

        let newTodos = [...this.todos];
        newTodos[id].done = done;
        this.todos  = newTodos;
    }
    handleAddedTodo(event){
        //prevent refresh:
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log(formData.get("newTodo"));
        
        let newTodos = [...this.todos, 
            {name: formData.get("newTodo"), 
            done: false,
            }
        ];
        this.todos = newTodos;
    }
    handleTodoUpdate(event){
        const id = event.detail.id;
        const name = event.detail.name;
        
        console.log(name, id);
        let newTodos = [...this.todos];
        newTodos[id].name = name;
        this.todos  = newTodos;
    }
}
customElements.define('my-todos', Todos);
