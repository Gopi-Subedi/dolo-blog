import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails= () =>{

    const history =useHistory();

    const deleteHandler = ()=>{
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method: 'DELETE'
        }).then(()=>{
            console.log("Blog deleted!!!");
            history.push('/');
        })
    }
    const { id } = useParams(); 
    // Note: identifier must match the route  path parameter  
    const {data : blog , isLoading, error} = useFetch('http://localhost:8000/blogs/' + id);

    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error} </div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={deleteHandler}>Delete</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails;