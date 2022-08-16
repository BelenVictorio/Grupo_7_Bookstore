module.exports = (sequelize, DataTypes) => {
    let alias = "Product";
    
    let cols = {
       id:{
           type:DataTypes.INTEGER.UNSIGNED,
           primaryKey:true,
           allowNull:false,
           autoIncrement:true
       },
       name:{
           type:DataTypes.STRING(100),
           allowNull:false,

       },
       author:{
           type:DataTypes.STRING(100),
           allowNull: true
       },
       description:{
           type:DataTypes.TEXT,
           allowNull:false,

       },
       price:{
           type:DataTypes.INTEGER,
           allowNull:false

       },
       category_id:{
           type:DataTypes.INTEGER,
           allowNull:true
       },
       genres_id:{
           type:DataTypes.INTEGER,
           allowNull:false
       }
    }

    let config = {
        tableName: "products",
        timestamps: false,
    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = function(models) {
        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: "category_id"
        }),
       Product.hasMany(models.Image,{
            as: "images",
            foreignKey: "product_id"
        })
        
    }
    return Product;
}