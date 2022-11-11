async function fetchfun(){
    try{
        let url = await fetch("https://636aaa04b10125b78fe1d6ca.mockapi.io/Foods")
        let data = await url.json()
        displayDiv(data)
    }catch(err){
        alert(err)
    }
}
fetchfun()
let product_data= JSON.parse(localStorage.getItem('add-data')) || []
let count =JSON.parse(localStorage.getItem('countTotal')) || 0 ;
let foodValue= JSON.parse(localStorage.getItem('count-total')) || 0

displayCart(product_data)

function displayDiv(data) {
    data.forEach((element,index )=> {
        let div = document.createElement('div')
        document.getElementById('products').append(div)
        
        let image = document.createElement('img')
        image.src = element.image;

        let name = document.createElement('h3')
        name.innerText = element.name;

        let cal = document.createElement('p')
        cal.innerText = `${element.cal} Cal`;

        let text = document.createElement('p')
        text.innerText = "Gluten Free";

        let serve = document.createElement('p')
        serve.innerText = "Single-Serve";

        let changebtn = document.createElement('div')
        changebtn.setAttribute("id","btn-div")

        let plus=document.createElement('p')
        plus.innerText="+"
        plus.addEventListener('click',function(){
            qtn_text.innerText=(+qtn_text.innerText)+1;
            
            let newData = JSON.parse(localStorage.getItem('add-data')) || []
            newData.push(element)
            localStorage.setItem('add-data',JSON.stringify(newData))
            displayCart(newData)
            count++
            localStorage.setItem('countTotal',count)
            itemCount.innerText=count;
            foodValue+=element.price
            localStorage.setItem('count-total',foodValue)
            totaCost.innerText=foodValue
     
            let x= document.querySelector('#Next>span')
            x.innerText= (+x.innerText)-1
            if((+x.innerText)==0){
                document.getElementById('Next').innerHTML="Next"
                document.getElementById('Next').style.cursor="pointer"
                document.getElementById('Next').style.backgroundColor="#217257";
                document.getElementById('Next').addEventListener('click',function(){
                    window.location.replace('file:///C:/Users/hp/OneDrive/Desktop/complete-verse-5539/Food_panda_project/customerD.html')
                })             
            }
        })

        let qtn_text=document.createElement('p')
        qtn_text.innerText=1

        let minus=document.createElement('p')
        minus.innerText="-"
        minus.addEventListener('click',function(){
            qtn_text.innerText=(+qtn_text.innerText)-1;
             deleteData(index)
            count--
            itemCount.innerText=count;
            localStorage.setItem('countTotal',count)
            foodValue-=element.price
            totaCost.innerText=foodValue
            localStorage.setItem('count-total',foodValue)

            let x= document.querySelector('#Next>span')
            x.innerText= (+x.innerText)+1
            if((+x.innerText)==0){
                document.getElementById('Next').innerHTML="Next"
                document.getElementById('Next').style.cursor="pointer"
            }
        })

        changebtn.append(plus,qtn_text,minus)

         let btn=document.createElement('button')
        btn.setAttribute("id","btn")
        btn.innerText="+"

        btn.addEventListener('click',function(){
            btn.style.visibility="hidden"
            div.append(image, name, cal, text, serve ,changebtn)

            let newData = JSON.parse(localStorage.getItem('add-data')) || []
            newData.push(element)
            localStorage.setItem('add-data',JSON.stringify(newData))
            displayCart(newData)
            count++
            localStorage.setItem('countTotal',count)
            itemCount.innerText=count;
            foodValue+=element.price
            localStorage.setItem('count-total',foodValue)
            totaCost.innerText=foodValue
          
            let x= document.querySelector('#Next>span')
            x.innerText= (+x.innerText)-1
            if((+x.innerText)==0){
                document.getElementById('Next').innerHTML="Next"
                document.getElementById('Next').style.cursor="pointer";
                document.getElementById('Next').style.backgroundColor="#217257";
                document.getElementById('Next').addEventListener('click',function(){
                window.location.replace('file:///C:/Users/hp/OneDrive/Desktop/complete-verse-5539/Food_panda_project/customerD.html')
                })
            }
        })

        div.append(image, name, cal, text, serve ,btn)
    });
}

function displayCart(data){
    document.getElementById('meals').innerHTML=""
    data.forEach((element,index) => {
        let div = document.createElement('div')

        let img=document.createElement('img')
        img.src=element.sideimg;
        
        let pName=document.createElement('h3')
        pName.innerText=element.name

        let qtyDivs = document.createElement("div")
        
        let plus = document.createElement('p')
        plus.innerText="+"

        let minus = document.createElement('p')
        minus.innerText="-"
        minus.addEventListener('click',function(){
            deleteData(index)
            count--
            itemCount.innerText=count;
            localStorage.setItem('countTotal',count)
            let x= document.querySelector('#Next>span')
            x.innerText= (+x.innerText)+1
            if((+x.innerText)==0){
                document.getElementById('Next').innerHTML="Next"
                document.getElementById('Next').style.cursor="pointer"
            }
        })
        
        qtyDivs.append(plus,minus)
        div.append(img,pName,qtyDivs)
        document.getElementById('meals').append(div)
    })
}

function deleteData(index){
    let delData = JSON.parse(localStorage.getItem('add-data')) || []
    delData.splice(index,1)
    localStorage.setItem('add-data',JSON.stringify(delData))
    displayCart(delData)
}
document.getElementById('clearcart').addEventListener('click',function(){
    product_data=[]
    localStorage.setItem('add-data',JSON.stringify(product_data))
    displayCart(product_data)
    count=0
    localStorage.setItem('countTotal',count)
    itemCount.innerText=count;
    // changebtn.style.visibility= "hidden" ;
    // btn.style.visibility="visible"
    foodValue=0
    totaCost.innerText=foodValue
    localStorage.setItem('count-total',foodValue)
    window.location.reload()
})

let itemCount = document.querySelector('#cart-icon>span')
itemCount.innerText= JSON.parse(localStorage.getItem('countTotal'))||0;

let totaCost = document.querySelector('#total-cost')
totaCost.innerText=JSON.parse(localStorage.getItem('count-total')) || 0;

