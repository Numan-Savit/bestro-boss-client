import { useEffect, useState } from "react";
import Sectiontitle from "../../../Components/Sectiontitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";



const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems);
            });
    }, []);

    return (
        <section>

            <Sectiontitle
              heading="Popular Items"
              subheading="From Our Menu"
            >

            </Sectiontitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
                {
                  menu.map(item=> <MenuItem
                   key={item._id}
                   item={item}
                  ></MenuItem>)   
                }
            </div>

            <button className="btn btn-outline border-0 border-b-4">View Full Menu</button>
            
        </section>
    );
};

export default PopularMenu;