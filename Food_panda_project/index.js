
document.querySelector('.popup').innerHTML="";
function displayDiv(data) {
    document.querySelector('.popup').innerHTML="";
    for (let i = 0; i <= 5; i++) {
        let div = document.createElement('div')
        document.getElementById('menuImages').append(div)
        div.addEventListener('click',function(){
            console.log("hello");
            document.querySelector('.popup').style.display="block"
            displayPopup(data[i])
        })

        let imgDiv = document.createElement('div')

        let image = document.createElement('img')
        image.src = data[i].image;
        imgDiv.append(image)

        let name = document.createElement('h3')
        name.innerText = data[i].name;

        let cal = document.createElement('p')
        cal.innerText = `${data[i].cal} Cal`;

        let text = document.createElement('p')
        text.innerText = "Gluten Free";

        let serve = document.createElement('p')
        serve.innerText = "Single-Serve";

        div.append(imgDiv, name, cal, text, serve)
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click',function(e){
        e.preventDefault()
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:"smooth"
        })
    })
})
let arr=[]
document.querySelector('form').addEventListener('submit',function(event){
event.preventDefault()
let obj={
    email:email.value,
    zip:zip.value,
}
arr.push(obj)
localStorage.setItem('derails',JSON.stringify(arr))
window.location.replace("meals.html")
})
document.querySelectorAll('input[type="number"]').forEach(input=>{
    input.oninput = ()=> {
        if(input.value.length>input.maxLength) input.value = input.value.slice(0,input.maxLength);
    }
})
function displayPopup(element){
    console.log(element);
    let div1 = document.createElement('div')
    div1.classList.add("popup-content")

    let popnav= document.createElement('div')
    popnav.classList.add('popupnav')

    let icons= document.createElement('img')
    icons.src="https://cdn.pixabay.com/photo/2012/04/13/00/22/red-31226_1280.png"
    icons.addEventListener('click',function(){
        document.querySelector('.popup').style.display="none"
        console.log("abc")
        document.querySelector('.popup').innerHTMl=""
    })

    let navh2 = document.createElement('h2')
    navh2.innerText= element.name

    let navp = document.createElement('p')
    navp.innerHTML = "<i>with Masterful Mac & Cheese</i>"

    let navSpan = document.createElement('span')
    navSpan.innerText = "Soy Free";

    let navSpan2 = document.createElement('span')
    navSpan2.innerText = "Gluten Free";

    popnav.append(navh2,navp,navSpan,navSpan2)

    // ----------------popnav---------
    let popupimg = document.createElement('div')
    popupimg.classList.add("popup-img")

    let image1= document.createElement('img')
    image1.src= element.image;

    let image2= document.createElement('img')
    image2.src= element.sideimg;

    let des = document.createElement('div')
    des.classList.add("description")

    let desh3 = document.createElement('h3')
    desh3.innerText= "What makes this dish special"

    let descp = document.createElement('p')
    descp.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    des.append(desh3,descp)
    
    popupimg.append(image1,image2,des)
    
    div1.append(icons,popnav,popupimg)
    document.querySelector('.popup').innerHTMl=""
    document.querySelector('.popup').append(div1)
}

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
