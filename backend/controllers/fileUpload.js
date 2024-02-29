const File=require("../models/File")
const cloudinary = require("cloudinary").v2;
const fs = require('fs');
const path = require('path');

// /file support check
function isFileTypeSupported(type, supportedTypes) {
    return supportedTypes.includes(type);
  }
  
  //cloudinary upload
  async function uploadFileToCloudinary(file, folder) {
    const options = { folder };
    options.resource_type = "auto";
    console.log("temp file path", file.tempFilePath);
    return await cloudinary.uploader.upload(file.tempFilePath, options);
  }

  //image upload handler
  exports.signUp=async(req,res)=>{
    try{

        let imageUrl='';
        //data fetch
        const {phoneNumber,name,email}=req.body;
        console.log(phoneNumber,name,email);

        const file=req.files.imageFile;
        console.log(file);
        // Validate file type
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split(".")[1].toLowerCase();
        console.log("file Type",fileType);

        if (!isFileTypeSupported(fileType, supportedTypes)) {
          return res.status(400).json({
            success: false,
            message: "File format not supported",
          });
        }

        //file format
        console.log("uploading to inBulk");
        const response=await uploadFileToCloudinary(file,"OfficeBanao");
        console.log(response);

        //save to db
        const fileData=await File.create({phoneNumber,name,email,imageUrl:response.secure_url});

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:'Image Successfully uploaded',
        })
    
    }
    catch(error){
        console.error(error);
        res.status(400).json({
            success:false,
            message:'something went wrong',
        })
    }
  }


   // Validate user
  exports.login = async (req, res) => {
    try {
      const { phoneNumber } = req.body;    
      console.log(phoneNumber) ;
      const user = await File.findOne({ phoneNumber });
      if (user) {
        res.json({ success: true, 
          message: 'User Found', 
          data:user });
      } else {
        res.status(404).json({ success: false, message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };