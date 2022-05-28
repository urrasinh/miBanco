CREATE DATABASE Banco;

CREATE TABLE transacciones (descripcion varchar(50), fecha varchar(10), monto DECIMAL, cuenta INT);
CREATE TABLE cuentas (id INT, saldo DECIMAL CHECK (saldo >= 0) );


INSERT INTO cuentas values (1, 20000);
INSERT INTO cuentas values (2, 10000);
INSERT INTO cuentas values (3, 50000);
