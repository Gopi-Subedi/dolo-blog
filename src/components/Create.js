import { useState } from "react";
import {useHistory} from 'react-router-dom';

const Create =() =>{

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author,setAuthor] = useState('Mario');
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();

    const submitHandler =(e) =>{
        e.preventDefault();

        const blog = {title, body, author};
        console.log(blog);

        setIsPending(true);

        fetch('http://localhost:8000/blogs', { // fake API endpoint
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(blog), // turn the JS object literal into a JSON string
        })
        .then(()=>{
            console.log("New Blog Added");
            setIsPending(false);
            // history.go(-1); it will redirect back one step
            history.push('/');//push will redirect to defined route
        })
    }

    return(
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={submitHandler}>
                <label >Blog Title: </label>
                <input 
                    type="text" 
                    required
                    value={title} // double binding 
                    onChange= {(e)=>setTitle(e.target.value)}
                />
                <label >Blog Body: </label>
                <textarea 
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label >Blog Author: </label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="Mario">mario</option>
                    <option value="Yoshida">yoshida</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding...</button>}
            </form>

        </div>
    )
}

export default Create;