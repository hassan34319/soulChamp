"use client";
import React, { useState } from "react";
import View1 from "./View1";
import View2 from "./View2";
import View3 from "./View3";
import View4 from "./View4";
import View5 from "./View5";
import View6 from "./View6";

type Props = {};

function ApplyContent({}: Props) {
  const [viewName, setView] = useState("view1");

  return (
    <main className="w-full">
      {viewName === "view1" && <View1 setView={setView} />}
      {viewName === "view2" && <View2 setView={setView} />}
      {viewName === "view3" && <View3 setView={setView} />}
      {viewName === "view4" && <View4 setView={setView} />}
      {viewName === "view5" && <View5 setView={setView} />}
      {viewName === "view6" && <View6 setView={setView} />}

    </main>
  );
}

export default ApplyContent;
