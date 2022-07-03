
module.exports=(sequelize, DataTypes) => {
    let alias ="cart";
    
    let cols ={
       
    }

    let config ={
        tableName:"carts",
        timestamps:false,
    }
    const Cart = sequelize.define(alias, cols, config)
    Cart.associate = function(models){
        
    }
    return Cart;


}