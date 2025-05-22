
const {resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./products.js');

beforeEach(() => {resetProducts()});

describe('addProduct', () => {
    test('should add a product', () => {
        addProduct('Coffee', 5);
        const products = getProducts();
        expect(products.length).toBe(1);
        expect(products[0].name).toBe('Coffee');
    });
    test('should increase id by 1 every time a product is added', () => {
        addProduct('Coffee', 5);
        addProduct('Tea', 3);
        const products = getProducts();
        expect(products[0].id).toBe(products[0].id) + 1;
    });
    test('should throw an error if name or price is not provided', () => {
        expect(() => addProduct('', 5)).toThrow();
        expect(() => addProduct('Coffee', '')).toThrow();
    })
});

describe('removeProduct', () => {
    test('should remove a product', () => {
        addProduct('Milk', 3);
        const {id} = getProducts()[0];
        removeProduct(id);
        const products = getProducts();
        expect(products.length).toBe(0);
    })
    test('should throw an error if product not found', () => {
        expect(() => removeProduct(999)).toThrow('Product not found.')
    })
});

describe('getProduct', () => {
    test('should return a product', () => {
        addProduct('Sugar', 4);
        const product = getProduct(0);
        const found = getProduct(product.id);
        expect(found.name).toBe('Sugar');
    });
    test('should throw an error if product not found', () => {
        expect(() => getProduct(999)).toThrow('Product not found.')
    });
}); 

describe('updateProduct', () => {
    test('should update only the defined fields', () => {
        addProduct('Soda', 2);
        const { id } = getProducts()[0];
        updateProduct(id, 'Sprite');
        const updated1 = getProduct(id);
        expect(updated1.name).toBe('Sprite');
        expect(updated1.price).toBe(2);
        updateProduct(id, undefined, 5);
        const updated2 = getProduct(id);
        expect(updated2.name).toBe('Sprite');
        expect(updated2.price).toBe(5);
      });
});