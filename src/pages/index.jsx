import BookingRide from "@/components/BookingRide";
import ContactCard from "@/components/ContactCard";
import HomeBanner from "@/components/HomeBanner";
import Layout from "@/components/Layout";
import Image from 'next/image'
import Services from "@/components/Services";
import mockup from '../../public/images/MobileMockup.png'
import google from '../../public/images/psA1TtmLqiU.jpg'
import apple from '../../public/images/images.jpg'

export default function Home() {
  return (
    <Layout active={'home'}>
      <section>
        <HomeBanner />
        <div className="">
          <div className="max-w-6xl w-11/12 md:w-auto gap-4 p-3 mx-auto grid md:grid-cols-2">
            <div className="my-auto">
              <div className="pb-16 space-y-4">
                <div className="">
                  <div className="text-3xl dark:text-white font-bold">
                    Getting The <span className="text-yellow-500">App</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-100 text-sm py-10">
                    A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the dinner would be cassava, eba, ewa and everything.
                  </p>
                </div>
                <div className="flex gap-5">
                  <Image src={google} alt='' width={'150'} height={'54'} className="rounded-lg cursor-pointer" draggable="false" />
                  <Image src={apple} alt='' width={'150'} height={'54'} className="rounded-lg cursor-pointer" draggable="false" />
                </div>
                <div className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolorem accusamus eius voluptatum, laboriosam possimus repellat a sunt reprehenderit est ipsam! Quia animi, vero ratione asperiores earum repellendus commodi sed!
                </div>
              </div>
              
            </div>
            <div className="flex w-full items-center justify-center">
              <Image src={mockup} alt='' className="rounded-lg cursor-pointer w-auto h-full" draggable="false" />
            </div>
          </div>
        </div>
        <BookingRide />
        <Services />
        <ContactCard />
      </section>
    </Layout>
  )
}
