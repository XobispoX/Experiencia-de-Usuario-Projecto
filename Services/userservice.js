const knex = require('knex')({
  client: 'mysql',
  connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
  }
});

function editEmail(id,newEmail) { knex("users").where("id", "=", id).update({ email: newEmail })}


async function PutUser(id,Newname,Newemail){
 await knex('users').where('id','=',id).update({
   name: Newname,
    email: Newemail
 });

return;
}

module.exports={
  PutUser
};