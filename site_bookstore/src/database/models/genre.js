module.exports=(sequelize, DataTypes) => {
    let alias ="genre";
    
    let cols ={
       id:{
           type:DataTypes.INTEGER,
           primaryKey:true,
           allowNull: false,
           autoIncrement:true
       },
       name:{
           type:DataTypes.STRING(100),
           allowNull:false
       }
    }

    let config ={
        tableName:"genres",
        timestamps:false,
    }
    const Genre = sequelize.define(alias, cols, config)
    Genre.associate = function(models){
        
    }
    return Genre;


}