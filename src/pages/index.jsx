import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import SubBanner from "@/components/SubBanner";
import BookingRide from "@/components/BookingRide";
import GetAppChip from "@/components/GetAppChip";
import BecomeRider from "@/components/BecomeRider";
import BlogChip from "@/components/BlogChip";
import Services from "@/components/Services";

export default function Home() {

  return (
    <Layout active={'Home'}>
      <Banner />
      <SubBanner />
      <GetAppChip />
      <BookingRide />
      <Services />
      <BecomeRider />
      <BlogChip />
    </Layout>
  )
}
