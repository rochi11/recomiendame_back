import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Usuario from './Usuarios'

// Definir el modelo de datos de mi base de datos

const Sesion = sequelize.define('sesiones', {
    idSesion: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    ip: {
        type: Sequelize.TEXT
    },
    fechaCreacion: {
        type: Sequelize.DATE
    },
    idUsuario: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

Sesion.hasOne(Usuario, {foreignKey: 'idUsuario'});

export default Sesion;