const test = require("node:test");
const assert = require("node:assert/strict");

const {
  calculateTotal,
  getOpenTaskCount,
  VIP_DISCOUNT
} = require("./tasks");

test("calculates a normal customer total", () => {
  assert.equal(calculateTotal(100, 2, "regular"), 200);
});

test("applies the VIP discount", () => {
  assert.equal(
    calculateTotal(100, 2, "vip"),
    200 * (1 - VIP_DISCOUNT)
  );
});

test("rejects negative price", () => {
  assert.throws(
    () => calculateTotal(-10, 2, "regular"),
    /price and quantity must be >= 0/
  );
});

test("rejects invalid numeric input", () => {
  assert.throws(
    () => calculateTotal(Number.NaN, 2, "regular"),
    /valid numbers/
  );
});

test("returns the number of open tasks", () => {
  assert.equal(getOpenTaskCount(), 4);
});
