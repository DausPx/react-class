
function  ListItem(props) {
    const {text, hasLogo} = props
    return <div style={
        {
            display:"flex",
            height: '36px',
            justifyContent: 'space-around',
            width: '100%',
            alignItems: "center"
        }
    }>
        {hasLogo && (
            <div>L</div>
        )}
        <p>{text}</p>
    </div>
    
}
export default ListItem