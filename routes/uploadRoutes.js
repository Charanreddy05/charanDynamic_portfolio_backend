const express = require("express");
const router = express.Router();
const { uploadProfile, uploadCertificate } = require("../middlewares/upload");

// Profile image upload
router.post("/profile", uploadProfile.single("profileImage"), async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      imageUrl: `http://localhost:5000/uploads/profile/${req.file.filename}`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Certificate file upload  — now correctly saves to uploads/certificates/
router.post("/certificate", uploadCertificate.single("certificate"), async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      certificateUrl: `http://localhost:5000/uploads/certificates/${req.file.filename}`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
