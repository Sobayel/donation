import { useParams } from "react-router-dom";
import useDonationData from "../../Hooks/useDonationData";
import { useEffect, useState } from "react";

import {Card, CardHeader, CardBody, Typography, Button, } from "@material-tailwind/react";
import { saveToLocalStorage } from "../../Utils/localStorage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CustomSpinner from "../../components/Spinner/CustomSpinner";

const DonationDetails = () => {
    const [singleData, setSingleData] = useState({});
    const {id} =useParams();
    const {data, loading} = useDonationData();
    console.log(id, singleData)

    const handleDonate = () => {
        saveToLocalStorage(singleData);
    }
    

    useEffect(()=>{
        if(data){
            const singleData = data.find((item) => item.id == id);
        console.log(singleData);
        setSingleData(singleData);
        }
    },[data, id]);
    const {image, title, description, textColor, price} = singleData || {};

    if(loading){
      return <CustomSpinner></CustomSpinner>
    }
    return (
        <Card className="mt-12 w-full rounded-md shadow-none lg:px-20 overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-xl relative"
      >
        <img className="w-full rounded-md h-[450px]"
          src={image}
          alt="ui/ux review check"
        />
        <div className="absolute bottom-0 bg-opacity-80 bg-black w-full h-28 pl-6 ">
        <Button onClick={handleDonate} style={{backgroundColor:textColor}} className="mt-8 capitalize text-sm">Donate ${price}</Button>
        </div>
        <ToastContainer></ToastContainer>
      </CardHeader>
      <CardBody>
        <Typography variant="h3" color="blue-gray">
          {title}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {description}
        </Typography>
      </CardBody>
    </Card>
    );
};

export default DonationDetails;