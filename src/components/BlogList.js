import { Link } from "react-router-dom";

const BlogList = ({blogs,title,deleteHandler}) =>{//{blogs} = props
   
    return(
        <div className="bloglist">
            <h2>{title}</h2>
            {blogs.map((blog)=>(  //map function similar to foreach & key keeps track of output and compulsary
            <div className="blog-preview" key={blog.id}>
                <Link to={'/blog/${blog.id}'}>
                    {/* in order to use javascript we use {' to define varaible we include ${} within'} */}
                    <h2>{blog.title}</h2>
                    <p>written by: {blog.author}</p>
                </Link>
                {/* <button onClick={()=>deleteHandler(blog.id)}>Delete Blog</button> */}
            </div>
        )
        )}
        </div>
        
    );
}

export default BlogList;