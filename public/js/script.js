// preventing some anchors to redirect
document.querySelectorAll('#header-btns a, .langs a').forEach((ele) => {
    ele.addEventListener('click', e => e.preventDefault());
});

// theme toggle hangler
document.querySelector('#theme-toggle').addEventListener('change', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
});