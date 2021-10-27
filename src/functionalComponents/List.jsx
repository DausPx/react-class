
function List(props) {
    const { children} = props
    return <div
    style={
        {
            minWidth: '200px',
            display: 'flex',
            flexDirection: 'column',
        }
    }>
        {children}
    </div>
}
export default List