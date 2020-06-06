const myCart = {
    addToCard: 1
}
let shoppingCart = document.getElementById('shoppingCart')
    //addint to cart
let addToCard = () => {
    let mycard = document.querySelectorAll(".mycard");
    let incrememtToCart = myCart.addToCard++;
    shoppingCart.innerText = incrememtToCart

}





// products slidering
$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function() {
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < 3; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
    }
});