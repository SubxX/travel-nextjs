import Head from "next/head";
import { AvailablePlace } from "../components/AvailablePlace";
import { Facilities } from "../components/Facilities";
import { Footer } from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import { OurCompany } from "../components/OurCompany";
import { Testimonials } from "../components/Testimonials";
import { Trustedby } from "../components/Trustedby";

export default function Home() {
  return (
    <div>
      <main>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>

        <Nav></Nav>
        <Hero></Hero>
        <Trustedby />
        <AvailablePlace />
        <Facilities />
        <OurCompany />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}
