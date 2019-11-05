const bcrypt = require('bcrypt');
const saltRounds = 10;
exports.seed = async(knex) => {
  // Deletes ALL existing entries
  await knex.raw('SET foreign_key_checks = 0');

  await knex('users').del();
  const hash = await bcrypt.hash('secret', saltRounds);
  await knex('users').insert([
    {name: 'admin', email:'admin@mail.com', password:hash}
  ]);

  await knex('categories').del();
  await knex('categories').insert([
    {name: 'cat 1'},
    {name: 'cat 2'},
    {name: 'cat 3'}
  ]);

  await knex('posts').del();
  await knex('posts').insert([
    {user_id:1, category_id:1, title:'post 1', body:'test 1'},
    {user_id:1, category_id:1, title:'post 2', body:'test 2'},
    {user_id:1, category_id:1, title:'post 3', body:'test 3'}
  ]);

  await knex('tags').del();
  await knex('tags').insert([
    {name: 'tag 1'},
    {name: 'tag 2'},
    {name: 'tag 3'}
  ]);

  await knex('posts_tags').del();
  await knex('posts_tags').insert([
    {post_id:1, tag_id:1},
    {post_id:1, tag_id:2},
    {post_id:1, tag_id:3},
    {post_id:2, tag_id:2},
    {post_id:3, tag_id:1},
    {post_id:3, tag_id:2}
  ]);

  await knex.raw('SET foreign_key_checks = 1');
};
