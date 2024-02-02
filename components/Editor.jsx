import React,{useState} from "react"
const Editor = () => {
    const [user,setUser] = useState("");
    const handler = e => {
        setUser(e.target.value)

    }
    return(
       <div className="input_text">
        <div >
        <textarea className="text_box-1" value={user} name="user" onChange={handler}/>
        </div>
        <div className="text_box-2">
            <h2 className="h2">{user}</h2>
        </div>
       </div> 
    )
}
export default Editor
