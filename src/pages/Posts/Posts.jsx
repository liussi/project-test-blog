import { useParams } from "react-router-dom";
import NotFound from "../../components/NotFound/NotFound";
import { Container } from "../../styles/Container.styled";
import {ButtonLink}from "../../styles/BaseStyle.styled";
import {Subtitle,PostContent,PostDate} from "./Post.styled";

function Posts({posts}){
const {id}= useParams();
const post = posts.find((p)=>p.id === Number(id));

if (!post){
    return <NotFound/>
}

 return (
    <Container>
      <Subtitle>{post.title}</Subtitle>
      <PostContent>Текст: {post.content}</PostContent>
      <PostDate>Дата публікації: {post.date}</PostDate>
      <br />
      <ButtonLink to="/">Назад до списку постів</ButtonLink>
    </Container>
  );

}
export default Posts;