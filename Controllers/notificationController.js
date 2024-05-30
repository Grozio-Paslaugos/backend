const notificationService = require("../Services/notificationService");
const asyncHandler = require("express-async-handler");

// create notification

const createNotification = asyncHandler(async (req, res) => {
  const { userId, message, status } = req.body;
  try {
    const notification = await notificationService.createNotification(
      userId,
      message,
      status,
    );
    res.status(201).json(notification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// get notification

const getNotification = asyncHandler(async (req, res) => {
  const { notificationId } = req.params;
  try {
    const notification = await notificationService.getNotification(
      notificationId,
    );
    res.status(200).json(notification);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// get notifications

const getNotifications = asyncHandler(async (req, res) => {
  try {
    const notifications = await notificationService.getNotifications();
    res.status(200).json(notifications);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// update notification

const updateNotification = asyncHandler(async (req, res) => {
  const { notificationId } = req.params;
  const updateData = req.body;
  try {
    const notification = await notificationService.updateNotification(
      notificationId,
      updateData,
    );
    res.status(200).json(notification);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// delete notification

const deleteNotification = asyncHandler(async (req, res) => {
  const { notificationId } = req.params;
  try {
    const notification = await notificationService.deleteNotification(
      notificationId,
    );
    res.status(200).json(notification);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = {
  createNotification,
  getNotification,
  getNotifications,
  updateNotification,
  deleteNotification,
};
