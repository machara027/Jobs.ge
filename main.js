function search() {


    let positions = document.getElementById('position').value;
    let locations = document.getElementById('location').value;

    let minPrice = document.getElementById("min-price").value;
    let maxPrice = document.getElementById("max-price").value;

    let url3 = `https://recruting.dkcapital.ge/api/public/vacancy/v2/search?page=&searchKeyword=${positions}&${locations}=&${minPrice}=&${maxPrice}=`;

    fetch(url3)
        .then((search) => search.json())
        .then((searchResult) => {
            let mainTwo = document.getElementById('main-two');
            let mainThree = document.getElementById('main-three');
            let mainOneContent = document.getElementById('main-one');
            mainThree.style.display = 'none';
            mainTwo.style.display = 'none';
            mainOneContent.style.display = 'block'
            searchResult.vacancy.data.forEach(searchs =>{
                
                
                let mainOne = document.getElementById('main-one-items');
                let searchResults = document.getElementById('main-one-inner');


                mainOne.innerHTML +=
                `
                 <div class="item">
                    <div class="first-content">
                         <div class="imgs"><img src="${searchs.CompanyDetail.logo}" alt=""></div>
                        <div class="content">
                            <h2>${searchs.PositionDetail.text}</h2>
                            <h3>${searchs.SphereDetail.text}</h3>
                            <p>${searchs.CompanyDetail.name}</p>
                        </div>
                    </div>
                    <div class="two-content">
                        <div class="first-line">
                            <i class="bi bi-geo-alt"></i>
                            <p>${searchs.VacancyLocation.name}</p>
                            <i class="bi bi-people"></i>
                            <p>საშუალო დონე</p>
                        </div>
                        <div class="second-line">
                            <h3>₾</h3>
                            <h4>${searchs.fixed_amount} ₾</h4>
                            <i class="bi bi-clock-history"></i>
                            <p>${searchs.WorkScheduleList.text}</p>
                        </div>
                    </div>
                </div>
                `


            })
        
            
        })
};










let url = 'https://recruting.dkcapital.ge/api/public/categories';

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        data.forEach(element => {
            let item = document.getElementById('item')

            item.innerHTML +=
                `
        <div class="items">
            <img src="${element.file}" alt="">
            <h2>${element.name}</h2>
            <p>(${element.cnt} ვაკანსია)</p>
        </div>
        
        `
        });
    });

let url2 = 'https://recruting.dkcapital.ge/api/public/vacancy/v2/search?type=vip';

fetch(url2)
    .then((vip) => vip.json())
    .then((vipCategory) => {


        vipCategory.vacancy.data.forEach(element => {
            let items = document.getElementById('items');
            items.innerHTML +=
                `
        <div class="item">
                    <div class="first-content">
                         <div class="imgs"><img src="${element.CompanyDetail.logo}" alt=""></div>
                        <div class="content">
                            <img src="/imgs/VIP_noBG.72452ec2.png" alt="">
                            <h2>${element.PositionDetail.text}</h2>
                            <h3>${element.SphereDetail.text}</h3>
                            <p>${element.CompanyDetail.name}</p>
                        </div>
                    </div>
                    <div class="two-content">
                        <div class="first-line">
                            <i class="bi bi-geo-alt"></i>
                            <p>${element.VacancyLocation.name}</p>
                            <i class="bi bi-people"></i>
                            <p>საშუალო დონე</p>
                        </div>
                        <div class="second-line">
                            <h3>₾</h3>
                            <h4>${element.fixed_amount} ₾</h4>
                            <i class="bi bi-clock-history"></i>
                            <p>${element.WorkScheduleList.text}</p>
                        </div>
                    </div>
                </div>

        `

        })
    });



function priceModule() {
    let module = document.getElementById('price-module');

    module.classList.toggle('active');
}


function save() {
    let minPrice = document.getElementById("min-price").value;
    let maxPrice = document.getElementById("max-price").value;

    let btnMain = document.getElementById("btn-main");

    btnMain.innerText = `${minPrice}₾ - ${maxPrice}₾`
}

function clear() {
    let btnMainTwo = document.getElementById("btn-main");

    btnMainTwo.innerText = `შემოსავალი`;
}


function logInFun(){
    let logIn = document.getElementById('log-in');
    let body = document.querySelector('body');
    body.classList.toggle('no-scrool');
    logIn.classList.add('show')
}
function closeLogIn(){
    let logIn = document.getElementById('log-in');
    logIn.classList.remove('show')
    let body = document.querySelector('body');
    body.classList.toggle('no-scrool');
}


let headerBurger = document.querySelector('.header__burger');
let body = document.querySelector('body');
let menu = document.querySelector(".nav-bar");

headerBurger.onclick = function(){
    headerBurger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('no-scrool');
}