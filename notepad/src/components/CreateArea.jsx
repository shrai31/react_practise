import React from "react";

function CreateArea(props) {
    const [note, setNote] = React.useState({
        title: "",
        content: ""
    });


    function handleAdd(event){
        event.preventDefault();
        props.onAdd(note);
        // console.log("adsdfgffdsa");

        setNote({
            title:"",
            content:""
        })
    }

    function handleChange(event){
        const {name, value} = event.target;
        setNote(prev=>{
             return {
                 ...prev,
                 [name]: value
             }
        })
        // console.log("adsdfgffdsa");
    }    
  return (
    <div>
      <form>
        <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;