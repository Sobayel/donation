import { useState } from "react";
import Banner from "../../components/Banner/Banner";
import CategoryList from "../../components/CategoryList/CategoryList";


const Home = () => {
    const [value, setValue] = useState();
    return (
        <div>
            <Banner setValue={setValue}></Banner>
            <CategoryList></CategoryList>
        </div>
    );
};

export default Home;