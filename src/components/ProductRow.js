
function ProductRow(props) {
    return (
        <tr key={props.id}>
            <td>{props.name}</td>
            <td>{props.price}</td>
        </tr>
    )
}
export default ProductRow;