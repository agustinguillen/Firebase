import React, { useEffect, useState } from 'react';
import FormComponent from './FormComponent';

// Importamos Firebase para guardar un dato
import { db } from '../firebase';

// Styles

const styles = {
	cardStyles: {
		backgroundColor: 'white',
		padding: 20,
		margin: 10,
		borderRadius: 8,
		boder: '1px solid black',
	},
};

const Products = () => {
	const [products, setProducts] = useState([]);

	const addOrEdit = async (object) => {
		// El Objeto que recibimos por parametro nos trae el state
		// desde el componente FormComponent
		// console.log('Hice Click');
		console.log(object);
		await db.collection('productos').doc().set(object);
		console.log('nuevo producto agregado!');
	};

	const getProducts = () => {
		// QuerySnapshot es el nombre de la respuesta que nos da Firebase
		db.collection('productos').onSnapshot((querySnapshot) => {
			const docs = [];
			querySnapshot.forEach((doc) => {
				// console.log(doc.data());
				// console.log(doc.id);
				docs.push({ ...doc.data(), id: doc.id });
				// Cada vez que nos traigamos todos los datos, vamos a combinar c/u de esos objetos con su id en un nuevo objeto
				// Cada vez que nos traigamos todos los datos, vamos a combinar c/u de esos objetos con su id en un nuevo objeto
				console.log(docs);
			});
			setProducts(docs);
		});
	};

	// Al poner el array vacio se va a ejecutar la primera vez que cargue el componente
	useEffect(() => {
		// Le pasamos la funcion getProducts() dentro del useEffect para que
		// se ejecute cada vez que cargue el componente
		getProducts();
	}, []);

	return (
		<div>
			<h1>Products</h1>
			<FormComponent addOrEdit={addOrEdit} />
			{products.map((item) => (
				<div key={item.id} style={styles.cardStyles}>
					<h1>{item.producto}</h1>
					<p>Precio: {item.precio}</p>
					<p>Descripción: {item.descripcion}</p>
				</div>
			))}
		</div>
	);
};

export default Products;
