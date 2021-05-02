import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home =() =>{

    // const deleteHandler=(id)=>{
    //     const newBlogs = blogs.filter((blog)=>blog.id!==id);
    //     // filter is similar to match
    //     setBlogs(newBlogs);
    // }

    const {data:blogs, isLoading, error }= useFetch('http://localhost:8000/blogs'); 
    // we can rename the object data as blogs

    // const [name,setName]=useState("Mario");
    // const [name,setName] = useState("Mario");
    // const [age,setAge] = useState();

    // const clickHandler =(e)=>{//e is an event object
    //     // setName("Ram");
    //     // setAge(25);
    // }
    // const clickHandlerAgain =(name)=>{
    //     console.log("hello "+ name);
    // }

    // useEffect(()=>{
    //     console.log("Use Effect");//executes on state change and renders output
    //     console.log(name);
    // },[name]);//here [] is used for useEffect dependencies: states included can only invokes this useEffect


    
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}

            {/* <BlogList blogs={data} title="All Blogs" deleteHandler={deleteHandler} /> function can be passed as prop */}
            {/* && is used as logical AND here && evaluates left statement and right only if left is true */}
            {/* <button onClick={()=>setName("Ram")}>Change Name</button>
            <p>{name}</p> */}
            {/* <BlogList blogs={blogs.filter((blogs)=>blogs.author==="Mario")} title="Mario's Blogs"/> */}
            
            {/* <p>{name}</p>
            <p>{name} is {age} years old</p>
            <button onClick={clickHandler}>Click me</button><br/> */}
            {/* <button onClick={()=>{//anynomous event handler
                clickHandlerAgain("Ram");
            }}>Click me again</button> */}
        </div>
    );
}

export default Home;