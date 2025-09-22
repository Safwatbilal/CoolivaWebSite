
import AboutUs from "@/components/AboutUs";
import AfterSalesSection from "@/components/AfterSaleSection";
import ContactUs from "@/components/ContactUsSection";
import CustomersReviews from "@/components/CustomersReviews";
import Footer from "@/components/FooterSectoin";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OurServicesSection from "@/components/OurServices";
import StatsSection from "@/components/StaticSection";
export default function Home() {
  return (
    <>
<Header/>
<HeroSection/>
<StatsSection/>
<AboutUs/>
<OurServicesSection/>
<AfterSalesSection/>
<CustomersReviews/>
<ContactUs/>
<Footer/>
    </>
  );
}
