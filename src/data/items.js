const productList = [
    {
        id: '1',
        title: 'Product 1',
        price: 100,
        image:'/images/test.jpg'
    },
    {
        id: '2',
        title: 'Product 2',
        price: 200,
        image:'/images/test.jpg'
    },
    {
        id: '3',
        title: 'Product 3',
        price: 300,
        image:'/images/test.jpg'
    },
    {
        id: '4',
        title: 'Product 4',
        price: 400,
        image:'/images/test.jpg'
    },

]

function getProductData(id) {
    let productData = productList.find((item) => item.id === id)

    return productData
}

export {productList, getProductData}
