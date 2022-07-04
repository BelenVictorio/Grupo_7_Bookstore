module.exports=(sequelize, DataTypes) => {
    let alias ="user";
    
    let cols ={
       id:{
           type:DataTypes.INTEGER.UNSIGNED,
           primarykey:true,
           allowNull:false,
           autoIncrement:true
       },
       first_name:{
           type:DataTypes.VARCHAR(45),
           allowNull:false,
       },
       last_name:{
        type:DataTypes.VARCHAR(45),
        allowNull:false,
       },
       email:{
        type:DataTypes.VARCHAR(45),
        allowNull:false,
       },
       password:{
        type:DataTypes.VARCHAR(100),
        allowNull:false,
       },
       roles_id:{
           type:DataTypes.INTEGER.UNSIGNED,
           allowNull:false
       },
       image:{
           type:DataTypes.VARCHAR(45),
           allowNull:true,
       }
    }

    let config ={
        tableName:"users",
        timestamps:false,
    }
    const User = sequelize.define(alias, cols, config)
    User.associate = function(models){
        User.belongsTo(models.UserRol, {
            as: "rol",
            foreignKey: "rol_id"
        })
    }
    return User;


}