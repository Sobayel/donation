import { Button } from "@material-tailwind/react";
import useLocalStorage from "../../Hooks/useLocalStorage";
import DonationCard from "../../components/Donation/DonationCard";
import { useState } from "react";


const Donation = () => {
    const {localData} = useLocalStorage();
    const [showAll, setShowAll] = useState(false)
    const handleShowAll = () =>{
        setShowAll(!showAll);
    }
    return (
        <>
        <div className="grid grid-cols-2 max-w-6xl mx-auto my-12 gap-8">
            {
                localData.slice(0, showAll ? localData.length: 4).map((data) =>(
                    <DonationCard key={data.id} data={data}></DonationCard>
                ))
            }
        </div>
        {
            localData.length > 4 ? (
                <div className="text-center my-4">
        <Button onClick={handleShowAll} color="green">{!showAll ? "Show All" : "Show Less"}</Button>
        </div>
            ) : null
        }
        
        </>
    );
};

export default Donation;