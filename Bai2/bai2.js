
function addSubject() {
    var inputElement = document.getElementById("subjectName");
    var subjectName = inputElement.value.trim();
   
    if (subjectName === "") {
        alert("Vui lòng nhập tên môn học.");
        return;
    }
    var listItem = document.createElement("li");
    listItem.textContent = subjectName;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Xóa";
    deleteButton.onclick = function() {
        listItem.remove(); 
    };

    listItem.appendChild(deleteButton);


    var subjectList = document.getElementById("subjectList");
    subjectList.appendChild(listItem);
    inputElement.value = "";
}

var addButton = document.getElementById("addButton");
addButton.addEventListener("click", addSubject);
