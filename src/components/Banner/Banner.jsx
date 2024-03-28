import { Button, Input, Typography } from "@material-tailwind/react";
import React from "react";



const Banner = ({setValue, handleSearch}) => {
    return (
        <div className="h-[400px] relative flex flex-col justify-center items-center">
            <div className="absolute inset-0 bg-[url('/src/assets/images/bg.png')] bg-cover bg-center bg-no-repeat opacity-15">
            </div>
            <Typography className="mb-6" variant="h2"> I Grow By Helping People In Need</Typography>
            <div className="relative flex w-full max-w-[24rem]">
                <Input
                    type="email"
                    label="Search"
                    onChange={(e)=> setValue(e.target.value)}
                    className="pr-20"
                    containerProps={{
                        className: "min-w-0",
                    }}
                />
                <Button
                    size="sm"
                    color="red"
                    onClick={()=>handleSearch()}
                    className="!absolute right-1 top-1 rounded"
                >
                    SEARCH
                </Button>
            </div>
        </div>
    );
};

export default Banner;