/*
//these are controller functions
//this one is an arrow function

export const getAllNotes = (req,res) => {
  res.status(200).send("You just fetched the notes");
};
*/
import Note from '../models/Note.js';
//other way to write function
export async function getAllNotes(req,res){
  try{
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error){
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({message: "Internal server error"});
  }

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