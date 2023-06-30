import { AboutContainer, Image, AboutMeContent, Content, Title, Body} from "./AboutElements";

function About () {

    return (
     <AboutContainer>
         <AboutMeContent>
            <Content>
                <Title>About</Title>
                <Body>Kitchen and Code is a collaboration of some of my many passions, food, technology and sharing knowledge about these topics. Before becoming a Software Engineer, 
                    I worked as a Pastry Chef in Michelin-starred restaurants around the world. Hospitality and Technology have many things in common, among the most important to me is bringing people together.
                    I hope you'll join me in this journey.
                </Body>
            </Content>
        </AboutMeContent>
        <Image src="https://images.pexels.com/photos/6963789/pexels-photo-6963789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></Image>
     </AboutContainer>
    )
}

export default About;