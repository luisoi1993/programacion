CREATE DATABASE bar;

use restaurante ;

CREATE TABLE clientes(
  id_usuario INT NOT NULL PRIMARY KEY,
  nombre_cliente VARCHAR (60)NULL,
  apellidos_cliente VARCHAR (60)NULL,
  fecha
  hora
  contraseña varchar(6) //obligatorio
  dni/nie
  rol (0 o 1)
  puntos
  edad
  direccion_cliente VARCHAR(60) NOT NULL,
  telefono_cliente NUMERIC(10,0)NOT NULL,
  facebook_cliente VARCHAR(60)NULL,
  correo_cliente VARCHAR(30)NULL primary key
);

CREATE TABLE reservaMesas(
  id_reserva INT NOT NULL PRIMARY KEY,
  id_usuario INT,
  numero_personas INT(50),

  FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE carta(
  id_plato INT NOT NULL PRIMARY KEY,
  nombre_plato VARCHAR(50),
  cartaSI VARCHAR(5),
  cartaNo VARCHAR(5),
);
