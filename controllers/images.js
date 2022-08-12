// const uploads = require("public/images/");
const multer = require('multer');
const path = require("path");
const helpers = require("../public/javascripts/helpers");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/images/');
    },
  
    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  



const ImagesController = {
    Images: (req, res) => {
        console.log('we are here now')

        // app.post('/images', (req, res) => {

        //     // 'profile_pic' is the name of our file input field in the HTML form
            let upload = multer({ storage: storage, fileFilter: helpers.imageFilter }).single('profile_pic');
          
            upload(req, res, function(err) {
                // req.file contains information of uploaded file
                // req.body contains information of text fields, if there were any
                console.log(req.body)
          
                if (req.fileValidationError) {
                    return res.send(req.fileValidationError);
                }
                // else if (!req.file) {
                //     return res.send('Please select an image to upload');
                // }
                else if (err instanceof multer.MulterError) {
                    return res.send(err);
                }
                else if (err) {
                    return res.send(err);
                }
          
                console.log(`${req.file.path}`)
          
                // Display uploaded image for user validation
                // res.send(`You have uploaded this image: <hr/><img src="${req.file.path}" width="500"><hr /><a href="./">Upload another image</a>`);
            });
        //   });
          
    },
};

module.exports = ImagesController;