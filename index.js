export const handler = async (event) => {
    const method = event.requestContext.http.method;
    const path = event.rawPath;
    const id = event.pathParameters?.id;
  
    const products = [
      { id: "1", name: "Laptop", price: 1200 },
      { id: "2", name: "Phone", price: 800 },
      { id: "3", name: "Keyboard", price: 100 }
    ];
  
    // POST /products
    if (method === "POST" && path === "/products") {
      const body = JSON.parse(event.body || "{}");
  
      const newProduct = {
        id: String(products.length + 1),
        name: body.name || "New Product",
        price: body.price || 0
      };
  
      return response(201, newProduct);
    }
  
    // GET /products
    if (method === "GET" && path === "/products") {
      return response(200, products);
    }

      // GET /products
      if (method === "GET" && path === "/cars") {
        return response(200, [{ id: "1", name: "Camry", price: 120000 }]);
      }
  
    // GET /products/{id}
    if (method === "GET" && id) {
      const product = products.find(p => p.id === id);
  
      if (!product) {
        return response(404, { message: "Product not found" });
      }
  
      return response(200, product);
    }
  
    return response(404, { message: "Route not found" });
  };
  
  function response(statusCode, body) {
    return {
      statusCode,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };
  }
  