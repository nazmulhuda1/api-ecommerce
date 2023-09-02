


console.log('hellow')
const data = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    const products = data;

    const productContainer = document.querySelector('.products_item')



    products?.forEach(item => {
        console.log(item)
        const div = document.createElement('div')
        div.classList.add('single_item')
        div.innerHTML = `
        <img src=${item?.image} alt="">
        <div class="item_info">
            <h2>${item.title.slice(0, 20)}...</h2>
            <p>
            ${item.description.slice(0, 150)} (More..)
            </p>
            <div class="item_footer">
                <div class="btn_1"><span>${item.price}</span> Tk</div>
                <div class="btn_2">Buy now</div>
            </div>
        </div>
        `

        productContainer.appendChild(div)
    });

}
data()