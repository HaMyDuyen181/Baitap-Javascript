function checkStudentID() {
    var studentID = prompt("Nhập mã sinh viên của bạn:");
    
    if (studentID === "2122110528") {
        alert("Chào mừng bạn đến với trang web!");
    } else {
        var confirmResult = confirm("Mã sinh viên không đúng. Bạn có muốn nhập lại không?");
        if (confirmResult) {
            checkStudentID();
        } else {
            alert("Cảm ơn bạn đã ghé thăm!");
            window.close();
        }
    }
}
checkStudentID();