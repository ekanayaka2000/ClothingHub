const cloudinary = require('cloudinary').v2;
const multer = require('multer');

cloudinary.config({
    cloud_name: 'dxxja4zlk',
    api_key: '254799244136977',
    api_secret: 't6Ch8SsHkCjfhtx8M5gbQwPeL94',
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
    const result = await cloudinary.uploader.upload(file, {
        resource_type: 'auto'
    })

    return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };