const {
    showCart,
    showCartById,
    createCart,
    updateCart,
    deleteCart,
  } = cartController;
  // Get All Cart
  router.get("/cart", showCart);
  // Get Single Cart
  router.get("/cart/:id", showCartById);
  // Create New Cart
  router.post("/cart", createCart);
  // Update Cart
  router.patch("/cart/:id", updateCart);
  // Delete Cart
  router.delete("/cart/:id", deleteCart);
