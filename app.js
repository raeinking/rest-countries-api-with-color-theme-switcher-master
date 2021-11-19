fetch("https://restcountries.com/v2/all")
.then((response) => response.json())
.then((data) => this.countries(data));

function countries(data) {
    for (var i = 0; i < 250; i++) {
        var image = data[i].flag
        var name = data[i].name
        var population = data[i].population
        var capital = data[i].capital
        var region = data[i].region    

        const container = document.getElementById('all-country')

        const create = document.createElement("div")
        create.setAttribute("class", "lists")
        create.setAttribute('id', `"list${[i]}"`)
        container.appendChild(create)
    
        var img = document.createElement("img")
        img.src = image

        var nameCountry = document.createElement("p")
        nameCountry.setAttribute("class", "country")
        nameCountry.innerText = name

        var pop = document.createElement("p")
        pop.setAttribute("class", "population")
        pop.innerText = `Population: ${population}`

        var reg = document.createElement("p")
        reg.setAttribute("class", "regions")
        reg.innerText = `Region: ${region}`

        var cap = document.createElement("p")
        cap.setAttribute("class", "capital")
        cap.innerText = `Capotal: ${capital}`

        var lists = document.getElementById(`"list${[i]}"`)

        lists.appendChild(img)
        lists.appendChild(nameCountry)
        lists.appendChild(pop)
        lists.appendChild(reg)
        lists.appendChild(cap)
}   
}