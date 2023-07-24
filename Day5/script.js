// var products = [
//     {
//         id: 1,
//         name: 'Laptop Asus',
//         description: 'Lorem ipsum dolor sit amet',
//         category: 'Laptop',
//         price: 20
//     },
//     {
//         id: 2,
//         name: 'Laptop Acer',
//         description: 'Máy tính Acer',
//         category: 'Laptop',
//         price: 19
//     },
//     {
//         id: 3,
//         name: 'Macbook',
//         description: 'Mạc bục air',
//         category: 'Laptop',
//         price: 21,
//     },
//     {
//         id: 4,
//         name: 'Iphone 13 pro max',
//         description: 'Phone 13',
//         category: 'Phone',
//         price: 30
//     },
//     {
//         id: 5,
//         name: 'Tai nghe',
//         description: 'Lorem ipsum dolor sit amet',
//         category: 'Accessory',
//         price: 5
//     },
//     {
//         id: 6,
//         name: 'Tai nghe sony',
//         description: 'Máy tính Acer',
//         category: 'Accessory',
//         price: 6
//     },
//     {
//         id: 7,
//         name: 'Macbook',
//         description: 'Mạc bục air',
//         category: 'Laptop',
//         price: 21,
//     },
//     {
//         id: 8,
//         name: 'Laptop Asus',
//         description: 'Lorem ipsum dolor sit amet',
//         category: 'Laptop',
//         price: 20
//     },
//     {
//         id: 9,
//         name: 'Laptop Acer',
//         description: 'Máy tính Acer',
//         category: 'Laptop',
//         price: 19
//     },
//     {
//         id: 10,
//         name: 'Macbook',
//         description: 'Mạc bục air',
//         category: 'Laptop',
//         price: 21,
//     },
//     {
//         id: 11,
//         name: 'Laptop Asus',
//         description: 'Lorem ipsum dolor sit amet',
//         category: 'Laptop',
//         price: 20
//     },
//     {
//         id: 12,
//         name: 'Laptop Acer',
//         description: 'Máy tính Acer',
//         category: 'Laptop',
//         price: 19
//     },
//     {
//         id: 13,
//         name: 'Macbook',
//         description: 'Mạc bục air',
//         category: 'Laptop',
//         price: 21,
//     },
// ];

var products = getAPIServer();

// function getAPIServer() {
//     $.ajax({
//         url: "127.0.0.1:8000/api/getWeather",
//         success: function( result ) {
//             return result;
//         }
//     });
// }

function renderUI(listProduct = products) {
    let html = '';
    if (products.length === 0) {
        html = 'Chưa có sản phẩm nào trong giỏ hàng';
    } else {
        for (let i = 0; i < listProduct.length; i++) {
            html += `<li class="row">
                    <div class="col left">
                        <div class="thumbnail">
                            <a href="#">
                                <img src="https://via.placeholder.com/200x150" alt="" />
                            </a>
                        </div>
                        <div class="detail">
                            <div class="name"><a href="#">${ listProduct[i].name }</a></div>
                            <div class="description">
                                ${ listProduct[i].description }
                            </div>
                            <div class="price">$${ listProduct[i].price }</div>
                            <div class="category">
                                ${ listProduct[i].category }
                            </div>
                        </div>
                    </div>
                </li>`
        }
    }
    document.getElementById('products').innerHTML = html;
}

renderUI();

function handleSearch() {
    let productSearch = products;
    let category = document.getElementById('search-category').value;
    
    if (category) {
        //cách 1: Sử dụng filter để lọc ra tất cả các sản phẩm có category = value của select
        productSearch = productSearch.filter(item => item.category === category);
    }

    //cách 2: Sử dụng vòng lặp for
    // for (let i = 0; i < products.length; i++) {
    // }

    let minPrice = document.getElementsByClassName('min-price')[0].value;
    let maxPrice = document.getElementsByClassName('max-price')[0].value;
    
    // if (minPrice && !maxPrice) {
        
    // } else if (maxPrice && !minPrice) {

    // } else if (minPrice && maxPrice) {

    // } else {

    // }

    if (minPrice) {
        productSearch = productSearch.filter(item => item.price >= minPrice);
        console.log(productSearch);
    }
    if (maxPrice) {
        productSearch = productSearch.filter(item => item.price <= maxPrice);
        console.log(productSearch);
    }

    renderUI(productSearch);
}