function resizeCanvas() {
    const canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
}

window.addEventListener('load', resizeCanvas);
window.addEventListener('resize', resizeCanvas);