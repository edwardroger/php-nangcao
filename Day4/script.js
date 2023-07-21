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

var vouchers = [
    {
        id: 1,
        code: 'ABC',
        value: 10,
        type: 'percent'
    },
    {
        id: 2,
        code: 'XYZ',
        value: 20,
        type: 'dollar'
    }
];

function renderUI() {
    let html = '';
    // let total = 0;
    if (products.length === 0) {
        html = 'Chưa có sản phẩm nào trong giỏ hàng';
    } else {
        for (let i = 0; i < products.length; i++) {
            // total += products[i].price;
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
                            <span class="close" onclick="handleRemoveItem(${products[i].id})"><i class="fa fa-times" aria-hidden="true"></i></span>
                        </div>
                    </div>
                </li>`
        }
        // document.getElementsByClassName('total')[0].innerHTML = '$' + total;
    }
    document.getElementById('products').innerHTML = html;
    totalPrice();
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
    totalPrice();
}

function handleRemoveItem(id) {
    //cách 1: dùng filter để lọc ra các sản phẩm không trùng id. Rồi gán mảng đã được filter = products cũ
    // products = products.filter(element => element.id !== id);

    //cách 2: dùng vòng lặp và sử dụng splice để loại bỏ phần tử khỏi mảng products
    // for (let i = 0; i < products.length; i++) {
    //     if (products[i].id === id) {
    //         products.splice(i, 1);
    //     }        
    // }

    //cách 3: dùng find để tìm ra phần tử product. Dùng splice để xoá
    // product = products.find(element => element.id === id);
    // products.splice(product, 1)
    renderUI();
}

function totalPrice(voucher = null) {
    let sum = 0;
    let sumAfterVAT = 0;
    for (let i = 0; i < products.length; i++) {
        let quantity = document.getElementById('product_' + products[i].id).value;
        sum += products[i].price * quantity;
    }

    if (sum > 100) {
        sumAfterVAT = sum + 5;
        document.querySelector('.vat span').innerHTML = 5;
    } else {
        sumAfterVAT = sum;
        document.querySelector('.vat span').innerHTML = 0;
    }
    
    if (voucher) {
        if (voucher.type === 'percent') {
            sumAfterVAT = sumAfterVAT - (sumAfterVAT * voucher.value) / 100;
        } else {
            sumAfterVAT = sumAfterVAT - voucher.value;
        }
    }

    document.getElementsByClassName('total')[0].innerHTML = '$' + sum;
    document.getElementsByClassName('cart-total')[0].innerHTML = '$' + sumAfterVAT;
}

function handleVoucher() {
    let code = document.getElementById('promo-code').value;
    
    //Cách 1: Dùng find để tìm được voucher trong mảng vouchers
    let voucher = vouchers.find(voucher => voucher.code === code);

    //Cách 2: Dùng vòng for lặp ra các giá trị của vouchers
    // for (let i = 0; i < vouchers.length; i++) {
    //     if (vouchers[i].code === code) {
    //         let voucher = vouchers[i];
    //     }        
    // }

    if (! voucher) {
        document.getElementsByClassName('text-error')[0].innerHTML = 'Voucher không hợp lệ';
    } else {
        document.getElementsByClassName('text-error')[0].innerHTML = '';
        totalPrice(voucher);
    }
}