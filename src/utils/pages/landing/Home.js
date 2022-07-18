import React from "react";
import { Bestseller } from "../../components/bestsellerbanner/Bestseller";
import { CategoryBanner } from "../../components/categorybanner/CategoryBanner";
import { ScrollFooter } from "../../components/shared/footer/Scrollfooter";
import { Navbar } from "../../components/shared/navbar/Navbar";

import "./home.css";
export function Home() {
  return (
    <div className="Home-head">
      <Navbar />
      <CategoryBanner />
      <Bestseller />
      
    </div>
  );
}
