import Card from "@/components/card";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navBar";
import { useEffect, useState } from "react";
import { urlBackend } from "../../globalUrl";

interface serviceData {
  service_id: string;
  title: string;
  description: string;
}

export default function Home() {
  const [service, setService] = useState<serviceData[]>([]);

  useEffect(() => {
    fetchService();
  }, []);

  const fetchService = async () => {
    try {
      const response = await fetch(`${urlBackend}/services/getAllServices`);
      if (!response.ok) {
        throw new Error("Failed to fetch services");
      }
      const data = await response.json();
      setService(data);
    } catch (error) {
      console.error("Error fetching rankings:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <Header />
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
          <div className="flex-1 flex justify-center items-center">
            <p className="text-left text-5xl font-bold text-gray-800">
              Main Services
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <p className="text-lg text-left text-gray-500">
              Cloud services offer scalable, flexible, and secure computing
              resources, facilitating storage, computation, and networking for
              diverse applications.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap ">
          {service.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4"
              style={{ maxWidth: "25%" }}
            >
              <Card title={item.title} description={item.description} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
