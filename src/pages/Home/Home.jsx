import Building from "./Building";
import Date from "./Date";
import Hero from "./Hero";
import News from "./News";
import SocialMedia from "./SocialMedia";


const Home = () => {
    return (
        <div className="max-w-6xl lg:mx-auto md:mx-5 mx-5">
            {/* <Date /> */}
            <Hero />
            <News />
            <Building />
            <SocialMedia />
        </div>
    );
};

export default Home;