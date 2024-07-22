
let url3 = 'https://recruting.dkcapital.ge/api/public/vacancy/v2/search?page=1';

fetch(url3)
.then((category) => category.json())
.then((allCategory) => {
    
    allCategory.vacancy.data.forEach(result =>{
        
        let items = document.getElementById('three-items');

        console.log(result)
        items.innerHTML += 
        `
        <div class="item">
                    <div class="first-content">
                         <div class="imgs"><img src="${result.CompanyDetail.logo}" alt=""></div>
                        <div class="content">
                           
                            <h2>${result.CompanyDetail.brandname}</h2>
                            <h3>${result.SphereDetail.text}</h3>
                            <p>${result.CompanyDetail.name}</p>
                        </div>
                    </div>
                    <div class="two-content">
                        <div class="first-line">
                            <i class="bi bi-geo-alt"></i>
                            <p>${result.VacancyLocation.name}</p>
                            <i class="bi bi-people"></i>
                            <p>საშუალო დონე</p>
                        </div>
                        <div class="second-line">
                            <h3>₾</h3>
                            <h4>${result.fixed_amount} ₾</h4>
                            <i class="bi bi-clock-history"></i>
                            <p>${result.work_schedule.name}</p>
                        </div>
                    </div>
                </div>
         
        `
        
    })
})



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