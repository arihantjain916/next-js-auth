"use client"
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";
import Blog from "../components/blog/BlogMainPage";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-10"></main>
      <Blog />
      <Footer />
    </>
  );
}
