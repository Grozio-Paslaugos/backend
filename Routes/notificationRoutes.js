// server

const express = require("express");
const router = express.Router();

// Notification functions

const {
  createNotification,
  getNotification,
  getNotifications,
  updateNotification,
  deleteNotification,
} = require("../Controllers/notificationController");

// middleware functions

const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");

// Notification routes
// http://localhost:5000/api/notifications/<...>
// Requires Bearer Token
/*
 *     "userId": "6658fc1e013eed7c95000d98",
 *     "message": "change password immediately!",
 *     "status": "important"
 */

router.post("/create", verifyToken, createNotification);
router.get("/", verifyToken, getNotifications);
router.get("/:notificationId", verifyToken, getNotification);
router.put("/update/:notificationId", verifyToken, updateNotification);
router.delete("/delete/:notificationId", verifyToken, deleteNotification);

module.exports = router;
