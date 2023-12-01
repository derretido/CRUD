import { Model,DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";


export interface ProdutoInstance extends Model{
    id:number
    nome:string
    preco:number
}


export const Produto = sequelize.define<ProdutoInstance>("Produto, ",{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    nome:{ 
        type:DataTypes.STRING
    },
    preco:{
        type:DataTypes.DECIMAL(6,2)
    }
    
},{
    tableName:'produtos',
    timestamps:false
})