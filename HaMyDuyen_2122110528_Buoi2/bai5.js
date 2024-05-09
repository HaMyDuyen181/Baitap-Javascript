// Khai báo mảng arrNumber và arrStr
const arrNumber = [9, 3, 5, 8, 1, 4, 3, 2];
const arrStr = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

// Thêm số 10 vào đầu và cuối mảng arrNumber
arrNumber.push(10);
arrNumber.unshift(10);

// Xóa số đầu và cuối mảng arrNumber
arrNumber.pop();
arrNumber.shift();

// Sắp xếp tăng dần mảng arrNumber và arrStr
arrNumber.sort((a, b) => a - b);
arrStr.sort();

// Lấy ra mảng con từ vị trí 3 đến 5 từ mảng arrNumber
const subArrNumber = arrNumber.slice(3, 6);

// Xóa 1 phần tử tại vị trí 3 và thêm 3 phần tử bất kỳ trong mảng arrNumber
arrNumber.splice(3, 1, 11, 12, 13);

// Tìm vị trí đầu tiên phần tử có giá trị 3 trong mảng arrNumber
const firstIndexOf3 = arrNumber.indexOf(3);

// Tìm vị trí cuối cùng phần tử có giá trị 3 trong mảng arrNumber
const lastIndexOf3 = arrNumber.lastIndexOf(3);

// Kiểm tra phân tử có giá trị 3 có trong mảng arrNumber không
const includes3 = arrNumber.includes(3);

// Duyệt mảng arrNumber bằng forEach
arrNumber.forEach(item => console.log(item));

// Duyệt mảng arrNumber bằng map
const mappedArrNumber = arrNumber.map(item => item * 2);

// Lọc những phần tử có giá trị lớn hơn 5 trong mảng arrNumber
const filteredArrNumber = arrNumber.filter(item => item > 5);

// Tính tổng các phần tử mảng arrNumber
const sumArrNumber = arrNumber.reduce((acc, curr) => acc + curr, 0);

// Nối 2 mảng arrNumber và arrStr lại thành 1 mảng
const concatenatedArr = arrNumber.concat(arrStr);

// Nối các phần tử mảng arrStr các nhau bởi dấu "-"
const joinedArrStr = arrStr.join("-");

// Gán tất cả các phần tử mảng arrNumber bằng 0
arrNumber.fill(0);

// Sao chép một hoặc nhóm phần tử từ vị trí này sang vị trí khác cùng mảng
arrNumber.copyWithin(0, 3, 6);

// Tìm kiếm phần tử trong mảng thỏa mãn điều kiện
const foundItem = arrNumber.find(item => item > 5);
const foundIndex = arrNumber.findIndex(item => item > 5);

// Tìm kiếm phần tử cuối cùng trong mảng thỏa mãn điều kiện
const foundLastItem = arrNumber.reverse().find(item => item > 5);
const foundLastIndex = arrNumber.reverse().findIndex(item => item > 5);

// Kiểm tra tất cả các phần tử thỏa mãn điều kiện
const allMatchCondition = arrNumber.every(item => item > 5);

// Kiểm tra ít nhất một phần tử thỏa mãn điều kiện
const someMatchCondition = arrNumber.some(item => item > 5);
