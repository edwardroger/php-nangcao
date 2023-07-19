var products = [
    {
        id: 1,
        name: 'Laptop Asus',
        description: 'Lorem ipsum dolor sit amet',
        price: 20
    },
    {
        id: 2,
        name: 'Laptop Acer',
        description: 'Máy tính Acer',
        price: 19
    },
    {
        id: 3,
        name: 'Macbook',
        description: 'Mạc bục air',
        price: 21
    }
];

function renderUI() {
    let html = '';
    let total = 0;
    if (products.length === 0) {
        html = 'Chưa có sản phẩm nào trong giỏ hàng';
    } else {
        for (let i = 0; i < products.length; i++) {
            total += products[i].price;
            html += `<li class="row">
                    <div class="col left">
                        <div class="thumbnail">
                            <a href="#">
                                <img src="https://via.placeholder.com/200x150" alt="" />
                            </a>
                        </div>
                        <div class="detail">
                            <div class="name"><a href="#">${ products[i].name }</a></div>
                            <div class="description">
                                ${ products[i].description }
                            </div>
                            <div class="price">$${ products[i].price }</div>
                            <div class="total-price" id="price_${products[i].id}">
                                $${products[i].price}
                            </div>
                        </div>
                    </div>
                    <div class="col right">
                        <div class="quantity">
                            <input type="number"
                                onkeyup="handleOnChangeQuantity(${products[i].id}, ${products[i].price})"
                                class="product-quantity"
                                id="product_${products[i].id}"
                                step="1" value="1" />
                        </div>
                        <div class="remove">
                            <span class="close"><i class="fa fa-times" aria-hidden="true"></i></span>
                        </div>
                    </div>
                </li>`
        }
        document.getElementsByClassName('total')[0].innerHTML = '$' + total;
    }
    document.getElementById('products').innerHTML = html;
}

renderUI();

//Arrow Function cú pháp đầy đủ
// const functionName = (item) => {
//     return item.id === id
// }

//Arrow Function cú pháp viết gọn
// const functionName = item => item.id === id

function handleOnChangeQuantity(id, price) {
    let quantity = document.getElementById('product_' + id).value;
    if (quantity !== '' && quantity <= 0) {
        document.getElementById('product_' + id).value = 1;
        quantity = 1;
    }
    // let price_id = 'price_' + id;
    // let newPrice = quantity * products.find(item => item.id === id).price; //Arrow Function
    let newPrice = quantity * price;
    document.getElementById('price_' + id).innerHTML = '$' + newPrice;
}