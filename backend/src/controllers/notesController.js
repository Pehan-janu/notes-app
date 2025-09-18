/*
//these are controller functions
//this one is an arrow function

export const getAllNotes = (req,res) => {
  res.status(200).send("You just fetched the notes");
};
*/
import Note from '../models/Note.js';
//other way to write function
export async function getAllNotes(_,res){
  try{
    const notes = await Note.find().sort({createdAt:-1}); // newest first
    res.status(200).json(notes);
  } catch (error){
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({message: "Internal server error"});
  };

};

export async function getNoteBuId(req,res){
  try{
    const note = await Note.findById(req.params.id);
    if(!note) return res.status(404).json({message:"Note not found"});
    res.status(200).json(note);
  } catch (error){
    console.error("Error in getNoteBuId controller", error);
    res.status(500).json({message: "Internal server error"});
  }
};


export async function createNote(req,res){
  try{
    const {title, content} = req.body;
    const note = new Note({title, content});

    const saveNote = await note.save();
    res.status(201).json(saveNote);
  } catch (error){
    console.error("Error in createNote controller", error);
    res.status(500).json({message: "Internal server error"});
  };

}

export async function updateNote(req,res){
  try{
    const {title,content} = req.body;
    //logic to update the note in db
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {title,content},
      {
        new: true,
      }
    );

    if(!updatedNote) return res.status(404).json({message:"Note not found"});

    res.status(200).json({message:"Note updated successfully"});
  } catch (error){
    console.error("Error in updateNote controller", error);
    res.status(500).json({message: "Internal server error"});
  };
};

export async function deleteNote (req,res){
  try{
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if(!deletedNote) return res.status(404).json({message:"Note not found"});
    res.status(200).json({message:"Note deleted successfully"});
  } catch (error){
    console.error("Error in deleteNote controller", error);
    res.status(500).json({message: "Internal server error"});    
  }
};