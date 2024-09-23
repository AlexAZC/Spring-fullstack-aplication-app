import PropTypes from "prop-types"
import { ProductDetail } from "./ProductDetail"

export const ProductGrid = ({products = [], handlerRemoveProduct, handlerProductSelected}) => {


    return <table className="table table-hover table-striped">
    <thead>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>description</th>
            <th>price</th>
            <th>update</th>
            <th>remove</th>
        </tr>
    </thead>
    <tbody>
        {products.map(product => {
           return <ProductDetail product={product} 
           key={product.name} 
           handlerRemoveProduct={handlerRemoveProduct}
           handlerProductSelected={handlerProductSelected} />
        })}
    </tbody>
</table>
}

ProductGrid.propTypes = {
    products: PropTypes.array.isRequired,
    handlerRemoveProduct : PropTypes.func.isRequired,
    handlerProductSelected: PropTypes.func.isRequired
}
