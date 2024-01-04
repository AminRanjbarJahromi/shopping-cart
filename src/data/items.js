const productList = [
    {
        id: '1',
        title: 'Product',
        price: 100,
        image:'/images/test.jpg'
    },
    {
        id: '2',
        title: 'Product',
        price: 100,
        image:'/images/test.jpg'
    },
    {
        id: '3',
        title: 'Product',
        price: 100,
        image:'/images/test.jpg'
    },
    {
        id: '4',
        title: 'Product',
        price: 100,
        image:'/images/test.jpg'
    },

]
function getProductData(id) {
    let productData = productList.find((item) => item.id === id)

    return productData
}

export {productList, getProductData}
