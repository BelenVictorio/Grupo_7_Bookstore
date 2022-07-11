
module.exports=(sequelize, DataTypes) => {
    let alias ="author";
    
    let cols ={
       id:{
           type:DataTypes.INTEGER(),
           primaryKey: true,
           autoIncrement:true,
           allowNull:false
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull:false
        }
    }

    let config ={
        tableName:"authors",
        timestamps:false,
        underscored : true
    }
    const Author = sequelize.define(alias, cols, config)
    Author.associate = function(models){
        Author.belongsTo(models.Product, {
            as: "products",
            foreignKey: "author_id"
        })
    }
    return Author;


}