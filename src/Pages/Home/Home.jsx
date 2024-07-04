import Banner from "../Banner/Banner";
import Catagory from "./Category/Catagory";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Catagory></Catagory>
            <PopularMenu></PopularMenu>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;