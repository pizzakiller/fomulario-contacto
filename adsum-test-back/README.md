## API

Es un ejecicio sencillo con nodejs, express y sequelize

guarda en una base de datos el objeto que recibe

### Modelo: 
```
{
  nombre: string,
  empresa: string,
  email: string,
  telefono: string,
  categoria: string,
  mensaje: string
}
```

### Rutas:

post:  /api/contacto/agregar

nota: modificar los datos de conexión la base de datos src/database.js 
