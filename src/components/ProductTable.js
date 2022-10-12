import ProductRow from "./ProductRow";
import './ProductTable.css';

function ProductTable(props) {
    console.log(props)
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products[0].map((item) => {

                        return <ProductRow id={item.id} name={item.name} price={item.price} />
                    })}
                </tbody>
            </table>
        </div>)

}
export default ProductTable;