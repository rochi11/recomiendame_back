import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Sesion from './Sesiones';
import Compra from './Compras';
import Afinidad from './Afinidad';
import Recomendacion from './Recomendaciones';

// Definir el modelo de datos de mi base de datos

const Usuario = sequelize.define('usuarios', {
    idUsuario: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    rol: {
        type: Sequelize.VARCHAR
    },
    usuario: {
        type: Sequelize.VARCHAR
    },
    clave: {
        type: Sequelize.VARCHAR
    },
    avatar: {
        type: Sequelize.TEXT
    },
    nombre: {
        type: Sequelize.VARCHAR
    },
    apellido: {
        type: Sequelize.VARCHAR
    },
    sexo: {
        type: Sequelize.TINYINT
    },
    edad: {
        type: Sequelize.INTEGER
    },
    direccion: {
        type: Sequelize.VARCHAR
    },
    enail: {
        type: Sequelize.VARCHAR
    },
    telefono: {
        type: Sequelize.VARCHAR
    },
    token: {
        type: Sequelize.TEXT
    },
    activo: {
        type: Sequelize.INTEGER
    },
    eliminado: {
        type: Sequelize.INTEGER
    },
    fechaCreacion: {
        type: Sequelize.DATE
    },
    fechaEliminacion: {
        type: Sequelize.DATE
    }
},{
    timestamps: false
});

Usuario.hasOne(Sesion, {foreignKey: 'idSesion'});
Usuario.hasMany(Compra, {foreignKey: 'idCompra'});
Usuario.hasOne(Afinidad, {foreignKey: 'idAfinidad'});
Usuario.hasMany(Recomendacion, {foreignKey: 'idRecomendacion'});

export default Usuario;