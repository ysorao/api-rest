export const queries = {
    getAllProducts:'SELECT * FROM products',
    addNewProduct:'INSERT INTO products (name, description, quantity) VALUES(@name, @description, @quantity)',
    getProductById:'SELECT * FROM products WHERE id = @id',
    deleteProductById:'DELETE FROM products WHERE id = @id',
    updateProductById: 'UPDATE products SET name= @name, description = @description, quantity = @quantity WHERE id = @id',
    getTotalProducts: 'SELECT COUNT(*) FROM products',

}
