import {getConnection, sql} from '../database/connection'
import { queries } from '../database/query';

//TOTAL OF PRODUCTS
 export const getProducts = async (req, res) => {
   try {
    const pool = await getConnection()
    const result = await pool.request().query(queries.getAllProducts);
    res.json(result.recordset);
 
     
   } catch (error) {
    res.status(500)
    res.send(error.message);
    
   }
  
};

// GET PRODUCT BY ID

export const getProductById = async (req, res) =>{
  const { id } =  req.params;

  const pool = await getConnection();
  const result = await pool
  .request()
  .input("id", id)
  .query(queries.getProductById );

   res.send(result.recordset[0]);
   
 
}

// CREATE NEW PRODUCT

export const createNewProduct = async(req, res)=>{

  const {name, description, quantity} =  req.body  

      if(name == null || description == null || quantity == null){
        return res.status(400).json({msg:'Bad request, please Fill all Fields'})
      }

  try {
          
      const pool = await getConnection();
      await pool.request()
      .input("name", sql.VarChar, name )
      .input("description", sql.Text, description )
      .input("quantity", sql.Int, quantity )
      .query(queries.addNewProduct);

      res.json( { name, description, quantity})
    
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
};

// DELETE PRODUCT BY ID

export const deleteProduct = async (req, res) =>{
  const { id } =  req.params;

  const pool = await getConnection();
  const result = await pool
  .request()
  .input("id", id)
  .query(queries.deleteProductById );

   res.send(result.recordset[0]);
   
 
}

// UPDATE PRODUCT BY ID

export const updateProduct = async(req, res)=>{
  const { id } =  req.params;
  const {name, description, quantity} =  req.body  
  if(name == null || description == null || quantity == null){
    return res.status(400).json({msg:'Bad request, please Fill all Fields'})
  }

  const pool = await getConnection();
      await pool.request()
      .input("name", sql.VarChar, name )
      .input("description", sql.Text, description )
      .input("quantity", sql.Int, quantity )
      .input("id", sql.Int, id )
      .query(queries.updateProductById);

      res.json( { name, description, quantity})

}


export const getTotalProducts =  async(req, res) =>{
  const pool = await getConnection();
  const result = await pool
  .request()
  .query('SELECT COUNT(*) FROM products');

  console.log(result);

  res.json(result.recordset[0]['']);
}
