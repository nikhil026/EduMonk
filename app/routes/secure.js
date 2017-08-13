module.exports=function(router,passport){
router.use(function(req,res,next){
  if (req.isAuthenticated())
      return next();

     res.redirect('/auth/login');
});
router.get('/profile',  function(req, res) {
    res.render('profile.ejs', {
        user : req.user
    });
});

router.post('/profile',  function(req, res) {
      if(req.body.check){console.log(req.body);}
  if(req.body.title!=='' && req.body.description!=='' && req.body.content!=='' )
   {var user=req.user;
    var myBlog={
        title:req.body.title,
        description:req.body.description,
        content:req.body.content
      };
user.data.blogs.push(myBlog);

  user.save(function(err,user) {
      if (err)
          return err;
      else {
        return user;
      }

  });
res.redirect('/profile');}

});
router.post('/profile',  function(req, res) {
       console.log(req.body);
  if(req.body.title!=='' && req.body.description!=='' && req.body.content!=='' )
   {var user=req.user;
    var myBlog={
        title:req.body.title,
        description:req.body.description,
        content:req.body.content
      };
user.data.blogs.push(myBlog);

  user.save(function(err,user) {
      if (err)
          return err;
      else {
        return user;
      }

  });
res.redirect('/profile');}

});


router.get('/connect/local',function(req,res){res.render('connect-local.ejs')});


router.get('/*',function(req,res){
  res.redirect('/profile');
})
}
