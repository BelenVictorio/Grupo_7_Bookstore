
module.exports=(sequelize, DataTypes) => {
    let alias ="cart";
    
    let cols ={
       id:{
           type:DataTypes.INTEGER,
           primaryKey:true,
           autoIncrement: true

       },
       user_id:{
           type:DataTypes.INTEGER.UNSIGNED,
           allowNull:false
       },
       product_id:{
           type:DataTypes.INTEGER,
           allowNull:false
       },
       quantify:{
           type:DataTypes.INTEGER,
           allowNull:true
       }
    }

    let config ={
        tableName:"carts",
        timestamps:false,
        underscored : true
    }
    const Cart = sequelize.define(alias, cols, config)
    Cart.associate = function(models){
        
    }
    return Cart;


}