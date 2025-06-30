import {TitleLink,Card,ContentText} from "./PostCard.styled"


function PostCard({ post }) {
  return (
    <Card>
        <TitleLink to={`/post/${post.id}`}>{post.title}</TitleLink>      
<ContentText>{post.content.slice(0, 200)}{post.content.length > 200 ? "..." : ""}</ContentText>      
    </Card>
  );
}

export default PostCard;

