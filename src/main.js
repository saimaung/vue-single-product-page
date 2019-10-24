var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: '../assests/vmSocks-green-onWhite.jpg',
        inventory: true,
        variants: [
            {
                variantId: 123,
                variantColor: 'green'
            },
            {
                variantId: 456,
                variantColor: 'blue'
            }
        ]
    }
});