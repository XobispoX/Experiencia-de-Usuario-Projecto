const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '',
        database: 'projectDB'
    }
});


async function getProducts(li,off){

    const Products= JSON.parse(JSON.stringify(
        await knex.select("*").from('products').limit(li).offset(off))
    );

return Products;

}

async function searchProduct(name1){

    console.log(name1);
    const ProductByName=JSON.parse(JSON.stringify(await knex.select("*").from('products')
    .join('brands','brands.id_B','=','products.brand_id')
    .join('categories','id_C','=','products.category_id').whereLike('products.name_P','%'+name1+'%')));

   

return ProductByName;
}


module.exports={
    getProducts,
    searchProduct

};