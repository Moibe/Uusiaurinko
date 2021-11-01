const myInputOne = (e) => {
    document.getElementById('nameText').innerHTML = e.value;
    glass2.style.opacity=1;
    glass2.classList.add('animate__fadeInRight')
}

const myInputTwo = (e) => {
    document.getElementById('lastnameText').innerHTML = e.value;
    glass2.style.opacity=1;
    glass2.classList.add('animate__fadeInRight')
}
const myInputFour = (e) => {
    document.getElementById('numberText').innerHTML = e.value;
    glass2.style.opacity=1;
    glass2.classList.add('animate__fadeInRight')
}
let timing = 8;
const optionButton=(e)=>{
if(e.classList.contains('optionOne')){
    e.classList.remove('optionOne')
    e.classList.add('optionTwo')
    e.innerHTML=`Option B`;
    formText.innerHTML=`My Form Version B`
    body.classList.remove('ۙient')
    body.classList.add('gradient1')
    // $('#adddedSuccessfull').css('display', 'none')
    $('.growing-bar').removeClass('growing_barA')
    $('.growing-bar').removeClass('growing_barBPurple')
    $('.growing-bar').addClass('growingBarAnimation')
    glass2.classList.remove('animate__fadeInRight')
    glass2.classList.remove('animate__fadeIn')
}
else{
    e.classList.remove('optionTwo');
    e.classList.add('optionOne');
    e.innerHTML=`Option A`;
    formText.innerHTML=`My Form Version A`
    body.classList.remove('gradient1')
    body.classList.add('gradient')
    // $('#adddedSuccessfull').css('display', 'none')
    $('.growing-bar').removeClass('growingBarAnimation')
    $('.growing-bar').removeClass('growing_barBPurple')
    $('.growing-bar').addClass('growing_barA')
    glass2.classList.remove('animate__fadeInRight')
    glass2.classList.remove('animate__fadeIn')
}
}
const myClick = (e) => {

  if (field1.value >= '0' && (field2.value >= '0') && (field3.value >= '0')) 
  {
      glass1.classList.add('animate__fadeOut');
      $('#glass1').css('opacity','0');
      optionDIv.classList.add('buttonDIvOptoveride')
      setTimeout(function(){ 
             $('#glass2').css('position','absolute')
            glass2.classList.remove('animate__fadeInRight')
            glass2.classList.add('animate__fadeInRight1')
         }, 1000);
  }
    if(buttonOption.classList.contains('optionOne')){
        $('#barid').css('visibility', 'visible')
        $('.growing-bar').removeClass('growing_barB')
        $('.growing-bar').addClass('growing_bar')
        // $('.growing-bar').css('animation',`${timing}s linear 0s 1 normal none running fill`);
        $('.growing-bar').addClass('growing_barA')
        e.setAttribute("disabled", "false")
        setTimeout(function () {
            $('#adddedSuccessfull').css('display', 'block')
            $('.growing-bar').css('animation','stop')
            field1.value='';
            field2.value ='';
            field3.value='';
        }, `${timing}000`)
    }
    //indeterminateAnimation 1s infinite linear;
    else{
        $('#barid').css('visibility', 'visible')
        $('.growing-bar').removeClass('growing_bar')
        $('.growing-bar').removeClass('growing_barA')
        // $('.growing-bar').css('animation',`${timing}s linear 0s 1 normal none running fill`);
        e.setAttribute("disabled", "false")
    
        setTimeout(function () {
        }, `${timing}000`)
        setTimeout(function () {
            $('#adddedSuccessfull').css('display', 'block')
            $('.growing-bar').css('animation','asad')
            e.removeAttribute("disabled", "stop")
            field1.value='';
            field2.value ='';
            field3.value='';
        }, `${timing}000`)
    }
}
const stopProgressBar=()=>{
    $('.growing-bar').css('animation','stop')
}