import { getStore } from "../models/store"
import { updateToDo } from "../models/toDoListModel"
import { addToDo } from "../models/toDoListModel";

export function addToDoController() {
    const createFormDialog = document.querySelector('#create-to-do');
    const closeButton = createFormDialog.querySelector('button[id="close"]');
    createFormDialog.showModal();

    closeButton.addEventListener('click', () => {
        createFormDialog.close(); 
    });

    const createForm = document.querySelector('#create-form');
    createForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const newToDo = {
            category: event.target.elements.category.value,
            status: event.target.elements.status.value,
            todo: event.target.elements.todo.value,
        };

        addToDo(newToDo); 
        createForm.reset(); 
    });
}