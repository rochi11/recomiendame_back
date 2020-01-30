import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Usuario from './Usuarios';

// Definir el modelo de datos de mi base de datos

const Afinidad = sequelize.define('afinidad', {
    idAfinidad: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    grado: {
        type: Sequelize.TEXT
    },
    fechaCreacion: {
        type: Sequelize.TEXT
    },
    idFriend: {
        type: Sequelize.TEXT
    },
    idUsuario: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});

Afinidad.hasOne(Usuario, {foreignKey: 'idUsuario'});

export default Afinidad;