


console.log('hellow')
const data = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    const products = data;
    console.log(products)


}
data()