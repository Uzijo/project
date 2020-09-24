const conexion = require("./conexion")
module.exports = {
  insertar(nombre, direccion, ciudad, departamento, sexo, fecha, metfact, cardnum, cardnam, cardexp, cardcvv) {
    return new Promise((resolve, reject) => {
      conexion.query(`insert into clientes
            (nombre,direccion,ciudad,departamento,sexo,fecha,metfact,cardnum,cardnam,cardexp,cardcvv)
            values
            (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [nombre, direccion, ciudad, departamento, sexo, fecha, metfact, cardnum, cardnam, cardexp, cardcvv], (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados.insertId);
        });
    });
  },
}
