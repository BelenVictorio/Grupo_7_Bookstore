module.exports=(sequelize, DataTypes) => {
    let alias ="user";
    
    let cols ={
       
    }

    let config ={
        tableName:"users",
        timestamps:false,
    }
    const User = sequelize.define(alias, cols, config)
    User.associate = function(models){
        
    }
    return User;


}