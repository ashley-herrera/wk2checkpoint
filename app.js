
let ducks = 0

let clickUp={
    bread: {
        price: 50,
        quantity: 0,
        multiplier: 1
    }
}

let autoUp={
    pond: {
        price: 100,
        quantity: 0,
        multiplier: 5
    }
}


function collectDucks(){
    ++ducks
    console.log(ducks)
    update()
}

function buyBread(){
    
    if (ducks = clickUp.bread.price){
        ducks -= clickUp.bread.price
        ++clickUp.bread.quantity
    }
    update()    
}

function startInterval(){
    collectionInterval = setInterval(collectAutoUp, 3000)
}

function update(){
    document.getElementById("rubber").innerText = `${ducks}`
    document.getElementById("crumbs").innerText = `${clickUp.bread.quantity}`
}