"use client";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { BooksContext} from "../../context/BooksContext";
import { useState } from "react";

export default function BookDetails() {
  const params = useParams();
  const { books, updateDescription } = useContext(BooksContext);
  const [isEditing, setIsEditing] = useState(false);
  const [draftDescription, setDraftDescription] = useState("");
  const currentBook = books.find(book => book.id === Number(params.id));
  
  if (!currentBook) {
  return <p>Book not found.</p>;
  } else return (
    <div className = "book-card">
      {isEditing ? (
        <button className="removal-button" onClick={() => {
            updateDescription(currentBook.id, draftDescription);
            setIsEditing(false);
        }}>save</button>
      ) : (
        <button className="removal-button" onClick={() => {
           setDraftDescription(currentBook.description);
           setIsEditing(true);
        }}>edit</button>
      )}<br></br>
      <p>Title: {currentBook.title}</p>
      <p>Author: {currentBook.author}</p>
      <br></br>
      {isEditing ? (
        <textarea  className="description-editor" value={draftDescription} onChange={(event) => setDraftDescription(event.target.value)}/>
      ) : (
      <p>{currentBook.description}</p>
      )}
    </div>


  );
}