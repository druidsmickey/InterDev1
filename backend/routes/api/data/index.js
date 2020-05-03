const router = require('express').Router();
const controller = require('./dataController');
const Images = require('../../../models/images.js');

router.get('/cctv', controller.cctv);
router.post('/addcctvs', controller.addcctvs);

router.get('/recorder', controller.recorder);
router.post('/addrecorders', controller.addrecorders);

router.get('/accessory', controller.accessory);
router.post('/addaccessory', controller.addaccessory);

// router.get('/images', controller.images);

router.get('/brand', controller.brand);


router.get('/', function(req, res, next) {

  Images.find({}, ['path','caption'], {sort:{ _id: -1} }, function(err, photos) {
    res.render('index', { title: 'Upload Image', msg:req.query.msg, photolist : photos });
    
  });

});

/** Upload file to path and add record to database */

router.post('/upload', function(req, res) {

  upload(req, res,(error) => {
      if(error){
         res.redirect('/?msg=3');
      }else{
        if(req.file == undefined){
          
          res.redirect('/?msg=2');

        }else{
             
            /**
             * Create new record in mongoDB
             */
            var fullPath = "files/"+req.file.filename;

            var document = {
              path:     fullPath, 
              caption:   req.body.caption
            };
  
          var photo = new Image(document); 
          photo.save(function(error){
            if(error){ 
              throw error;
            } 
            res.redirect('/?msg=1');
         });
      }
    }
  });    
});

module.exports = router;
