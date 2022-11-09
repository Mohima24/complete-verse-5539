let data = [
    { "name": "BBQ Bison Burger", "cal": 610, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb765dff2da0c2e1fb_635823f4ce4929328b1f96f9_production-meal-image-9e969581-d09c-4617-9b17-d455d23c8952.jpeg", "id": 1 },
    { "name": "Sausage Baked Penne", "cal": 470, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb8cd4f9d87ba86916_635823f4ce492977d91f974a_production-meal-image-f0de55be-d691-4ade-bc26-b4a8aedaa1fe.jpeg", "id": 2 },
    { "name": "Homestyle Chicken", "cal": 560, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb5ae22f4680ff53d8_635823f4ce492947161f9738_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg", "id": 3 },
    { "name": "Cauliflower Shell Beef Bolognese", "cal": 490, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb8b1f5aa9b139be56_635823f4ce492904901f973e_production-meal-image-c9eef45a-97a9-487c-9550-71488e5f639a.jpeg", "id": 4 },
    { "name": "Tricolor Beef Lasagna", "cal": 450, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb7be30f1df3054aa2_635823f4ce492958261f9755_production-meal-image-29e2b6e1-12af-405d-8b33-91e19b2a0fef.jpeg", "id": 5 },
    { "name": "Flame-Seared Top Blade Steak", "cal": 350, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb684a20a3c8466513_635823f4ce492969991f9772_production-meal-image-25f9ce2d-ca21-499e-a140-8d59b4733ec2.jpeg", "id": 6 },
    { "name": "Protein Power Sausage Breakfast", "cal": 550, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb765dff25b4c2e1ef_635823f4ce49292cdf1f9759_production-meal-image-7a62bb89-9bcb-4f1f-9f0f-d8372698d48e.jpeg", "id": 7 },
    { "name": "Thai Green Curry Bowl", "cal": 520, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb5ae22f2be0ff53c1_635823f4ce4929bf011f9751_production-meal-image-92ec0fc1-d352-4720-9b83-96798ab8d2de.jpeg", "id": 8 },
    { "name": "Italian Sausage, Peppers & Onions", "cal": 620, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bbd15e7153619b09ed_635823f4ce492908a71f9731_production-meal-image-bc1b24c8-f62a-4756-a40e-173a8b67a590.jpeg", "id": 9 },
    { "name": "Veggie-Loaded Burrito Bake", "cal": 490, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bbb3434944174678b8_635823f4ce492970be1f970e_production-meal-image-17ade4a4-7351-4ff8-95c6-765d70e5ea5d.jpeg", "id": 10 },
    { "name": "Romesco Grilled Chicken", "cal": 620, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66ba53442824eea7387b_635823f4ce492943221f9741_production-meal-image-536ab066-5461-4cc0-bbad-f3246a0bb7df.jpeg", "id": 11 },
    { "name": "Grilled Chicken Breasts", "cal": 410, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66ba1b19b259785b9701_635823f4ce49294a4d1f9745_production-meal-image-ef64cbd3-cc91-4c5f-9865-b9ff0442572e.jpeg", "id": 12 },
    { "name": "Zingy Buffalo Chicken", "cal": 520, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66ba1b19b259785b9701_635823f4ce49294a4d1f9745_production-meal-image-ef64cbd3-cc91-4c5f-9865-b9ff0442572e.jpeg", "id": 13 },
    { "name": "Steak Peppercorn", "cal": 600, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66ba0238eb0c6d9aab2e_635823f4ce4929f27a1f9729_production-meal-image-2fd3df62-8abf-413e-8650-afca039518ec.jpeg", "id": 14 },
    { "name": "Swede-ish Meatballs", "cal": 650, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66ba503a5b1714628910_635823f4ce4929575f1f97b0_production-meal-image-6c9081ec-aecf-4eb0-980c-4843c3883727.jpeg", "id": 15 },
    { "name": "Creamy Chicken Fettuccine Alfredo", "cal": 510, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66baabcbab4689f2a67d_635823f4ce49292dfc1f975e_production-meal-image-fa07e0dc-cb7f-43d7-a669-d35dc3fbcf93.jpeg", "id": 16 },
    { "name": "Oven-Baked Chicken Florentine", "cal": 550, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66ba2304e159bb9e2b4e_635823f4ce492964a01f971f_production-meal-image-d30dad76-4b61-40ab-bdfc-0d7a907829a6.jpeg", "id": 17 },
    { "name": "Egg & Cheddar Breakfast Scramble", "cal": 650, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66ba243b24b4a60f949b_635823f4ce4929390e1f976c_production-meal-image-4663a574-d74a-4854-a881-ef4da5b24cee.jpeg", "id": 18 },
    { "name": "Hearty Veggie Bolognese", "cal": 700, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b91c7417151a7735ef_635823f4ce4929a4141f97c5_production-meal-image-4e60254a-6b6e-461b-9ec7-a25a2035949f.jpeg", "id": 19 },
    { "name": "Coq Au Vin", "cal": 650, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66ba5f7a141963813370_635823f4ce492947371f9766_production-meal-image-578506ac-e956-4c6f-bcbc-4e709ab34f98.jpeg", "id": 20 },
    { "name": "Chimichurri Rojo Seared Steak", "cal": 610, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b9243b2459120f9492_635823f4ce4929bd771f976e_production-meal-image-5bd23e4d-884e-4c36-b685-bfff1db5834f.jpeg", "id": 21 },
    { "name": "Harvest Time Chicken Risotto", "cal": 670, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b9846bcfc1dbde22cd_635823f4ce4929d96f1f97bd_production-meal-image-2076958f-3cde-4481-9644-0573e8ede33e.jpeg", "id": 22 },
    { "name": "Thai Green Curry Bowl", "cal": 500, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b90238ebc3759aab15_635823f4ce4929cb2d1f97b5_production-meal-image-c735f24b-3626-45ec-97be-b64910120b11.jpeg", "id": 23 },
    { "name": "Coconut Purple Rice Porridge", "cal": 500, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b8f1d3cb3ac073110f_635823f4ce492930e81f9797_production-meal-image-060ecc01-fb56-4074-85b9-15716062e146.jpeg", "id": 24 },
    { "name": "Chimichurri Rojo Seared Steak", "cal": 500, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b82304e1e7519e2b40_635823f4ce492969611f9787_production-meal-image-61221a9e-23cf-4042-a8ff-c15cc1493807.jpeg", "id": 25 },
    { "name": "Tex-Mex Grilled Chicken", "cal": 500, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b87c6e9a79f393f455_635823f4ce4929e9f41f976a_production-meal-image-ddd22bc7-1601-46a0-8404-01005533c56b.jpeg", "id": 26 },
    { "name": "Oven-Baked Chicken Florentine", "cal": 500, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b826aa84716db59c22_635823f4ce4929f11f1f97c9_production-meal-image-c2bd7c69-3db7-40c1-8740-e86f50357fcb.jpeg", "id": 27 },
    { "name": "Grilled Lemon-Tahini Chicken", "cal": 500, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b89f0dd67c2bb6ae51_635823f4ce49292c9d1f97cc_production-meal-image-cad55a0d-ac7c-4907-aa5e-6f29775c6b87.jpeg", "id": 28 },
    { "name": "Farmers Sunrise Scramble", "cal": 500, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b7715eea290d4e0c46_635823f4ce49292fd51f9792_production-meal-image-eea55b43-0737-4923-912f-d2aa340a7bc0.jpe", "id": 29 },
    { "name": "Chimichurri Rojo Seared Steak", "cal": 500, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b7fb2692a7db3e6768_635823f4ce492905c21f97a9_production-meal-image-857e178e-6526-43e2-a8f3-7b8eb178c3c1.jpeg", "id": 30 },
    { "name": "Veggie-Loaded Burrito Bake", "cal": 500, "img": "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66b7715eea290d4e0c46_635823f4ce49292fd51f9792_production-meal-image-eea55b43-0737-4923-912f-d2aa340a7bc0.jpeg", "id": 31 },
]
displayDiv(data)
function displayDiv(data) {

    for (let i = 0; i <= 5; i++) {
        let div = document.createElement('div')
        document.getElementById('menuImages').append(div)

        let imgDiv = document.createElement('div')

        let image = document.createElement('img')
        image.src = data[i].img;
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