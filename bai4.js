// Hàm tính tổng
function tong(a, b) {
    return a + b;
}

// Hàm tính hiệu
function hieu(a, b) {
    return a - b;
}

// Hàm tính tích
function tich(a, b) {
    return a * b;
}

// Hàm tính thương
function thuong(a, b) {
    if (b === 0) {
        return "Không thể chia cho 0";
    }
    return a / b;
}

// Hàm tính căn bậc hai
function canbachai(a) {
    if (a < 0) {
        return "Không thể tính căn bậc hai của số âm";
    }
    return Math.sqrt(a);
}

// Hàm tính lũy thừa
function luythua(a, b) {
    return Math.pow(a, b);
}

// Test chương trình
console.log("Tổng: ", tong(5, 3)); // Kết quả: 8
console.log("Hiệu: ", hieu(5, 3)); // Kết quả: 2
console.log("Tích: ", tich(5, 3)); // Kết quả: 15
console.log("Thương: ", thuong(5, 3)); // Kết quả: ~1.6667
console.log("Căn bậc hai: ", canbachai(25)); // Kết quả: 5
console.log("Lũy thừa: ", luythua(2, 3)); // Kết quả: 8
