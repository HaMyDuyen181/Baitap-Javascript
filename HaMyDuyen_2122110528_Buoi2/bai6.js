function digitalClock() {
    // Lấy thời gian hiện tại
    let currentTime = new Date();

    // Lấy giờ, phút và giây
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    // Định dạng thời gian thành chuỗi
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // Hiển thị thời gian trên đồng hồ
    document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds;

    // Cập nhật thời gian sau mỗi giây
    setTimeout(digitalClock, 1000);
}

// Gọi hàm digitalClock để bắt đầu hiển thị đồng hồ
digitalClock();
