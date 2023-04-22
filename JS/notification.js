/* Dành cho đoạn hiển thị thông báo sau khi bấm nút Send */
function myFunction() {
    var x = document.getElementById("frm1");
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
        text +=
            "Thank you, we will send you an e-mail to " +
            x.elements[i].value +
            ", enclose our new information.";
    }
    document.getElementById("demo_n").innerHTML = text;
}