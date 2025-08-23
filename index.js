let home = 0
let guest = 0

let homeEl = document.getElementById('home-num')
let guestEl = document.getElementById('guest-num')

function add1home(){
    home += 1
    homeEl.textContent = home
}

function add2home(){
    home += 2
    homeEl.textContent = home
}

function add3home(){
    home += 3
    homeEl.textContent = home
}

function add1guest(){
    guest += 1
    guestEl.textContent = guest
}

function add2guest(){
    guest += 2
    guestEl.textContent = guest
}

function add3guest(){
    guest += 3
    guestEl.textContent = guest
}

function ng(){
    home = 0
    homeEl.textContent = 0
    
    guest = 0
    guestEl.textContent = 0
}