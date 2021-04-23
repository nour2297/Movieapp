import React, { useState } from 'react'
import StarRating from './StarRating';
import Modal from "react-modal";
const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#root");
  

const AddMovie = ({handleAdd}) => {
const [IsOpen, setIsOpen] = useState(false)
const [form, setForm] = useState(
  {
    name:"",
    image:"",
    date:"",
    rating:1,
  }
  )
  // handling input change 
  const handleChange=(e)=>setForm({...form,[e.target.name]: e.target.value});
//submit function
const handleSubmit=(e)=>
{
  e.preventDefault();
   let newfilm={...form,id:Math.random()};
   handleAdd(newfilm);  
  closeModal();
}
//handle rating 
const handleRating=(rate)=>setForm({...form,rating:rate})
 //Modal function  
    function openModal() {
        setIsOpen(true);
      }
      function closeModal(){
        setIsOpen(false);
      }


    return (
        <div>

      <button className="btn add-movie-btn" onClick={openModal}>Add movie</button>
      <Modal
        style={customStyles}
        isOpen={IsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
         <form onSubmit={handleSubmit} >
           <label>Title : </label>
        <input className="inp" type="text" name="name" onChange={handleChange}></input>
           <label>Date : </label>
        <input className="inp" type="date" name="date" onChange={handleChange}></input>
         <label>Poster : </label>
        <input className="inp" type="url" name="image" onChange={handleChange}></input>
        
        <StarRating rate={form.rating} handleRating={handleRating} ></StarRating>
        <div>
            <button className="btn btn-primary" type="submit">
              Add
            </button>
            <button className="btn btn-danger" onClick={closeModal}>
              Cancel
            </button>
          </div>

         </form>
         </Modal>
        </div>
    )
}

export default AddMovie
