// Learn IIFE

(function bdConnection() {
  // Named IIFE
  console.log(`DB CONNECTED`);
})();

((name) => console.log(`DB CONNECTED 2, ${name}`))("Kaushal");
