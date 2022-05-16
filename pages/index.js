import React, { useState } from "react";
import Head from "next/head";
import Navbar from "./navbar/navbar";

export default function Home() {


  return (
    <div>
      <Head>
        <title>Main page</title>
      </Head>
    <Navbar/>
    </div>
  );
}
