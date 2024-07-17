import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Container from "@/layouts/Container";
import { Gift } from "lucide-react";
import { ReceiptEuro } from "lucide-react";
import { FileText } from "lucide-react";
import { Percent } from "lucide-react";
import { Headset } from "lucide-react";
import { CircleDollarSign } from "lucide-react";

const OurServices = () => {
  return (
    <Container className=" py-16 md:py-32">
      <div className=" flex justify-center">
        <h1 className="block antialiased tracking-normal font-sans font-semibold leading-tight mb-4 text-3xl">
          Our Services
        </h1>
      </div>

      <div className="p-0 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 ">
        <Card className="hover:bg-gray-100 dark:hover:bg-zinc-800 dark:hover:bg-zinc-800 cursor-pointer">
          <CardHeader className="flex justify-center items-center text-left gap-2">
            <CircleDollarSign />
            <CardTitle>Dispatching</CardTitle>
            <CardDescription>From 5% of gross</CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer">
          <CardHeader className="flex justify-center items-center text-left gap-2">
            <Headset />
            <CardTitle>Support 24/7</CardTitle>
            <CardDescription>From 5% of gross</CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer">
          <CardHeader className="flex justify-center items-center text-left gap-2">
            <Percent />
            <CardTitle>Rate Negotiations</CardTitle>
            <CardDescription>From 5% of gross</CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer">
          <CardHeader className="flex justify-center items-center text-left gap-2">
            <FileText />
            <CardTitle className="text-xl text-center">
              Document Management & Paperwork
            </CardTitle>
            <CardDescription>From 5% of gross</CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer">
          <CardHeader className="flex justify-center items-center text-left gap-2">
            <Gift />
            <CardTitle>Factoring Service</CardTitle>
            <CardDescription>From 5% of gross</CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer">
          <CardHeader className="flex justify-center items-center text-left gap-2">
            <ReceiptEuro />
            <CardTitle>Billing</CardTitle>
            <CardDescription>From 5% of gross</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </Container>
  );
};

export default OurServices;
