
document.getElementById('bar').addEventListener('click', function() {
    var categoryBar = document.querySelector('.catforbar');
    if (categoryBar.style.display === 'none') {
        categoryBar.style.display = 'block';
    } else {
        categoryBar.style.display = 'none';
    }
});