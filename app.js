fetch("https://restcountries.com/v2/all")
.then((response) => response.json())
.then((data) => this.countries(data));

let dark = document.getElementById('light')
let cont = document.getElementById('container')
let sear = document.getElementById('sear')
let dear = document.getElementById('search')
var filter = document.getElementById('filter')
var filreg = document.getElementById('filter-region')
let lists = document.getElementsByClassName('lists')

function test(){

    
    for(let i = 0 ; i < lists.length; i++) {
        
        
        
        // if (gg = test()) {
        //     console.log('test')
        // }
        
        
        

        var gg = document.getElementById(`"list${i}"`)
        console.log(gg)
    }

    // console.log(lists)


}
// document.addEventListener("click", function() {
    


// }) 








function countries(data) {
    for (var i = 0; i < 250; i++) {
        var image = data[i].flag
        var name = data[i].name
        var population = data[i].population
        var capital = data[i].capital
        var region = data[i].region    
        
        var container = document.getElementById('all-country')
        
        var create = document.createElement("div")
        create.setAttribute("class", "lists")
        create.setAttribute('onclick' , 'test()')
        create.setAttribute('id', `"list${[i]}"`)
        container.appendChild(create)
        
        var img = document.createElement("img")
        img.src = image
        
        var nameCountry = document.createElement("p")
        nameCountry.setAttribute("class", "country")
        nameCountry.setAttribute("id", 'namess' )
        nameCountry.innerText = name
        
        var pop = document.createElement("p")
        pop.setAttribute("class", "population")
        pop.innerText = `Population: ${population}`
        
        var reg = document.createElement("p")
        reg.setAttribute("class", "regions")
        reg.setAttribute("id", `regions${[i]}`)
        reg.innerText = region
        
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

function search_names() {
    
    let input = document.getElementById('search').value;
    input = input.toLowerCase();
    let country = document.getElementsByClassName('country')
    let lists = document.getElementsByClassName('lists')
    
    for (var i = 0 ; i < country.length ; i++) {
        if (!country[i].innerText.toLowerCase().includes(input)) {
            lists[i].style.display= 'none'
        }else{
            lists[i].style.display = ''
        }
    }
}


dark.addEventListener('click', function() {
    for(let v = 0 ; v < lists.length; v++) {
        let lisa = document.getElementById(`"list${[v]}"`)
        lisa.classList.toggle('dark-mode-list')            
    }
    
    cont.classList.toggle('dark-mode-container')
    document.body.classList.toggle('dark-mode-nav')
    filter.classList.toggle('dark-mode-list')
    filreg.classList.toggle('dark-mode-list')
    sear.classList.toggle('dark-mode-list')
    dear.classList.toggle('dark-mode-list')
})

filter.addEventListener('click', function() {
    filreg.classList.toggle('open-filter');
})

for (let i = 0 ; i < 5; i++) {
    let liss = document.querySelector(`#lis${i}`)
    
    liss.addEventListener('click', function() {

        for(let a = 0 ; a < lists.length; a++) {
            let listt = document.getElementsByClassName(`regions`)
        
            if (listt[a].innerText == liss.innerText) {
                lists[a].style.display = ""
            }else {
                lists[a].style.display = 'none'
            }
        }
    })
}