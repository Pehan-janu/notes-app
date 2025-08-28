/*
//these are controller functions
//this one is an arrow function

export const getAllNotes = (req,res) => {
  res.status(200).send("You just fetched the notes");
};
*/

//other way to write function
export function getAllNotes(req,res){
  res.status().send("You just fetched the notes");
};

export function createNote(req,res){
  res.status(201).json({message:"Note created successfully"});
};

export function updateNote(req,res){
  res.status(200).json({message:"Note updated successfully"});
};

export function deleteNote (req,res){
  res.status(200).json({message:"Note deleted successfully"});
};