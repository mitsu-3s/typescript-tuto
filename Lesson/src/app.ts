let appId = 'abc'
const button = document.querySelector('button')! as HTMLButtonElement

function add(n1: number, n2: number) {
    if (n1 + n2 > 0) {
        return n1 + n2
    }
    return
}

function clickHandler(message: string) {
    // let userName = 'Max'
    console.log('Clicked' + message)
}

// a commnet
if (button) {
    button.addEventListener('click', clickHandler.bind(null, "Your welcome!"))
}