const fs = require('fs');
const path = require('path');

const productFilePath = path.join(__dirname, '../data/productDataBase.json');
const product = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('product');
	},

	//Detail - Detail from one product*/
	/*detail: (req, res) => {
		res.render('detail');
	},

	// Create - Form to create*/
	create: (req, res) => {
		res.render('product-create-form');
	},
	
	//Create -  Method to store*/
	store: (req, res) => {
		// Do the magic
		console.log(req.body)
		const idprod = product.length + 1
		const prod = { 
			id: idprod,
			name : req.body.name,
			price : req.body.price,
			marca: req.body.marca,
			stock: req.body.stock,
			description: req.body.description
				
		}

        console.log (idprod)
		product.push(prod);
		let productJSON = JSON.stringify(product);
        fs.writeFileSync(__dirname + "/../data/productDataBase.json", productJSON);
		res.render("index", {title: "Producto creado"})
		
	},

	 
	/*Update - Form to edit*/
	edit: (req, res) => {
		var idproduct = req.params.id;
        var productFound;
        for(var i=0;i < product.length;i++){
            if(product[i].id == idproduct){
                productFound = product[i];
                break;
            }
        }
        if(productFound){
            res.render("product-edit-form",{productFound})
        }else{
            res.send("Producto invalido");
        }

		//res.render('product-edit-form');
	},

	/*Update - Method to update*/
	update: (req, res) => {
		// Do the magic
		console.log ("update");
		let id=req.params.id;
		let prodedit = product.map(function (prod){
			if(prod.id == id){
				prod = req.body 
				prod.id=id; 
			}
			return prod;
			});

			let idJSON=	JSON.stringify(prodedit);	
			fs.writeFileSync(__dirname + "/../data/productDataBase.json",idJSON);

			res.render("index", {title: "Producto editado exitosamente"});
			
		},
		
	

	/* Delete - Delete one product from DB*/
	destroy : (req, res) => {
		// Do the magic
		let idProduct = req.params.id;
		let productdestroy=product.filter(function(prod){
			return prod.id !=idProduct;
		})
	
	productJSON = JSON.stringify(productdestroy);
	fs.writeFileSync(__dirname + "/../data/productDataBase.json",
	productJSON);
	res.render("index", {title: "Producto eliminado exitosamente"})
},

	list: function (req,res,next){

		const product = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'));
		
		res.render ("list", {product});
		
	}


};

module.exports = controller;