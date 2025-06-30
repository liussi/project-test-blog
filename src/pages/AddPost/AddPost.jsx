import { useNavigate } from "react-router-dom";
import PostForm from "../../components/PostForm/PostForm";
import { Container } from "../../styles/Container.styled";
 import {Title} from "../../styles/BaseStyle.styled";


function AddPost ({posts, setPosts}){
const navigate = useNavigate();
const handleAddPost=({title,content})=>{
    
    const newPost = {
        id: posts.length + 1,
        title,
        content,
        date: new Date().toLocaleDateString("uk-UA",{
            day:"numeric",
            month:"long",
            year:"numeric"
        })
    }
            setPosts([newPost,...posts])
           navigate("/");
};
return(
    <Container>
         <Title>Створити новий пост</Title>
         <PostForm onSubmit={handleAddPost}/>
    </Container>
       
       
)

}
export default AddPost;