import { AboutContainer, Image, AboutMeContent, Content, Title, Body} from "./AboutElements";
import littleme from './littleme.webp'

function About () {

    return (
     <AboutContainer>
         <AboutMeContent>
            <Content>
                <Title>About</Title>
                <Body> Kitchen and Code is a collaboration of some of my many passions, food, technology and sharing knowledge about these topics. Before becoming a Software Engineer, 
                    I worked as a Pastry Chef in Michelin-starred restaurants around the world. Even before that, I grew up in an Italian household that always seemed to revolve around food. My passion for technology came later in life, when it replaced food as the "glue" that kept my family close.
                    Hospitality and Technology have many things in common, among the most important to me is bringing people together.
                    I'm Angela Pace and I hope you'll join me in this journey, exploring all things Kitchen and Code.
                </Body>
            </Content>
        </AboutMeContent>
        <Image src={littleme}></Image>
     </AboutContainer>
    )
}

export default About;