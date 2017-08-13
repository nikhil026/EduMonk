module.exports=function(router,passport){
  router.use(passport.authenticate('bearer',{session:false}));
  router.get('/testAPI',(req,res)=>{res.json({secretData:'123'})});
}
