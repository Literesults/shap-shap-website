import Image from 'next/image'
import React from 'react'
import { GrFacebookOption, GrTwitter, GrInstagram, GrYoutube } from 'react-icons/gr'
import CityImg from '../../public/images/city.png'
import google from '../../public/images/psA1TtmLqiU.jpg'
import apple from '../../public/images/images.jpg'
import instagram from '../../public/images/instagram.png'
import logoLight from '../../public/images/Logo.png';
import Link from 'next/link'

function Footer() {
    return (
        <div className="-space-y-2">
            <div className="-space-x-1 inline-flex w-screen overflow-hidden">
                <Image draggable={false} src={CityImg} alt="" className="footerCityImg" width="400" height="200" />
                <Image draggable={false} src={CityImg} alt="" className="footerCityImg [transform:scaleX(-1)]" width="400" height="200" />
                <Image draggable={false} src={CityImg} alt="" className="footerCityImg" width="400" height="200" />
                <Image draggable={false} src={CityImg} alt="" className="footerCityImg [transform:scaleX(-1)]" width="400" height="200" />
                <Image draggable={false} src={CityImg} alt="" className="footerCityImg" width="400" height="200" />
                <Image draggable={false} src={CityImg} alt="" className="footerCityImg [transform:scaleX(-1)]" width="400" height="200" />
                <Image draggable={false} src={CityImg} alt="" className="footerCityImg" width="400" height="200" />
                <Image draggable={false} src={CityImg} alt="" className="footerCityImg [transform:scaleX(-1)]" width="400" height="200" />
                <Image draggable={false} src={CityImg} alt="" className="footerCityImg" width="400" height="200" />
                <Image draggable={false} src={CityImg} alt="" className="footerCityImg [transform:scaleX(-1)]" width="400" height="200" />
                <Image draggable={false} src={CityImg} alt="" className="footerCityImg" width="400" height="200" />
                <Image draggable={false} src={CityImg} alt="" className="footerCityImg [transform:scaleX(-1)]" width="400" height="200" />
                <Image draggable={false} src={CityImg} alt="" className="footerCityImg" width="400" height="200" />
            </div>
            <div className="p-12 pb-4 px-3 md:px-12 space-y-6 bg-shap-900">
                <div className="lg:flex space-y-4 content-center items-center gap-4">
                    <div className="flex-grow">
                        <div className="sm:max-w-sm text-center sm:text-left text-white font-bold text-3xl">Join our newsletter to keep up to date with us</div>
                    </div>
                    <div className="flex w-80 mx-auto sm:mx-0 rounded-lg overflow-hidden">
                        <button className="bg-black order-1 text-white px-4 py-2">Subscribe</button>
                        <div className="flex-grow"><input type="text" className="w-full border-0 focus:outline-none focus:ring-0 px-4 h-full ring-0" /></div>
                    </div>
                </div>
                <hr className="w-[98%] border-gray-600 mx-auto h-[1px]" />
                <div className="lg:flex space-y-4 items-center gap-4">
                    <div className="flex-grow space-y-4">
                        <div className="text-3xl pb-3 text-white">
                            <Image src={logoLight} alt='' width={'100'} height={'104'} className="rounded-lg mx-auto sm:mx-0 dark:block cursor-pointer" draggable="false" />
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-center sm:justify-start flex-wrap gap-2">
                                <Image src={google} alt='' width={'140'} height={'54'} className="rounded-lg cursor-pointer" draggable="false" />
                                <Image src={apple} alt='' width={'140'} height={'54'} className="rounded-lg cursor-pointer" draggable="false" />
                            </div>
                            <div className="flex justify-center sm:justify-start gap-4">
                                <div className="h-8 w-8 flex items-center justify-center rounded-md bg-white text-blue-600"><GrFacebookOption /></div>
                                <div className="h-8 w-8 flex items-center justify-center rounded-md bg-white text-blue-500"><GrTwitter /></div>
                                <div className="h-8 w-8 flex items-center justify-center rounded-md bg-white">
                                    <Image src={instagram} alt='' width={'25'} height={'25'} className="rounded-lg cursor-pointer" draggable="false" />
                                </div>
                                <div className="h-8 w-8 flex items-center justify-center rounded-md bg-white text-red-500"><GrYoutube /></div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <div className="text-white font-bold text-xl">Company</div>
                            <div className="flex flex-col gap-2 text-gray-400">
                                <Link href={'/blogs'} className="cursor-pointer hover:text-white">Blog</Link>
                                <Link href={'/about'} className="cursor-pointer hover:text-white">About Us</Link>
                                <Link href={'/faq'} className="cursor-pointer hover:text-white">FAQ&apos;s</Link>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="text-white font-bold text-xl">Legal</div>
                            <div className="flex flex-col gap-2 text-gray-400">
                                <Link href={'/blogs'} className="cursor-pointer hover:text-white">Drivers Agreement</Link>
                                <Link href={'/about'} className="cursor-pointer hover:text-white">Users Agreement</Link>
                                <Link href={'/faq'} className="cursor-pointer hover:text-white">Policy</Link>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[450px] dark:hidden rounded-md">
                        <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Why would your Startup idea leverage on investors alone?
                                <br /><br />
                                Have you ever thought of getting a better product that can scale through on its own?
                            </p>&mdash; Noble Okechi (@noble_okechi)
                            <a href="https://twitter.com/noble_okechi/status/1664492277660565505?ref_src=twsrc%5Etfw">June 2, 2023</a>
                        </blockquote>
                        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                    </div>
                    <div className="md:w-[450px] hidden dark:block rounded-md">
                        <blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Why would your Startup idea leverage on investors alone?<br /><br />Have you ever thought of getting a better product that can scale through on its own?</p>&mdash; Noble Okechi (@noble_okechi) <a href="https://twitter.com/noble_okechi/status/1664492277660565505?ref_src=twsrc%5Etfw">June 2, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                    </div>
                </div>
                <hr className="w-[98%] border-gray-600 mx-auto h-[2px]" />
                <div className="flex items-center gap-4 space-y-3 text-sm">
                    <div className="flex-grow text-white font-semibold">Copyright &copy; 2023 - <span className="text-gray-400">Shap Cab </span></div>
                    <div className="flex relative bottom-2 items-center gap-4 text-gray-300">
                        {/* <div className="w-1 h-1 relative top-1 bg-slate-200 rounded-full"></div> */}
                        <Link href={'/terms-conditions'} className="cursor-pointer hover:text-white">Teams & Conditions</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer