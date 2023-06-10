//what were trying to do...
//create a button 
//once we click on the button we add a input 
//once we type in input an eventhandler runs and stores the input 
// we add that input to the amountsArray.
// we map over amountsArray and we print the results.

const addPersonBtn = document.getElementById('add-person')
const tBody = document.getElementById('tbody')

const form = document.getElementById('form')

let shecvla = true 




const getValue = (event) => {
    const val = event.target.value 
    value = {
        amount: val 
    } 
    amountArray.push(value)
    console.log(amountArray)
}



let testing = true
//increase amount
// const inputsArray = []
// const trying = () => {
//     let el = `<input onSubmittype='text' value='' `

    
//         if( shecvla === true ) {
//             arr = amountArray.map(item => {
//                 return `<input type='number' class='box'  oninput="getValue(event)"value="${item.amount}" />`
//             })
//             form.innerHTML = arr.join('')
//              shecvla = false
//              return 
//         } else if(shecvla === false) {
//            el = `<input type='number' class='box' oninput='getValue(event)' value=''/>`
//            arr.push(el)
//            form.innerHTML = arr.join('')
//            shecvla = true
//              return 
//         } 
// }
// addPersonBtn.addEventListener('click', trying)

// const {total} = arr.reduce((acc,item) => {
//     acc.total += item 
//     return acc
// }, {
//     total:0  
// })

// addPersonBtn.textContent = total


//we first map an object,
// than we need to create 1 input element, than we add a number, we add that number to amountArray too
// than we simply display amount array
let element = null

let amount = null 
let numberAmount = []
let totalval = [] 
let allEvents = []
let amountOfSubmits = 0
const dis = false 
const formSubmit = (event) => {
   event.preventDefault()
   
     
   
        
       numberAmount.push({amount: event.target.value, id: event.target.id}) 
       console.log(event.target.id)
        event.target.disabled = true
        event.target.style.background = 'red'
}

let arr = []
let value = null;

const addPerson = () => {
    const id = Math.floor(Math.random()*9999)
    const displayingAmount = numberAmount.map(item => {
        
        return `<input id="${item.id}" disabled type='text' class='box red' onchange="formSubmit(event)"
        value='${item.amount}'/>`
    }).join('')
    
    element = `<input id=""  type='text' onchange="formSubmit(event)" class='box'
    value=''/>`
   
    
    const manyElements = Array.from({length: 5}, (_,index) => {
        const newId = Math.floor(Math.random()*9999)
        return `<input id="${newId}"  type='text' onchange="formSubmit(event)" class='box'
        value=''/>`
    }).join('')
    
    const allArrays = [...displayingAmount, manyElements]
    form.innerHTML = allArrays.join('')
    
}
addPersonBtn.addEventListener('click', addPerson)

//we add an id when we click submit... when we create an element, not after its created...
//level 2 - create multiple fields...
// how can i add in a multiple fields
// i need to create a field with id already
// i need to create 1 field with id, and add id to all previous inputs
// i need to create 5 boxes and add id's to all of them.