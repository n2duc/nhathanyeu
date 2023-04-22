
const box = document.querySelectorAll(".image");
box.forEach((item) => {
    let scale = 0;
    let img = item.querySelector(".zoom");
    item.addEventListener("mousemove", (e) => {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop + window.scrollY - 110;
        img.style.transformOrigin = `${x}px ${y}px`;
    });
    item.addEventListener("wheel", (e) => {
        e.preventDefault();
        scale += e.deltaY * -0.01;
        scale = Math.min(Math.max(1, scale), 3.5);
        img.style.transform = `scale(${scale})`;
    });
    item.addEventListener("mouseleave", (e) => {
        img.style.transformOrigin = `center`;
        img.style.transform = "scale(1)";
    });
});
