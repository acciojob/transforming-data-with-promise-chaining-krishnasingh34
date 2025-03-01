//your JS code here. If required.
 let textbox = document.querySelector('#ip')
let output = document.querySelector('#output')
let btn = document.querySelector('#btn')
btn.addEventListener('click',(e)=>{
	e.preventDefault()
	let text = parseFloat(textbox.value)
	function updateTask(task, time){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(task)
            },time)
        })
    }
    updateTask(text, 2000)
    .then(data =>{
        output.innerText = 'Result: '+data
        return updateTask(data*2, 2000)
    })
    .then(data =>{
        output.innerText = 'Result: '+data
        return updateTask(data-3, 1000)
    })
    .then(data =>{
        output.innerText = 'Result: '+data
        return updateTask(data/2, 1000)
    })
    .then(data =>{
        output.innerText = 'Result: '+data
        return updateTask(data+10, 1000)
    })
    .then(data =>{
        output.innerText = 'Final Result: '+data
    })
    .catch(err => {console.log(err)})
})