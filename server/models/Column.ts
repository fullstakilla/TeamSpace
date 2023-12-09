import seq from '../db/postgres';
import { DataTypes, Model, Optional } from 'sequelize';
import {IColumn} from '../../models/Column'
import Board from './Board';

class Column extends Model<IColumn, Optional<IColumn, 'id'>> implements IColumn {
    public id!: number;
    public boardId!: number;
    public name!: string;
    public place!: number;

    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
    public readonly deletedAt?: Date;
  }
  
  Column.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      place : {
        type : DataTypes.INTEGER,
        allowNull : false
        },
      boardId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      sequelize: seq,
      paranoid: true,
    }
  );
  // Column.belongsTo(Board, { foreignKey: 'boardId' })
  
  export default Column;
