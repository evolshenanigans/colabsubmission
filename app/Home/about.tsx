"use client";
import nextImage from "next/image";
import React from "react";
import pfp from "../Images/pfp1.jpg";
import { Card, CardBody } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";



function about() {
  return (
    <main className="flex flex-col justify-center items-center h-screen m-4">
      <div className="flex justify-center items-center m-4" >
        <Image width={300} alt="hero image" src={pfp.src} />
      </div>
      <div
        id="minibio"
        className="flex flex-col justify-center items-center rounded-md w-1/2 m-4"
      >
        <Card>
          <CardBody className="w-full h-60">
            <h1 className="text-2xl font-bold text-center">About Me</h1>
            <p className="text-sm">
              I am Josh, a U.S.-based software developer specializing in
              front-end and back-end technologies. I pride myself on my
              adaptability to any situation. On the front-end, I have a
              preference for Next.js and Tailwind CSS, while on the back-end, I
              enjoy working with GoLang and Node.js. I am currently focused on
              mastering Web3 technologies and making strides in learning
              Solidity.
            </p>
          </CardBody>
        </Card>
      </div>
      <div
        id="workHistory"
        className="flex flex-col justify-center items-center rounded-md w-1/2 m-5"
      >
        <Card className="w-full">
          <CardBody className="w-full h-60">
            <h1 className="text-2xl font-bold text-center">Work History</h1>{" "}
            <h2 className="text-2xl font-bold w-full">Atomic.dev</h2>{" "}
            <div className="flex flex-row justify-between">
              <p>React JavaScript Developer</p>
              <p>2023-present</p>
            </div>
            <h2 className="text-2xl font-bold">Features First Auto</h2>{" "}
            <div className="flex flex-row justify-between">
              <p>Front-End Engineer/ UI / UX Developer</p>
              <p>2023</p>
            </div>
            <div className="flex justify-center items-center mt-4">
              <a href="/resume.pdf" download>
                <Button
                  className=" items-center justify-center"
                  radius="full"
                  color="primary"
                  variant="shadow"
                >
                  Download CV
                </Button>
              </a>
            </div>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}

export default about;
