module.exports=(sequelize, DataTypes) => {
    let alias ="Category";
    
    let cols ={
       id:{
           type:DataTypes.INTEGER,
           primaryKey:true,
           allowNull:true,
           autoIncrement:true
       },
       name:{
           type:DataTypes.STRING(100),
           allowNull:false

       }
    }

    let config ={
        tableName:"categories",
        timestamps:false,
        underscored : true
    }
    const Category = sequelize.define(alias, cols, config)
    Category.associate = function(models){
        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: "category_id"
        })
    }
    return Category;


}