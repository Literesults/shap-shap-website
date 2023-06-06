import Layout from '@/components/Layout'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import img from '../../../public/images/Rectanglei7.png'
import React, { useEffect } from 'react'
import { HiShare } from 'react-icons/hi'

function Blog() {
    const router = useRouter()
    const { id } = router.query
    const base = 'https://api.hmxexpress.com/api';
    useEffect(() => {
        console.log(id);

        // axios.post(`${base}/admin/rider/fetch-rider`, { id }).then((res) => {
        //     setData(res.data.data.rider);
        // }).catch((err) => {
        //     console.log(err);
        // });
    }, [router.query.name, router.isReady, id])
    return (
        <Layout active={'Blog'}>
            <div className="h-[60vh] flex items-center">
                <div className="w-full">
                    <div className="max-w-7xl mx-auto space-y-4">
                        <div className="[letter-spacing:0.175em] text-shap-800">Rider</div>
                        <div className="max-w-5xl font-[1000] text-3xl md:text-5xl dark:text-white">CRM Insights: Selection the Right One for Your Organization</div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl py-24 mx-auto">
                <div className="rounded-xl overflow-hidden"><div className={`max-w-7xl mx-auto h-[500px] bg-[url('/images/Rectanglei7.png')] bg-no-repeat bg-cover bg-center`} /></div>
                <div className="space-y-6 p-3 max-w-5xl mx-auto">
                    <div className="text-sm text-shap-800">05 June, 2023 - by Noble Okechi</div>
                    <div className="dark:text-white">Your safety is our utmost priority. We go to great lengths to ensure that every ride you take with Shap Ride is secure and comfortable. Our drivers undergo rigorous background checks, and our vehicles are meticulously maintained to guarantee your peace of mind throughout your journey.Your safety is our utmost priority. We go to great lengths to ensure that every ride you take with Shap Ride is secure and comfortable. Our drivers undergo rigorous background checks, and our vehicles are meticulously maintained to guarantee your peace of mind throughout your journey.Your safety is our utmost priority. We go to great lengths to ensure that every ride you take with Shap Ride is secure and comfortable. Our drivers undergo rigorous background checks, and our vehicles are meticulously maintained to guarantee your peace of mind throughout your journey.Your safety is our utmost priority. We go to great lengths to ensure that every ride you take with Shap Ride is secure and comfortable. Our drivers undergo rigorous background checks, and our vehicles are meticulously maintained...</div>
                    <div className="flex">
                        <div className="text-shap-800 flex-grow">Read More</div>
                        <div className="bg-[linear-gradient(180deg,#E09800_0%,#322200_100%)] text-white p-3"><HiShare /> </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Blog