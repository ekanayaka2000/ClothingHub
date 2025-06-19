const cloudinary = require('cloudinary').v2;
const multer = require('multer');

cloudinary.config({
    cloud_name: 'dkcjlcdmw',
    api_key: '458926628872232',
    api_secret: 'lRLwnVfeOe2FLovY77CtRC_CjVo',
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