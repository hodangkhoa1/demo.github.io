const ulTag = document.querySelector('.pagination');
const pageProduct1 = document.querySelector('#page-product-1');
const pageProduct2 = document.querySelector('#page-product-2');
let totalPages = 5;

function paginationPage(totalPages, page){
    let liTag = '';
    let activeLi;
    let beforePages = page - 1;
    let afterPages = page + 1;

    if(page > 1)
    {
        liTag += `<li class="pagination-item" onclick="paginationPage(totalPages, ${page - 1})"><span class="pagination-item__link"><i class="pagination-item__icon fas fa-angle-left"></i></span></li>`;
    }

    if(page > 2)
    {
        liTag += `<li class="pagination-item" onclick="paginationPage(totalPages, 1)"><span class="pagination-item__link">1</span></li>`;
        if(page > 3)
        {
            liTag += `<li class="pagination-item"><span class="pagination-item__link">...</span></li>`
        }
    }

    if(page == totalPages){ // if page value is equal to totalPages the substract by -2 to the beforePages value
        beforePages = beforePages - 2;
    }
    else if(page == totalPages - 1){ // else if page value is equal to totalPages by -1 the substract by -1 to the beforePages value
        beforePages = beforePages - 1;
    }

    if(page == 1){ // if page value is equal to 1 the add by +2 to the afterPages value
        afterPages = afterPages + 2;
    }
    else if(page == 2){ // else if page value is equal to 2 then add by +1 to the afterPages value
        afterPages = afterPages + 1;
    }

    for(let pageLength = beforePages; pageLength <= afterPages; pageLength++)
    {
        if(pageLength > totalPages)
        {
            continue;
        }

        if(pageLength == 0)
        {
            pageLength = pageLength + 1;
        }

        if(page == pageLength){
            activeLi = "pagination-item--active";
        }
        else{
            activeLi = "";
        }
        liTag += `<li class="pagination-item ${activeLi}" onclick="paginationPage(totalPages, ${pageLength})"><span class="pagination-item__link">${pageLength}</span></li>`;
    }

    if(page < totalPages - 1)
    {
        if(page < totalPages - 2)
        {
            liTag += `<li class="pagination-item"><span class="pagination-item__link">...</span></li>`
        }

        liTag += `<li class="pagination-item" onclick="paginationPage(totalPages, ${totalPages})"><span class="pagination-item__link">${totalPages}</span></li>`;
    }

    if(page < totalPages)
    {
        liTag += `<li class="pagination-item" onclick="paginationPage(totalPages, ${page + 1})"><span class="pagination-item__link"><i class="pagination-item__icon fas fa-angle-right"></i></span></li>`;
    }

    ulTag.innerHTML = liTag;
    if(page == 1){
        pageProduct1.classList.remove('hide');
        pageProduct2.classList.add('hide');
    }
    if(page == 2){
        pageProduct1.classList.add('hide');
        pageProduct2.classList.remove('hide');
    }
}

paginationPage(totalPages, 1);


// Xử lý cơ sở dữ liệu
/*var productApi = 'http://localhost:3000/products';

function start(){
    getProducts(renderProducts);
}

start();*/

// Function lấy dữ liệu
/*function getProducts(callback){
    fetch(productApi)
        .then(function(response){
            return response.json();
        })
        .then(callback);
}

function renderProducts(products){
    var nameProduct = document.querySelector('#product-item');
    var htmls = products.map(function(product){
        return `
        <div class="col l-2-4 m-4 c-6">
            <a class="home-product-item" href="">
                <div class="home-product-item__img" style="background-image: url(${product.imageProduct});"></div>
                <h4 class="home-product-item__name">${product.name}</h4>
                <div class="home-product-item__price">
                    <span class="home-product-item__price-old">${product.priceOld}</span>
                    <span class="home-product-item__price-current">${product.priceCurrent}</span>
                </div>
                <div class="home-product-item__action">
                    <span class="home-product-item__like home-product-item__like--liked">
                        <i class="home-product-item__like-icon-empty far fa-heart"></i>
                        <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                    </span>
                    <div class="home-product-item__rating">
                        <i class="home-product-item__star--gold fas fa-star"></i>
                        <i class="home-product-item__star--gold fas fa-star"></i>
                        <i class="home-product-item__star--gold fas fa-star"></i>
                        <i class="home-product-item__star--gold fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <span class="home-product-item__sold">Đã bán ${product.muchSold}</span>
                </div>
                <div class="home-product-item__origin">
                    <span class="home-product-item__brand"></span>
                    <span class="home-product-item__origin-name">${product.originName}</span>
                </div>
                <div class="home-product-item__favourite">
                    <i class="fas fa-check"></i>
                    <span>Yêu thích</span>
                </div>
                <div class="home-product-item__sale-of">
                    <span class="home-product-item__sale-of-percent">${product.discount}</span>
                    <span class="home-product-item__sale-of-label">GIẢM</span>
                </div>
            </a>
        </div>
        `;
    });

    nameProduct.innerHTML = htmls.join('');
}*/