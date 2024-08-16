import React from "react";
import CallToAction from "../components/CallToAction";
export default function Projects() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex flex-col justify-center items-center p-3 gap-6">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-md text-gray-500">
        Here you'll find a variety of articles and tutorials on topics such as
        crypto-currency, investing in stock's, and finacial literacy..
      </p>
      <CallToAction />
    </div>
  );
}
