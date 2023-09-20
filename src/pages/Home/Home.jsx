import Building from "./Building";
import Date from "./Date";
import Hero from "./Hero";
import News from "./News";
import SocialMedia from "./SocialMedia";


const Home = () => {
    return (
        <div>
            {/* <Date /> */}
            <Hero />
            <News />
            <Building />
            <SocialMedia />
        </div>
    );
};

export default Home;