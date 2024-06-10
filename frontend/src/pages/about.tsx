import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navBar";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="container mx-auto py-8">
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="border-t border-gray-200 dark:border-gray-600">
            <div
              className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
              id="stats"
              aria-labelledby="stats-tab"
            >
              <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
                  <dd className="text-gray-500 dark:text-gray-400">
                    Developers
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
                  <dd className="text-gray-500 dark:text-gray-400">
                    Public repositories
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
                  <dd className="text-gray-500 dark:text-gray-400">
                    Open source projects
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
                  <dd className="text-gray-500 dark:text-gray-400">
                    Contributors
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl font-extrabold">90+</dt>
                  <dd className="text-gray-500 dark:text-gray-400">
                    Top Forbes companies
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl font-extrabold">4M+</dt>
                  <dd className="text-gray-500 dark:text-gray-400">
                    Organizations
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center mt-10">
          <div className="flex-1 flex justify-center items-center">
            <div className="my-18">
              <Image
                src="/team.png"
                width={500}
                height={300}
                className="max-w-full md:max-w-none"
                alt="Cloud"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-center">
              <p className="text-5xl text-gray-800 mb-4 font-bold">About Us</p>
            </div>
            <p className="text-gray-500 text-lg">
              Our team consists of seasoned professionals skilled in cloud
              computing and IT solutions. With backgrounds spanning
              architecture, engineering, and cybersecurity, we bring diverse
              expertise to the table. We specialize in delivering tailored cloud
              services designed to propel business growth. From seamless
              migration to cutting-edge application development and
              infrastructure optimization, our solutions are scalable, secure,
              and cost-effective. We prioritize innovation and client
              satisfaction, striving to exceed expectations at every turn.
            </p>
            <p className="text-gray-500 text-lg mt-5">
              In every project, we emphasize collaboration and understanding. We
              work closely with clients to comprehend their unique needs and
              objectives. By taking a personalized approach, we ensure that our
              solutions align perfectly with their business goals. Our
              commitment to excellence drives us to continually innovate and
              improve, ensuring that we remain at the forefront of cloud
              computing technology. With a focus on reliability, efficiency, and
              customer-centricity, we aim to be the trusted partner that
              businesses rely on for all their cloud computing needs.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
