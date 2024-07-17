import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Container from "@/layouts/Container";

const ContactForm = () => {
  return (
    <Container>
      <div className=" flex flex-col justify-center items-center gap-8">
        <h1 className="block antialiased tracking-normal font-sans font-semibold leading-tight mb-4 text-3xl">
          Get In Touch
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between my-12 gap-16 md:container">
        <div className=" w-full  flex justify-center items-center">
          <div className=" w-full mx-2">
            <Card className=" ">
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>Fill out the form</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className=" grid grid-cols-1 gap-4 pb-2">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input id="companyName" placeholder="Commpany Name" />
                      </div>
                    </div>

                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 pb-2">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" placeholder="Address" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="address">Street Address</Label>
                        <Input
                          id="streetaddress"
                          placeholder="Street Address"
                        />
                      </div>
                    </div>

                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 pb-2">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="addressline2">Address line 2</Label>
                        <Input id="addressline2" placeholder="Addressline2" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input id="zip" placeholder="ZIP Code" />
                      </div>
                    </div>

                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 pb-2">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="Phone Number" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="Email" />
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button className="w-full">Submit</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactForm;
