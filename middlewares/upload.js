const multer = require("multer");
const path = require("path");

const makeStorage = (folder) =>
  multer.diskStorage({
    destination: (req, file, cb) => cb(null, `uploads/${folder}`),
    filename: (req, file, cb) =>
      cb(null, Date.now() + path.extname(file.originalname)),
  });

const uploadProfile     = multer({ storage: makeStorage("profile") });
const uploadCertificate = multer({ storage: makeStorage("certificates") });

module.exports = { uploadProfile, uploadCertificate };
