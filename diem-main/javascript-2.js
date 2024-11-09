

document.getElementById("button-right-html-2").onclick = function() {
    if (document.getElementById("passwords").value == "0366304131"){
      // Lấy phần tử có id là "button-right-html-2"
      const buttonElement = document.getElementById("button-right-html-2");

      // Tạo một thẻ <a></a>
      const linkElement = document.createElement("a");
      linkElement.href = "html-3.html"; // Đặt đường dẫn href cho thẻ <a>
      linkElement.id = "web-3"; // Đặt id cho thẻ <a>
      linkElement.style.textDecoration = "none"; // Đặt kiểu chữ không gạch chân
      linkElement.style.color = "white"; // Đặt màu chữ là trắng

      // Di chuyển nội dung của thẻ <button> vào thẻ <a>
      linkElement.textContent = buttonElement.textContent;

      // Xóa nội dung của thẻ <button>
      buttonElement.textContent = '';

      // Gắn thẻ <a> vào bên trong thẻ <button>
      buttonElement.appendChild(linkElement);
    }else {
      document.getElementById("nhap").innerHTML = "Mật khẩu của bạn không đúng "
    }

}