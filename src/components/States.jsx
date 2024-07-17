import Container from "@/layouts/Container";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const items = [
  { id: "AL", label: "State of Alabama" },
  { id: "AK", label: "State of Alaska" },
  { id: "AZ", label: "State of Arizona" },
  { id: "AR", label: "State of Arkansas" },
  { id: "WY", label: "State of Wyoming" },
  { id: "WA", label: "State of Washington" },
  { id: "VT", label: "State of Vermont" },
  { id: "WI", label: "State of Wisconsin" },
  { id: "HI", label: "State of Hawaii" },
  { id: "DE", label: "State of Delaware" },
  { id: "GA", label: "State of Georgia" },
  { id: "WV", label: "State of West Virginia" },
  { id: "IL", label: "State of Illinois" },
  { id: "IN", label: "State of Indiana" },
  { id: "CA", label: "State of California" },
  { id: "KS", label: "State of Kansas" },
  { id: "CO", label: "State of Colorado" },
  { id: "CT", label: "State of Connecticut" },
  { id: "LA", label: "State of Louisiana" },
  { id: "MN", label: "State of Minnesota" },
  { id: "MS", label: "State of Mississippi" },
  { id: "MO", label: "State of Missouri" },
  { id: "MI", label: "State of Michigan" },
  { id: "MT", label: "State of Montana" },
  { id: "ME", label: "State of Maine" },
  { id: "MD", label: "State of Maryland" },
  { id: "NE", label: "State of Nebraska" },
  { id: "NV", label: "State of Nevada" },
  { id: "NH", label: "State of New Hampshire" },
  { id: "NJ", label: "State of New Jersey" },
  { id: "NY", label: "State of New York" },
  { id: "NM", label: "State of New Mexico" },
  { id: "OH", label: "State of Ohio" },
  { id: "OK", label: "State of Oklahoma" },
  { id: "OR", label: "State of Oregon" },
  { id: "RI", label: "State of Rhode Island" },
  { id: "ND", label: "State of North Dakota" },
  { id: "NC", label: "State of North Carolina" },
  { id: "TN", label: "State of Tennessee" },
  { id: "TX", label: "State of Texas" },
  { id: "FL", label: "State of Florida" },
  { id: "SD", label: "State of South Dakota" },
  { id: "SC", label: "State of South Carolina" },
  { id: "UT", label: "State of Utah" },
];

const States = () => {
  return (
    <Container className="py-12">
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="block antialiased tracking-normal font-sans font-semibold leading-tight mb-4 text-3xl">
          What states do you prefer to drive in?
        </h1>
      </div>

      <div className="space-y-8">
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-6">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-row items-start space-x-3 space-y-0 ${
                  index % 10 === 9 ? "" : ""
                }`}
              >
                <div className="flex justify-center items-center gap-2">
                  <Checkbox />
                  <label className="font-normal">{item.label}</label>
                </div>
              </div>
            ))}
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5 my-12">
            <Label htmlFor="letter">Upload MC authority letter:</Label>
            <Input id="letter" type="file" />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5 my-12">
            <Label htmlFor="insurance">
              Certificate of liability insurance:
            </Label>
            <Input id="insurance" type="file" />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5 my-12">
            <Label htmlFor="w9">W9:</Label>
            <Input id="w9" type="file" />
          </div>

          <div className="mt-5 ">
            <Button className=" w-1/2" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default States;
