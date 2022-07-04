module.exports=(sequelize, DataTypes) => {
    let alias ="genre";
    
    let cols ={
       id:{
           type:DataTypes.INTEGER,
           primarykey:true,
           allowNull: false,
           autoIncrement:true
       },
       name:{
           type:DataTypes.VARCHAR(100),
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