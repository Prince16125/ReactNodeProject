import React, { useState,useEffect  } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
function NotesApp() {
  const [notes, setNotes] = useState([]);
  
  const [currentNote, setCurrentNote] = useState("");

  useEffect(() => {
    axios.get('http://localhost:3001/getNotes')
      .then(response => {
        console.log(response)
        setNotes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  const deleteClick = (id)=>{
    console.log("47",id)
    axios.delete(`http://localhost:3001/deleteNotes/${id}`)
      .then(response => {
        setNotes(notes.filter(item => item._id !== id));
      })
      .catch(error => {
        console.log(error);
      });
   }  

  const addNote = (event) => {debugger
    const note = { name: currentNote };
    
    event.preventDefault();
    axios.post('http://localhost:3001/notes', {note})
    .then(response => {
      console.log('Note added successfully');
   
      
    //  setNotes([...notes, {note}]);
    axios.get('http://localhost:3001/getNotes')
    .then(response => {
      console.log(response)
      setNotes(response.data);
    })
    .catch(error => {
      console.log(error);
    });
      console.log(notes)
    })
    .catch(error => {
      console.log(error);
    });
    setCurrentNote("")
  }
  

  return (
    <div style={{width:"100%", height:"100%"}}>
      <h1>Notes App</h1>
      <form onSubmit={addNote}>
      <div classNameName='container'
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width:"100%",
       
        height:"10%"
       }}>
        <input 
        style={{width:"500px",
                height: "30px",
                border: "1px solid gray",
                borderRadius: "5px",
                padding: "35px"}}
          type="text" 
          placeholder="Enter your note" 
          value={currentNote}
          onChange={event => setCurrentNote(event.target.value)}
        />
        </div>
       
      </form>
      <div className="container2"   
        style={{display:"grid",
        flexWrap:'wrap',
        paddingTop: '30px',
        paddingLeft: '30px',
        gridTemplateColumns: 'auto auto auto' ,
        
            }} > 
      
     
    {notes?.map((val,index) => {debugger
        console.log(Object.keys)
        return(
        <div className="card" style={{width: "18rem" , margin:"10px"}}>
        <div className="card-body">
          <h5 className="card-title" key={index} id={`item-${index}`} >{val.currentNote}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <FontAwesomeIcon  style={{marginLeft:"230px"}} icon={faTrash}
           onClick={()=>deleteClick(val._id)}/>
        </div>
      </div>
      )

    })}  
    </div>
     
    </div>
  );
}

export default NotesApp;



// <div classNameName="container2" style={{width:"100%", backgroundColor:"", marginTop:"5%" , display:"flex",flexDirection:"row", flexWrap: "wrap", height:"100%"}}>
//       <ul>
//         {
//             notes.map((note, index) => {
//             return (
//                 <div style={{padding:"50px", width:"100px", backgroundColor:"" , marginLeft:"100px", display:"inline-block"}} >
//                 <span classNameName="card-title title"  ><b>{note}</b></span>
//                 </div>
                
//                   )
//                 }
//                 )
//         }
//       </ul>
//       </div>