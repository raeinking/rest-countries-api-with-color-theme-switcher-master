fetch("https://restcountries.com/v2/all")
.then((response) => response.json())
.then((data) => this.countries(data));

let dark = document.getElementById('light')

dark.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode-nav')
})