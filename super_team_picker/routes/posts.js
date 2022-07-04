const express = require('express');
const knex = require('../db/client.js');

const router = express.Router()

//------------------POST ROUTES---------------------------

//------------------------Index of all Posts: ---------------

// the below path automatically assumes that is has the '/posts' prefixed to it
router.get('/', (req,res) => {
  knex('cohorts')
  .orderBy('id', 'desc')
  .then(cohorts => {
    if(cohorts){
        res.render('posts/cohorts', {cohorts: cohorts})
    }else{
        res.send("<h2>Can not find any cohort, please create your first cohort</h2>")
    }
    
  })
})

//------------ Render New Post Template----------------
router.get('/new', (req, res) => {
  res.render('posts/new', { post: false });
})

//----------------Create new Post------------------------
router.post('/', (req, res) => {
  knex('cohorts')
  .insert({
    name: req.body.name,
    logoUrl: req.body.logoUrl,
    members: req.body.members
  })
  .returning('*')
  .then(cohorts => {
    const cohort = cohorts[0]
    res.redirect(`posts/${cohort.id}`)
})
})

//-----------------Show a single Post----------------------
router.get('/:id', (req, res) => {
    knex('cohorts')
    .where('id', req.params.id)
    .first() 
    .then(cohorts => {
        if (!cohorts) {
            res.send('No post found')
    } else {
        res.render('posts/single', {cohorts: cohorts})
    }
})
})


// ------------------Render Edit Post Template--------------
router.get('/:id/Edit', (req, res) => {
    knex('cohorts')
    .where('id', req.params.id)
    .first()
    .then(cohorts => {
        res.render('posts/edit', {cohorts: cohorts})
    })
})

//---------------------Update particular Post---------------
router.patch('/:id', (req, res) => {
  knex('cohorts')
  .where('id', req.params.id)
  .update({
    name: req.body.name,
    logoUrl: req.body.logoUrl,
    members: req.body.members
  })
  .then(() => {
      res.redirect(`/posts/${req.params.id}`)
  })
})

//--------------Delete/Destroy particular--------------
router.delete("/:id", (req, res) => {
  knex('cohorts')
  .where('id', req.params.id)
  .del()
  .then(() => {
    res.redirect('/posts')
  })
})


module.exports = router;