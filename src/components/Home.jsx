import { useEffect, useState } from "react";
import Editor from "./Editor";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";

function Home() {

    const [blogs, setBlogs] = useState([])
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [editableTitle, setEditableTitle] = useState('')
    const [editableValue, setEditableValue] = useState('')
    const [isCreate, setIsCreate] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [id, setId] = useState()

    const navigate = useNavigate();

    const getBlogs = () => {
        axios.get('http://localhost:5500/api/blogs')
            .then((response) => {
                setBlogs(response.data)
            })
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data)
                } else {
                    alert(error.msg)
                }
            })
    }

    const addBlog = () => {
        axios.post('http://localhost:5500/api/add-blog', { title, content })
            .then((response) => {
                getBlogs()
                setIsCreate(false)
            })
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data)
                } else {
                    alert(error.msg)
                }
            })
    }
    const editBlog = () => {
        axios.post(`http://localhost:5500/api/edit-blog/${id}`, { editableTitle, editableValue })
            .then((response) => {
                getBlogs()
                setIsEdit(false)
            })
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data)
                } else {
                    alert(error.msg)
                }
            })
    }

    const prepareEdit = (blog) => {
        setId(blog.id)
        setIsCreate(false)
        setEditableTitle(blog.title);
        setEditableValue(blog.content);
        setIsEdit(true)
    }

    useEffect(() => {
        getBlogs()
        // eslint-disable-next-line
    }, [])

    return (
        <><div className="d-flex">

                <SideBar/>

            <div className="d-flex flex-column px-2">
                {!isCreate && <div className="p-3 d-flex justify-content-center">
                    <button className="btn btn-warning" disabled={isEdit} onClick={() => setIsCreate(true)}>Create New</button>
                </div>}

                {isCreate && <Editor title={title} titleChange={setTitle} heading={'Creating new blog'} value={content} onChange={setContent} action={'Add'} close={() => setIsCreate(false)} onSubmit={addBlog} />}
                {isEdit && <Editor title={editableTitle} titleChange={setEditableTitle} value={editableValue} heading={'Update existing blog'} onChange={setEditableValue} action={'Submit'} close={() => setIsEdit(false)} onSubmit={editBlog} />}

                <div className="container my-2">
                    <div className="my-2">
                        <h4 className="text-center">Recently added blogs</h4>
                    </div>
                    <div className="row">
                        {
                            blogs.length > 0 && blogs.map((blog) => {
                                return <div className="col-md-3 col-12 col-sm-4 p-2 ">
                                    <div class="card" style={{ width: '13rem' }}>
                                        <div class="card-body">
                                            <h6 class="card-subtitle mb-2 text-muted">{blog.title}</h6>
                                            {/* <p class="card-text">{parse(blog.content.slice(0, 50))}</p> */}
                                            <span className="btn btn-sm btn-secondary" role="button" onClick={() => prepareEdit(blog)}>Edit</span>
                                            <span className="btn btn-sm btn-dark mx-2" role="button" onClick={() => navigate(`/blog/${blog.id}`)}>view</span>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;
