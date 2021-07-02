import React, { useState } from 'react';
import './FormComponent.css';
import { Button, Form, TextArea } from 'semantic-ui-react';

const FormComponent = ({ addOrEdit }) => {
	const initialState = {
		producto: '',
		precio: '',
		descripcion: '',
	};

	const [values, setValues] = useState(initialState);

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		// console.log(name, value);
		//Copiamos los valores actuales, y el input [name] que estemos actualizando, le colocamos el valor actual que estemos tipeando
		setValues({ ...values, [name]: value });
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		addOrEdit(values);
		setValues({ ...initialState });
	};

	return (
		<div className='form-container'>
			<Form onSubmit={handleOnSubmit}>
				<Form.Field>
					<input
						placeholder='Producto'
						name='producto'
						onChange={handleOnChange}
						value={values.producto}
					/>
				</Form.Field>
				<Form.Field>
					<input
						placeholder='Precio'
						name='precio'
						onChange={handleOnChange}
						value={values.precio}
					/>
				</Form.Field>
				<Form.Field>
					<TextArea
						placeholder='Descripción'
						name='descripcion'
						onChange={handleOnChange}
						value={values.descripcion}
					/>
				</Form.Field>
				<Button type='submit' primary fluid>
					Guardar
				</Button>
			</Form>
		</div>
	);
};

export default FormComponent;
