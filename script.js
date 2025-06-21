let inputTodoElem = document.querySelector('.js-input-todo');
        let addTodoElem = document.querySelector('.js-add-todo');
        let todoListElem = document.querySelector('.js-todo-list');
        let storedTodoList = localStorage.getItem('todoList');
        let todoList = storedTodoList ? JSON.parse(storedTodoList) : [];
        addTodoList(todoList);
        
        
        
        function handleKeyDown(event){
            if(event.key === 'Enter' && inputTodoElem.value !== ''){
                displayTodoList();
                inputTodoElem.value = '';
            }
        }

        function addTodoList(todoList){
            todoListElem.innerHTML = '';
            let todoListSize = todoList.length;
            for(i=0;i<todoListSize;i++){
                todoListElem.innerHTML +=
                 `<li>
                    <div class='js-todo-section'>
                        <div class='list-details'>
                            ${todoList[i]}
                        </div>
                        <div class='js-delete-btn'>
                            <i class="fa fa-trash" aria-hidden="true" style="color:red; margin-left:5px;"></i>
                        </div>
                    </div>
                </li>`;
            }
            deleteTask();
        }

        function deleteTask(){
            const listSectionElem = document.querySelectorAll('.js-todo-section');

            listSectionElem.forEach((listSection,index) =>{
                const deleteButtonElem = listSection.querySelector('.js-delete-btn');
                deleteButtonElem.addEventListener('click', function(){
                    todoList.splice(index,1);

                    localStorage.setItem('todoList',JSON.stringify(todoList));

                    addTodoList(todoList);
                });
            });
        }

        function displayTodoList() {
            let task = inputTodoElem.value;
            if (todoList.includes(task)) {
                alert('Must not input the same task!');
                inputTodoElem.value = '';
            }
            
            else {
                todoList.push(task);
                localStorage.setItem('todoList', JSON.stringify(todoList));
                addTodoList(todoList);
                inputTodoElem.value = '';
            }
        }


        addTodoElem.addEventListener('click', function(){
            if(inputTodoElem.value === ''){
                alert('input a task');
                
            }
            else{
                displayTodoList();
                
            }
            
        });