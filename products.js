/*
Los tests deberían cubrir los siguientes casos:

addProduct
debería agregar un producto.
debería incrementar el id en 1 cada vez que se añada un producto.
debería lanzar un error si el nombre o el precio no están definidos.
debería lanzar un error si el producto ya existe.
removeProduct
debería eliminar un producto
debería lanzar un error si el producto no existe.
getProduct
debería devolver un producto por su id.
debería lanzar un error si el producto no existe.
updateProduct
debería actualizar un producto por su id.
debería lanzar un error si el producto no existe.

La aplicación de administración de productos tendrá las siguientes funciones y variables:

resetProducts(): reinicia la lista de productos y el id.
addProduct(name, price): agrega un producto a la lista de productos.
removeProduct(id): elimina un producto de la lista de productos.
getProducts(): devuelve todos los productos.
getProduct(id): devuelve un producto por su id.
updateProduct(id, name, price): actualiza un producto por su id.
products: array de productos. Por defecto, estará vacío.
id: id del producto. Por defecto, será 0. Cada vez que se añada un producto, se incrementará en 1.

*/


let products = [];
let id = 0;

function resetProducts() {
    products = [];
    id = 0;
};

function addProduct(name, price) {
    if(!name || !price) {
        throw new Error ('Name and price are required to proceed.');
    };
    if(products.find(product => product.name === name)) {
        throw new Error
    }
    products.push({id: id++, name, price});
};

function removeProduct(id) {
    const index = products.findIndex(product => product.id === id);
    if(index === -1) {
        throw new Error ('Product not found.')
    };
    products.splice(index, 1);
};

function getProducts() {
    return products;
};

function getProduct(id) {
    const product = products.find(product => product.id === id);
    if(!product) {
        throw new Error ('Product not found.')
    };
    return product;
};

function updateProduct(id, name, price) {
    const product = products.find(product => product.id === id);
    if (!product) {
      throw new Error('Product not found.');
    };
    if (name !== undefined) {
      product.name = name;
    };
    if (price !== undefined) {
      product.price = price;
    };
};

module.exports = {
    resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
    updateProduct
};

