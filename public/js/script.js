// preventing some anchors to redirect
document.querySelectorAll('#header-btns a, .langs a').forEach((ele) => {
    ele.addEventListener('click', e => e.preventDefault());
});