import PropTypes from "prop-types"
export const ProductDetail = ({product = {}, handlerRemoveProduct, handlerProductSelected}) => {


    return <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td>
                <button className="btn btn-secondary btn-sm" onClick={() => handlerProductSelected(product)}>
                    update
                </button>
            </td>
            <td>
                <button className="btn btn-danger btn-sm" onClick={() => handlerRemoveProduct(product.id)}>
                    remove
                </button>
            </td>
        </tr>
}

ProductDetail.propTypes = {
    product: PropTypes.object.isRequired,
    handlerRemoveProduct : PropTypes.func.isRequired,
    handlerProductSelected : PropTypes.func.isRequired

}