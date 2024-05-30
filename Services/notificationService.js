const Notification = require("../Models/notificationModel");

class NotificationService {
  /**
   * Creates a new notification.
   *
   * @param {string} userId - The ID of the user to notify.
   * @param {string} message - The notification message.
   * @param {string} status - The status of the notification.
   * @returns {Object} - The created notification object.
   * @throws {Error} - Throws an error if any required field is missing.
   */

  async createNotification(userId, message, status) {
    if (!userId || !message || !status) {
      throw new Error("Please fill all fields");
    }

    const notification = await Notification.create({
      user_id: userId,
      message,
      status,
    });

    return notification;
  }

  /**
   * Retrieves a notification by its ID.
   *
   * @param {string} notificationId - The ID of the notification.
   * @returns {Object} - The notification object.
   * @throws {Error} - Throws an error if the notification is not found.
   */

  async getNotification(notificationId) {
    if (!notification) {
      throw new Error("Notification not found");
    }
    return notification;
  }

  /**
   * Retrieves all notifications.
   *
   * @returns {Array} - An array of notification objects.
   */

  async getNotifications() {
    const notifications = await Notification.find({}).populate("user_id");
    return notifications;
  }

  /**
   * Updates a notification by its ID.
   *
   * @param {string} notificationId - The ID of the notification.
   * @param {Object} updateData - The data to update the notification with.
   * @returns {Object} - The updated notification object.
   * @throws {Error} - Throws an error if the notification is not found.
   */

  async updateNotification(notificationId, updateData) {
    const notification = await Notification.findByIdAndUpdate(
      notificationId,
      updateData,
      { new: true },
    );
    if (!notification) {
      throw new Error("Notification not found");
    }
    return notification;
  }

  /**
   * Deletes a notification by its ID.
   *
   * @param {string} notificationId - The ID of the notification.
   * @returns {Object} - The deleted notification object.
   * @throws {Error} - Throws an error if the notification is not found.
   */

  async deleteNotification(notificationId) {
    const notification = await Notification.findByIdAndDelete(notificationId);
    if (!notification) {
      throw new Error("Notification not found");
    }
    return notification;
  }
}

module.exports = new NotificationService();
