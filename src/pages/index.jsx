import HomeBanner from "@/components/HomeBanner";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout active={'home'}>
      {/* app banner */}
      <section>
        <HomeBanner />
      </section>
    </Layout>
  )
}
