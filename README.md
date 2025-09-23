# nodejs

## Crear el modelo Usuario
npx sequelize-cli model:generate --name Usuario --attributes nombre:string,email:string,password:string,activo:boolean

## Ejecutar la migración

npm run db:migrate

## crear usuarios

npx sequelize-cli seed:generate --name demo-usuarios
