function convertToURLFriendly(inputString) {
    // Loại bỏ khoảng trắng
    let urlFriendlyString = inputString.trim();

    // Loại bỏ các thẻ HTML
    urlFriendlyString = urlFriendlyString.replace(/<\/?[^>]+(>|$)/g, "");

    // Loại bỏ các ký tự đặc biệt
    urlFriendlyString = urlFriendlyString.replace(/[^\w\s]/gi, "");

    // Thay thế khoảng trắng bằng dấu gạch dưới (_) hoặc dấu gạch ngang (-)
    urlFriendlyString = urlFriendlyString.replace(/\s+/g, "-");

    return urlFriendlyString;
}

// Test chương trình
let inputString = "   This is <b>an example</b> string with & special characters   ";
let urlFriendlyString = convertToURLFriendly(inputString);
console.log(urlFriendlyString); // Kết quả: "This-is-an-example-string-with-special-characters"
