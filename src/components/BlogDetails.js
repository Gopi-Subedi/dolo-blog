import { useParams } from "react-router-dom";

const BlogDetails= () =>{

    const { id } = useParams(); 
    // Note: identifier must match the route  path parameter  

    return (
        <div className="blog-details">
            <h2>Blog Details -{id}</h2>

        </div>
    )
}

export default BlogDetails;