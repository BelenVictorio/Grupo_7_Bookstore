
module.exports=(sequelize, DataTypes) => {
    let alias ="Cart";
    
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
            Cart.hasMany(models.Product, {
                as: "products",
                foreignKey: "id"
            }),
            Cart.hasMany(models.User, {
                as: "users",
                foreignKey: "id"
            })
    }
    return Cart;
}