const Data = () => {
    let Recipes = 'https://dummyjson.com/recipes';
    fetch(Recipes).then((res) => {
        return res.json();
    }).then((data) => {
        let str = '';

        data.recipes.forEach((ele) => {
            str += `
                <div class="col-12 col-md-6 col-xl-3 mt-4">
                            <div class="recipe-card h-100 d-flex flex-wrap justify-content-center rounded-4">
                                <div class="img-recipe rounded-4 shadow position-relative">
                                    <img src="${ele.image}" alt="4" style="cursor:pointer;" onclick="return singleData(${ele.id})">
                                    <div class="rating position-absolute rounded-5 px-2">
                                        <span><i class="bi bi-star-fill text-warning"></i></span><span class="text-dark fw-bold"> ${ele.rating}</span>
                                    </div>
                                    <div class="fav-item position-absolute rounded-circle d-flex align-items-center justify-content-center" style="top: 10px;right:10px">
                                        <i class="bi bi-heart-fill"></i>
                                    </div>
                                </div>
                                <div class="recipe-body" style="height:100%;">
                                    <p class="mb-0 mt-1" style="color: #E92D28;">${ele.cuisine}</p>
                                    <h5 class="mt-1 item_name" onclick="return singleData(${ele.id})">
                                        ${ele.name}
                                    </h5>
                                    <div class="bottom-item d-flex justify-content-between mt-3">
                                        <div class="time">
                                            <i class="bi bi-alarm"></i> ${ele.prepTimeMinutes} min
                                        </div>
                                        <div class="dificulty">
                                            <i class="bi bi-fork-knife"></i> ${ele.difficulty}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>            
             `
        })
        document.getElementById('output').innerHTML = str;
    }).catch((err) => {
        console.log("err", err);
    })
}
Data();

document.querySelector('.item-background').style.display = "none";
let singleData = (id) => {
    document.querySelector('.background').style.display = "none";
    document.querySelector('.item-background').style.display = "block";
    document.querySelector('.header').style.display = "none";


    document.querySelector('.close-btn').addEventListener('click', () => {
        document.querySelector('.header').style.display = "block";
        document.querySelector('.item-background').style.display = "none";
        document.querySelector('.background').style.display = "block";
    })

    let Recipes = 'https://dummyjson.com/recipes';
    fetch(Recipes).then((res) => {
        return res.json();
    }).then((data) => {
        let str = '';
        data.recipes.find((ele) => {
            if (ele.id == id) {
                str += `
                    <div class="col-8 col-md-4 col-xl-4 mb-2">
                            <div class="img-box rounded-2">
                                <img  src="${ele.image}" alt="">
                            </div>
                        </div>
                        <div class="col-8">
                            <div class="mx-2 recipe-details">
                                <p class="mb-0 mt-1" style="color: #E92D28;">Cuisine - ${ele.cuisine}</p>
                                <h1 class="mt-1">Name - ${ele.name}</h1>
                                <p style="color: #E92D28;">MealType - <span class="bg-secondary text-white p-1 px-2 fw-bold rounded-2">${ele.mealType} </span></p>
                                <div class="bottom-item d-flex justify-content-start mt-3">
                                        <div class="time">
                                            <i class="bi bi-alarm"></i> Time - ${ele.prepTimeMinutes} min
                                        </div>
                                        <div class="dificulty px-4">
                                            <i class="bi bi-fork-knife"></i> Difficulty - <span class="bg-success text-white p-1 px-2 fw-bold rounded-2">${ele.difficulty}</span>
                                        </div>
                                    </div>
                                <p class="mt-3"><span class="bg-secondary text-white p-1 px-2 fw-bold rounded-2">Ratings - ${ele.rating}</span> <span class="bg-secondary text-white p-1 px-2 fw-bold rounded-2">Servings - ${ele.servings}</span> <span class="bg-secondary text-white p-1 px-2 fw-bold rounded-2"> ${ele.reviewCount} Reviews</span</p>
                            </div>
                        </div>

                        <div class="col-12 d-flex flex-wrap justify p-2 bg-white rounded-2">
                            <div class="mx-4">
                                <h4>
                                    ingredients :-
                                </h4>
                                <ul>
                                    ${ele.ingredients.map((s) => `<li>${s}</li>`).join(' ')}
                                </ul>
                            </div>
                            
                            <div class="mx-4">
                                <h4>
                                     instructions :-
                                 </h4>
                                    <ol>
                                        ${ele.instructions.map((s) => `<li>${s}</li>`).join(' ')}
                                    </ol>
                            </div>
                        </div>

                `
            }
            document.querySelector('#item-output').innerHTML = str;
        })

    }).catch((err) => {
        console.log(err);
    })
}