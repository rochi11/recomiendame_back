import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Usuario from './Usuarios';

// Definir el modelo de datos de mi base de datos

const Compra = sequelize.define('compras', {
    idCompra: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    listaProductos: {
        type: Sequelize.TEXT
    },
    idRecomendacion: {
        type: Sequelize.DATE
    },
    idUsuario: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

Compra.hasOne(Usuario, {foreignKey: 'idUsuario'});

export default Compra;