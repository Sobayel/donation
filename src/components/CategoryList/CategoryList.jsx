import useDonationData from "../../Hooks/useDonationData";
import CardDefault from "../Card/CardDefault";

const CategoryList = () => {
    const {data, loading} = useDonationData()
    return (
        <div className="grid grid-cols-4 gap-6 max-w-7xl py-3 mx-auto mt-12">
           {
            data.map((item) => (
                <CardDefault key={item.id} item={item}></CardDefault>
            ))
           }
        </div>
    );
};

export default CategoryList;