import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [clicked, setClicked] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const handleChange = event => {
    let {name, value} = event.target;

    setNote( prev => { return { ...prev, [name] : value  }; } );
  };

  return (
    <div>
      <form className="create-note" onSubmit={(event)=>{event.preventDefault()}}>
        {clicked && <input name="title" placeholder="Title" value = {note.title} onChange = {handleChange} />}
        <textarea onClick = {()=> { setClicked(true) }} name="content" placeholder="Take a note..." rows={ clicked ? "3" : "1" } value = {note.content} onChange = {handleChange} />
        <Zoom in={clicked ? true : false}>
        <Fab onClick={() => {props.add(note)}}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
