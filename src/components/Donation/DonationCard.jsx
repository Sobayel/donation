import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
   

const DonationCard = ({ data }) => {
    const {image, title, cardBg, category, categoryBg, textColor} = data || {};
    return (
        <Card style={{backgroundColor:cardBg}} className="w-full max-w-[48rem] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={image}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography className="mb-4">
        <Button style={{backgroundColor: categoryBg, color:textColor}} size="sm">{category}</Button>
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>
        <Button style={{backgroundColor:textColor}} size="md">Button</Button>
        </Typography>
      </CardBody>
    </Card>
    );
};

export default DonationCard;