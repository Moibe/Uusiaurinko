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
const optionButton=(e)=>{

if(e.classList.contains('optionOne')){
    e.classList.remove('optionOne')
    e.classList.add('optionTwo')
    e.innerHTML=`Option B`;
    formText.innerHTML=`My Form Version B`
    body.classList.remove('ۙient')
    body.classList.add('gradient1')
    $('#adddedSuccessfull').css('display', 'none')
    $('.growing-bar').addClass('growing_barB')
    // $('#barid').css('visibility', 'hidden')
    // glass1.classList.add('animate__bounceInLeft')
    // glass2.classList.remove('animate__fadeInRight')
    // glass1.style.display='block';
    // glass2.style.opacity='0';
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
    $('.growing-bar').removeClass('growing_barB')
    $('.growing-bar').addClass('growing_bar')
    $('#adddedSuccessfull').css('display', 'none')
    // $('#barid').css('visibility', 'hidden')
    // glass1.classList.remove('animate__bounceInLeft')
    // glass2.classList.remove('animate__fadeInRight')
    // glass1.style.display='block';
    // glass2.style.opacity='0';
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
        e.setAttribute("disabled", "false")
        setTimeout(function () {
            $('#adddedSuccessfull').css('display', 'block')
            e.removeAttribute("disabled", "true")
            field1.value='';
            field2.value ='';
            field3.value='';
        }, 13000)
    }
    else{
        $('#barid').css('visibility', 'visible')
        $('.growing-bar').removeClass('growing_bar')
        $('.growing-bar').addClass('growing_barB')
        e.setAttribute("disabled", "false")
    
        setTimeout(function () {
            // $('#barid').css('visibility', 'hidden')
        }, 13000)
        setTimeout(function () {
            $('#adddedSuccessfull').css('display', 'block')
            e.removeAttribute("disabled", "true")
            field1.value='';
            field2.value ='';
            field3.value='';
        }, 13000)
    }
}