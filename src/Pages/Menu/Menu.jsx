
import { Helmet} from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import MenuImg from '../../assets/menu/banner3.jpg'
import PopularMenu from '../Home/PopularMenu/PopularMenu';
const Menu = () => {
    return (
        <div>
            <Helmet>

                <title>Bestro Boss Menu</title>
        
            </Helmet>


            <Cover img={MenuImg} title={"Our Menu"}></Cover>

            <PopularMenu></PopularMenu>


        </div>
    );
};

export default Menu;