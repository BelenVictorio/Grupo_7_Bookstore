module.exports = (sequelize, DataTypes) => {
    let alias = "Product";
    
    let cols = {
       
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
        })
        Product.hasMany(models.ProductImage, {
            as: "productImages",
            foreignKey: "product_id"
        })
    }

    return Product;
}