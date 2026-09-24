// CampusEats Task Tracker
// Improved version for SE3090 Lab 08

const VIP_DISCOUNT = 0.1;

const tasks = [
  "Design the menu screen",
  "Build the orders API",
  "Add user login"
];

/**
 * Calculate the total price for an order.
 *
 * @param {number} price - Price of one item.
 * @param {number} quantity - Number of items.
 * @param {string} customerType - Customer type, e.g. "vip".
 * @returns {number} Calculated total.
 */
function calculateTotal(price, quantity, customerType) {
  if (!Number.isFinite(price) || !Number.isFinite(quantity)) {
    throw new Error("price and quantity must be valid numbers");
  }

  if (price < 0 || quantity < 0) {
    throw new Error("price and quantity must be >= 0");
  }

  const subtotal = price * quantity;

  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}

function getOpenTaskCount() {
  return tasks.length;
}

module.exports = {
  VIP_DISCOUNT,
  tasks,
  calculateTotal,
  getOpenTaskCount
};
