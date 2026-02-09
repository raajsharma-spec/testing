console.log("Running Node test...");

let x = 2 + 2;

if (x === 4) {
  console.log("TEST PASSED");
} else {
  console.log("TEST FAILED");
  process.exit(1); // tells GitHub: FAIL
}
