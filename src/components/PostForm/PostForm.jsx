import { useState} from "react";
import {Button,FormWrapper,Label,Input,Textarea } from "./PostForm.styled";


function PostForm({ onSubmit}){
const [title,setTitle]= useState("");
const [content, setContent]= useState("");


const handleSubmit = (e)=>{
    e.preventDefault();

    if(!title.trim()|| !content.trim()){
        alert("Заповніть поля");
        return;
    }
    onSubmit({title,content});
    setTitle("");
    setContent("");
};

return(
    <FormWrapper onSubmit={handleSubmit}>
        <Label>Заголовок:</Label>
        <Input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}required></Input>
            <label>Текст:</label>
        <Textarea  value={content} onChange={(e)=>setContent(e.target.value)}required></Textarea>
<Button type="submit">Створити</Button>
    </FormWrapper>
)

}
export default PostForm;
