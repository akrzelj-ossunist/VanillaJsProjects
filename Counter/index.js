const counters = +prompt("How many counters do you want?")

for(let i = 0; i < counters; i++){
    let div = document.createElement('div')
    div.className = 'div'
    div.id = 'div' + (i + 1)
    document.body.appendChild(div)
    let h1 = document.createElement('h1')
    h1.textContent = 'Counter ' + (i + 1)
    let p = document.createElement('p')
    p.textContent = 0
    div.appendChild(h1)
    div.appendChild(p)
    let div1 = document.createElement('div')
    let decrease = document.createElement('button')
    let reset = document.createElement('button')
    let increase = document.createElement('button')
    decrease.className = 'decrease'
    decrease.type = 'button'
    decrease.textContent = 'Decrease'
    reset.className = 'reset'
    reset.type = 'button'
    reset.textContent = 'Reset'
    increase.className = 'increase'
    increase.type = 'button'
    increase.textContent = 'Increase'
    div1.appendChild(decrease)
    div1.appendChild(reset)
    div1.appendChild(increase)
    div.appendChild(div1)
    document.querySelector('div')
}

class Counter{
    constructor(block, num){
        this.block = block
        this.block.querySelector('p').textContent = num

        this.decrease = block.querySelector('.decrease')
        this.reset = block.querySelector('.reset')
        this.increase = block.querySelector('.increase')

        this.decrease.addEventListener('mousedown', () => {
            this.block.querySelector('p').textContent = +this.block.querySelector('p').textContent - 1
        })

        this.increase.addEventListener('mousedown', () => {
            this.block.querySelector('p').textContent = +this.block.querySelector('p').textContent + 1
        })

        this.reset.addEventListener('mousedown', () => {
            this.block.querySelector('p').textContent = 0
        })
    }
}

const counterOne = new Counter(document.querySelector('#div1'), 100)
const counterTwo = new Counter(document.querySelector('#div2'), 200)
const counterThree = new Counter(document.querySelector('#div3'), 2400)