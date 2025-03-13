const inputBox = document.getElementById("inputbox"); 
        const addbtn = document.getElementById("addbtn");
        const todolist = document.getElementById("todolist");
        
        const addtodo = () => {
            const inputText = inputBox.value.trim(); 
            if (inputText.length <= 0) {
                alert("You must enter a task!");
                return; 
            }
        
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.innerHTML = inputText;
            li.appendChild(p);
        
            // Complete Button
            const completebtn = document.createElement("button");
            completebtn.innerText = "Complete";
            completebtn.classList.add("btn", "completebtn");
            
            completebtn.addEventListener("click", () => {
                p.style.textDecoration = "line-through"; 
                completebtn.disabled = true;
                completebtn.style.opacity = "0.5"; 
            });
        
            li.appendChild(completebtn);
        
            // Delete Button
            const deletebtn = document.createElement("button");
            deletebtn.innerText = "Delete";
            deletebtn.classList.add("btn", "deletebtn");
        
            deletebtn.addEventListener("click", () => {
                li.remove(); // Task delete kar dega
            });
        
            li.appendChild(deletebtn);
        
            todolist.appendChild(li);
            inputBox.value = ""; // Clear input field after adding
        };
        
        // Add event listener for button click
        addbtn.addEventListener("click", addtodo);
        