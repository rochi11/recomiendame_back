import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Categoria from './Categorias';
import Recomendacion from './Recomendaciones';

// Definir el modelo de datos de mi base de datos

const Producto = sequelize.define('productos', {
    idProducto: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.TEXT
    },
    precio: {
        type: Sequelize.DATE
    },
    descripcion: {
        type: Sequelize.INTEGER
    },
    barcode: {
        type: Sequelize.INTEGER
    },
    marca: {
        type: Sequelize.INTEGER
    },
    imagen: {
        type: Sequelize.INTEGER
    },
    cantidad: {
        type: Sequelize.INTEGER
    },
    cantidadMinima: {
        type: Sequelize.INTEGER
    },
    idCategoria: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

Producto.hasOne(Categoria, {foreignKey: 'idCategoria'});
Producto.hasMany(Recomendacion, {foreignKey: 'idRecomendacion'});

export default Producto;