import { Inter } from "next/font/google";
import Navbar from "@/components/navBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Navbar />
  );
}
