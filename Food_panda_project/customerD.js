let count =JSON.parse(localStorage.getItem('countTotal')) || 0 ;
let foodValue= JSON.parse(localStorage.getItem('count-total')) || 0 ;

let arr = JSON.parse(localStorage.getItem('derails'))

document.getElementById('appendzip').placeholder=arr[0].zip
document.getElementById('appendzip').style.cursor="not-allowed"

document.getElementById('email').value=arr[0].email


// ------------------------- check out and sign up page --------------------

let finalDetails = JSON.parse(localStorage.getItem('final-details')) || [] ;

let cust_form= document.querySelector('#details-form')
cust_form.addEventListener('submit',function(event){
    event.preventDefault()

    let obj={
        fname: Fname.value,
        lname: Lname.value,
        address: Address.value,
        city: city.value,
        state: state.value,
        number: phone.value,
        email: email.value || arr[0].email,
        zip:arr[0].zip,
    }

    finalDetails.push(obj)
    localStorage.setItem('final-details',JSON.stringify(finalDetails)) ;
    window.location.replace("payment.html")
})

document.querySelectorAll('input[type="number"]').forEach(input=>{
    input.oninput = ()=> {
        if(input.value.length>input.maxLength) input.value = input.value.slice(0,input.maxLength);
    }
})

let item = document.getElementById('items')
let amt =document.getElementById('amount')
item.innerText=count;
amt.innerText=foodValue

let promo= document.getElementById('promocode')
promo.addEventListener('click',function(){
   document.getElementById('promo_code').style.display="flex" ;
   document.getElementById('apply').style.display="flex";

    promo.style.display="none"
    document.getElementById('apply').style.cursor="pointer"

})

document.getElementById('apply').addEventListener('click',function(){
    if(document.getElementById('promo_code').value=="masai30"){
        promo.style.display="flex";
        document.getElementById('promo_code').style.display="none" ;
        document.getElementById('apply').style.display="none";

        document.getElementById('dicount').innerText= 10;
        foodValue=foodValue-10;
        document.getElementById('total_bill').innerText=foodValue;
        document.getElementById('pay-total').innerText=foodValue;
    }
})
document.getElementById('total_bill').innerText=foodValue;
document.getElementById('pay-total').innerText=foodValue;


// let code = document.getElementById()