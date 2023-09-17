import './menu.css';
const Menu = () =>{
    return(
        <div className='menu-wrapper' style={{width:'auto', backgroundColor:'#eee',padding:'20px',textAlign:'center'}}>
            <a href="/">Home</a>
            <a href="/contactus">Contact Us</a>
            <a href="/aboutus">About Us</a>
        </div>
    )
}
export default Menu;