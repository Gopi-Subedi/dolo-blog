import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>Dojo Blog</h1>
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
        </nav>
    );
}
export default Navbar;

//for inline css we can use 
//<h1 {style={
//     color:"red",
//     backgrounsColor:"black"
// }}>hello</h1>
//--->here first pair of {} parenthesis represents use of dynamic value 
//--->second pair of parenthesis represents the use of object or properties


// React is capable of handling request within the browser i.e it intercepts the request to server and handles it in browser
// To implement its feature react provides <Link to=" ">link</Link> tag instead of <a href=" ">weblink</a> tag
// Link tag is imported from react-router-dom