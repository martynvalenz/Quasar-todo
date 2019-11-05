
exports.up = function(knex) {
    return Promise.all([
        knex.schema.createTable('users', (table) => {
            table.increments();
            table.string('name', 50);
            table.string('email', 75);
            table.string('picture').nullable();
            table.text('biography').nullable();
            table.string('password', 128);
            table.timestamps();
        }),
        knex.schema.createTable('categories', (table) => {
            table.increments();
            table.string('name', 50);
            table.timestamps();
        }),
        knex.schema.createTable('posts', (table) => {
            table.increments();
            table.integer('user_id').unsigned().notNullable().references('id').inTable('users');
            table.integer('category_id').unsigned().notNullable().references('id').inTable('categories');
            table.string('title', 100);
            table.string('picture', 100).nullable();
            table.text('body');
            table.timestamps();
        }),
        knex.schema.createTable('tags', (table) => {
            table.increments();
            table.string('name', 100);
            table.timestamps();
        }),
        knex.schema.createTable('posts_tags', (table) => {
            table.integer('tag_id').unsigned().notNullable().references('id').inTable('tags');
            table.integer('post_id').unsigned().notNullable().references('id').inTable('posts');
        }),
    ])
};

exports.down = function(knex) {
    return Promise.all([
        knex.schema.dropTableIfExists('posts_tags'),
        knex.schema.dropTableIfExists('posts'),
        knex.schema.dropTableIfExists('tags'),
        knex.schema.dropTableIfExists('categories'),
        knex.schema.dropTableIfExists('users')
    ]);
};
