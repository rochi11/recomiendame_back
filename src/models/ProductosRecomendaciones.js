import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Usuario from './Usuarios';
import Producto from './Productos';

// Definir el modelo de datos de mi base de datos

const ProductoRecomendacion = sequelize.define('producto_recomendacion', {
    idProdRec: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    idProducto: {
        type: Sequelize.INTEGER
    },
    idRecomendacion: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

ProductoRecomendacion.hasOne(Usuario, {foreignKey: 'idUsuario'});

ProductoRecomendacion.hasOne(Producto, {foreignKey: 'idProducto'});

export default ProductoRecomendacion;