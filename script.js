document.getElementById('pizzaType').addEventListener('change', function() {
    var ingredients = document.getElementById('ingredients');
    if (this.value) {
        ingredients.style.display = 'block';
    } else {
        ingredients.style.display = 'none';
    }
});
