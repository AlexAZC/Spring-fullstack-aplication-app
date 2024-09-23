import { useEffect, useState } from "react"


const initialDataForm  = {
    id: 0, 
    name : "",
    description: "",
    price: ""
}

export const ProductForm = ({handlerAddProduct, productSelected}) => {

    const [form, setForm] = useState(initialDataForm);

    const {id, name , description, price} = form;

    useEffect(() => {
        setForm(productSelected)
    }, [productSelected]);

    return <form onSubmit={(e) => {
        e.preventDefault();

        if(!name || !description || !price){
            alert("Debe completar los datos del formulario")
            return;
        }
        handlerAddProduct(form);
        setForm(initialDataForm);
    }}>
        <div>
            <input placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setForm({...form, name: e.target.value})} 
            className="form-control my-3 w-75"/>
        </div>

        <div>
            <input placeholder="Description"
            name="description"
            value={description}
            onChange={(e) => setForm({...form, description: e.target.value})} 
            className="form-control my-3 w-75"/>
        </div>

        <div>
            <input placeholder="Price"
            name="price"
            value={price}
            onChange={(e) => setForm({...form, price: e.target.value})}
            className="form-control my-3 w-75"/>
        </div>

        <div>
            <button type="submit" className="btn btn-primary">
                {id > 0 ? "Update" : "Create"}
            </button>
        </div>

    </form>


}