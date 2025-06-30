import PostCard from "../../components/PostCard/PostCard";
import { Container } from "../../styles/Container.styled";
import{CardsWrapper} from "./Home.styled";
 import {Title,ButtonLink} from "../../styles/BaseStyle.styled";

function Home ({posts = []}){
    return(
        <Container>
            <Title>Простий блог 😊</Title>
            <ButtonLink to="/add-post">Створити пост</ButtonLink>
                <CardsWrapper>

            {posts.length === 0 ? (
                <p>немає постів</p>
            ): (posts.slice()
            .sort((a,b)=> new Date(b.date)-new Date(a.date))
            .map((post)=>
            <PostCard key={post.id} post={post}/>
            ))}
                </CardsWrapper>

        </Container>
    );
}

export default Home;