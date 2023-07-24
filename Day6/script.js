$('#email').on('keyup', function () {
    var email = $(this).val();
});

$('#password').on('keyup', function () {
    console.log($(this)); // === ô input có id = 'password'. === $('#password')
    var password = $(this).val();
});

$('.login').on('click', function () {
    // alert($('#email').val(), $('#password').val());
    $('.content__footer').html('Login Success');
    $('.content__footer').append('<div class="footer">Div Append</div>');
    $('.content__footer').addClass('error'); // >< removeClass 
});

$(document).ready(function () {  // === window.onload 
    // renderUI();
    console.log('test');
});

// Example: get parameters from URL
let url = window.location.href
url = new URL(url);

var c = url.searchParams.get('id');
console.log(c);


//Ví dụ về Bất đồng bộ: thường xảy ra ở các tiến trình hao tốn thời gian xử lý
//Thông thường việc bất đồng bộ sẽ xảy ra ở việc gọi API

function a() {
    var products = getURL('localhost/get/products'); //API trả về products
    return products;
}

function b() {
    products.map(item => item.name);
}

const promise = new Promise(a());
promise.then(b());
promise.catch();

//async - await: thường được áp dụng trong các framework ReactJs và VueJS, AngularJS và

$.ajax.post({
    url: '',
    data: '',
    success: function (data) {
        b(data);
    }
}
)

