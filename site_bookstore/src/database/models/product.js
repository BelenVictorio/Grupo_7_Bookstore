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
       author_id:{
           type:DataTypes.INTEGER,
           allowNull:false
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
           allowNull:false
       },
       images_id:{
           type:DataTypes.INTEGER,
           allowNull:false,
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
            as: "categories",
            foreignKey: "category_id"
        }),
       Product.hasOne(models.Image,{
            as: "images",
            foreignKey: "image_id"
        }),
        Product.hasOne(models.Genre,{
            as: "genres",
            foreignKey: "genres_id"
        })
    }

    return Product;
}