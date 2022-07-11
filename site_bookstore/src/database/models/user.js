module.exports=(sequelize, DataTypes) => {
    let alias ="User";
    
    let cols ={
       id:{
           type:DataTypes.INTEGER.UNSIGNED,
           primaryKey:true,
           allowNull:false,
           autoIncrement:true
       },
       first_name:{
           type:DataTypes.STRING(45),
           allowNull:false,
       },
       last_name:{
        type:DataTypes.STRING(45),
        allowNull:false,
       },
       email:{
        type:DataTypes.STRING(45),
        unique: true,
        allowNull:false,
       },
       password:{
        type:DataTypes.STRING(100),
        allowNull:false,
       },
       roles_id:{
           type:DataTypes.INTEGER.UNSIGNED,
           allowNull:false
       },
       image:{
           type:DataTypes.STRING(45),
           allowNull:true,
       }
    }

    let config ={
        tableName:"users",
        timestamps:false,
        underscored: true
    }
    const User = sequelize.define(alias, cols, config)
    User.associate = function(models){
        User.belongsTo(models.Rol, {
            as: "rols",
            foreignKey: "roles_id"
        })
    }
    return User;


}