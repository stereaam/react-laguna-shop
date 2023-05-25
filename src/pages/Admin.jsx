import React from "react";
import Layout from "../components/Layout";
import products from "../utils/products.json";
function downloadCSV(data) {
	var csvString = convertToCSV(data);

	var blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });

	var link = document.createElement("a");
	link.href = URL.createObjectURL(blob);
	link.download = "products.csv";
	link.style.display = "none";

	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

function convertToCSV(jsonData) {
	var categories = Object.keys(jsonData);
	var csv = "Category,Name,Price,Brand,Sold,Likes\n";
	categories.forEach(function (category) {
		var items = jsonData[category].items;
		items.forEach(function (item) {
			csv +=
				category.toUpperCase() +
				"," +
				item.name +
				"," +
				item.price +
				item.currency +
				"," +
				item.brand +
				"," +
				item.numbersSold +
				"," +
				item.likes +
				"\n";
		});
	});
	console.log(csv);
	return csv;
}

function downloadTopLikedCSV(data) {
	var topLikedProducts = getTopLikedProducts(data);
	console.log(topLikedProducts);
	var csvString = convertToCSV(topLikedProducts);
	var blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });

	var link = document.createElement("a");
	link.href = URL.createObjectURL(blob);
	link.download = "most_liked_products.csv";
	link.style.display = "none";

	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

function downloadTopSoldCSV(data) {
	var topSoldProducts = getTopSoldProducts(data);
	var csvString = convertToCSV(topSoldProducts);
	var blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });

	var link = document.createElement("a");
	link.href = URL.createObjectURL(blob);
	link.download = "most_sold_products.csv";
	link.style.display = "none";

	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

function getTopLikedProducts(jsonData) {
	var categories = Object.keys(jsonData);
	var products = [];

	categories.forEach(function (category) {
		var items = jsonData[category].items;
		items.forEach(function (item) {
			products.push(item);
		});
	});

	// Sort the products based on likes in descending order
	products.sort(function (a, b) {
		return b.likes - a.likes;
	});

	// Return the top 3 products
	var topLikedProducts = {
		items: products.slice(0, 3),
	};

	// Create a new JSON object with the top liked products
	var filteredJSON = {};

	topLikedProducts.items.forEach(function (item) {
		var category = categories.find(function (category) {
			return jsonData[category].items.includes(item);
		});

		if (category) {
			if (!filteredJSON[category]) {
				filteredJSON[category] = {
					items: [],
				};
			}

			filteredJSON[category].items.push(item);
		}
	});

	categories.forEach(function (category) {
		if (filteredJSON[category]) {
			filteredJSON[category].image = jsonData[category].image;
			filteredJSON[category].name = jsonData[category].name;
			filteredJSON[category].description = jsonData[category].description;
		}
	});

	return filteredJSON;
}

function getTopSoldProducts(jsonData) {
  var categories = Object.keys(jsonData);
  var products = [];

  categories.forEach(function (category) {
    var items = jsonData[category].items;
    items.forEach(function (item) {
      products.push(item);
    });
  });

  // Sort the products based on numbersSold in descending order
  products.sort(function (a, b) {
    return b.numbersSold - a.numbersSold;
  });

  // Return the top 3 products
  var topSoldProducts = {
    items: products.slice(0, 3)
  };

  // Create a new JSON object with the top sold products
  var filteredJSON = {};

  topSoldProducts.items.forEach(function (item) {
    var category = categories.find(function (category) {
      return jsonData[category].items.includes(item);
    });

    if (category) {
      if (!filteredJSON[category]) {
        filteredJSON[category] = {
          items: []
        };
      }

      filteredJSON[category].items.push(item);
    }
  });

  // Copy the remaining properties from the original JSON to the filtered JSON
  categories.forEach(function (category) {
    if (filteredJSON[category]) {
      filteredJSON[category].image = jsonData[category].image;
      filteredJSON[category].name = jsonData[category].name;
      filteredJSON[category].description = jsonData[category].description;
    }
  });

  return filteredJSON;
}
function Admin() {
	return (
		<Layout>
			<div className="d-flex flex-column justify-content-center align-items-center text-white">
				{Object.keys(products).map((key) => {
					console.log(products[key].name);
					return (
						<div className="m-5 align-items-center d-flex flex-column justify-content-center">
							<h2>{products[key].name}</h2>
							<div>
								{products[key].items.map((product) => {
									return (
										<div
											className="d-flex align-items-center border border-secondary m-4 p-4"
											style={{
												width: "600px",
												backgroundColor: "#121212",
												borderRadius: "25px",
											}}
										>
											<p className="p-1 w-25 h-100 d-flex justify-content-center align-items-center m-4">
												{<img src={product.image} alt="img" />}
											</p>
											<div>
												<p className="m-2 p-1">
													<strong>Name:</strong> {product.name}
												</p>
												<p className="m-2 p-1">
													<strong>Price:</strong> {product.price}
													{product.currency}
												</p>
												<p className="m-2 p-1">
													<strong>Brand:</strong> {product.brand}
												</p>
												<p className="m-2 p-1">
													<strong>Numbers Sold: </strong>
													{product.numbersSold}
												</p>
												<p className="m-2 p-1">
													<strong>Likes: </strong>
													{product.likes}
												</p>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
				<div>
					<button
						className="mb-4 m-2 p-2  btn btn-light"
						onClick={() => {
							downloadCSV(products);
						}}
					>
						Download report
					</button>
					<button
						className="mb-4 m-2 p-2 btn btn-danger"
						onClick={() => {
							downloadTopLikedCSV(products);
						}}
					>
						Most liked products
					</button>
					<button
						className="mb-4 m-2 p-2 btn btn-success"
						onClick={() => {
							downloadTopSoldCSV(products);
						}}
					>
						Most sold products
					</button>
				</div>
				<br></br>
			</div>
		</Layout>
	);
}

export default Admin;
