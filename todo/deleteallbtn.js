const deleteAllButton = document.getElementById('delete-all-button');

// Add event listener for delete all button
deleteAllButton.addEventListener('click', function() {
    if (confirm("Are you sure you want to delete all todos ?")) { // Optional confirmation
        allTodos = []; // Clear all todos
        updateTodoList(); // Update the list on the page
        saveTodos(); // Save the empty list to localStorage
    }
});

function updateTodoList(){
    todoListUL.innerHTML = "";
    allTodos.forEach((todo, todoIndex)=>{
        todoItem = createTodoItem(todo, todoIndex);
        todoListUL.append(todoItem);
    })

    // Show or hide the "Delete All" button based on the number of tasks
    if (allTodos.length >= 2) {
        deleteAllButton.style.display = "block";
    } else {
        deleteAllButton.style.display = "none";
    }
}
