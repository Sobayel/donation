import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CardDefault = ({item}) => {
    console.log(item);
    const {id, image, category, title, cardBg, categoryBg, textColor} = item || {};
    return (
        <Link to={`/donation-details/${id}`}>
                <Card style={{backgroundColor:cardBg}} className="mt-1 overflow-hidden cursor-pointer">
      <CardHeader color="blue-gray" className="rounded-none m-0">
        <img
          src={image}
        />
      </CardHeader>
      <CardBody>
      <Button style={{backgroundColor: categoryBg, color:textColor}} size="sm">{category}</Button>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography style={{color:textColor}} variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
      </CardFooter>
    </Card>
        </Link>
    );
};

export default CardDefault;