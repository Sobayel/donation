/* eslint-disable react/prop-types */
import CardDefault from "../Card/CardDefault";

const CategoryList = ({filterData}) => {
    
    return (
        <div className="grid grid-cols-4 gap-6 max-w-7xl py-3 mx-auto mt-12">
           {
            filterData.map((item) => (
                <CardDefault key={item.id} item={item}></CardDefault>
            ))
           }
        </div>
    );
};

export default CategoryList;