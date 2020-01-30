import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Usuario from './Usuarios';

// Definir el modelo de datos de mi base de datos

const Recomendacion = sequelize.define('recomendaciones', {
    idRecomendacion: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    barcode: {
        type: Sequelize.VARCHAR
    },
    idProductoRecomendado: {
        type: Sequelize.INTEGER
    },
    idUsuario: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

Recomendacion.hasOne(Usuario, {foreignKey: 'idUsuario'});

Recomendacion.hasMany('Producto', {foreignKey: 'idProducto'});

export default Recomendacion;