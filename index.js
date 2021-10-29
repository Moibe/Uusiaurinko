const myInputOne = (e) => {
    document.getElementById('nameText').innerHTML = e.value;
}

const myInputTwo = (e) => {
    document.getElementById('lastnameText').innerHTML = e.value;
}
const myInputThree = (e) => {
    document.getElementById('cityText').innerHTML = e.value;
}
const myInputFour = (e) => {
    document.getElementById('numberText').innerHTML = e.value;
}

const myClick = (e) => {
    if (nameOne.value >= '0' && (lastnameOne.value >= '0') && (cityOne.value >= '0') && (numberOne.value >= '0')) {

        $('#barid').css('visibility', 'visible')
        $('.growing-bar').addClass('growing_bar')
        e.setAttribute("disabled", "false")

        setTimeout(function () {
            $('#barid').css('visibility', 'hidden')
        }, 13000)
        setTimeout(function () {
            $('#adddedSuccessfull').css('display', 'block')
        }, 14000)
    } else {
        alert('fill inputs ')
    }
    // e.preventDefault()
}