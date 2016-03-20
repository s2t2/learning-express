
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("robots", function (table) {
      table.increments(); // integer id
      table.string("name").notNullable();
      table.timestamp("created_at").defaultTo(knex.raw('now()')).notNullable();
    }) // create robots table
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("robots")
  ]);
};
