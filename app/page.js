import Image from "next/image";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Community from "./components/Community";

export default function Home() {
  return (
    <div className="container">
<Nav></Nav>
<Hero></Hero>
<Clients></Clients>
<Community></Community>
    </div>
  );
}
