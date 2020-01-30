import Sequelize from 'sequelize';
import {
    sequelize
} from '../database/database';
import Producto from './Productos';

// Definir el modelo de datos de mi base de datos

const Categoria = sequelize.define('categorias', {
    idCategoria: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    descripcion: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});

Categoria.hasMany(Producto, {foreignKey: 'idProducto'})

export default Categoria;