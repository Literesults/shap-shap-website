import Image from 'next/image'
import React from 'react'
import { GrFacebookOption , GrTwitter , GrInstagram , GrYoutube } from 'react-icons/gr'
import CityImg from '../../public/images/city.png'
import playstore from '../../public/images/playStore.png'
import appstore from '../../public/images/appStore.png'

function Footer() {
    return (
        <div className="-space-y-2">
            <div className="-space-x-1 inline-flex w-screen overflow-hidden">
                <Image draggable={false} src={CityImg} alt="" className="footerCityImg" width="400" height="200"/>
                <Image draggable={false} src={CityImg} alt="" className="footerCityImg [transform:scaleX(-1)]" width="400" height="200"/>
                <Image draggable={false} src={CityImg} alt="" className="footerCityImg" width="400" height="200"/>
                <Image draggable={false} src={CityImg} alt="" className="footerCityImg [transform:scaleX(-1)]" width="400" height="200"/>
                <Image draggable={false} src={CityImg} alt="" className="footerCityImg" width="400" height="200"/>
                <Image draggable={false} src={CityImg} alt="" className="footerCityImg [transform:scaleX(-1)]" width="400" height="200"/>
                <Image draggable={false} src={CityImg} alt="" className="footerCityImg" width="400" height="200"/>
                <Image draggable={false} src={CityImg} alt="" className="footerCityImg [transform:scaleX(-1)]" width="400" height="200"/>
                <Image draggable={false} src={CityImg} alt="" className="footerCityImg" width="400" height="200"/>
                <Image draggable={false} src={CityImg} alt="" className="footerCityImg [transform:scaleX(-1)]" width="400" height="200"/>
                <Image draggable={false} src={CityImg} alt="" className="footerCityImg" width="400" height="200"/>
                <Image draggable={false} src={CityImg} alt="" className="footerCityImg [transform:scaleX(-1)]" width="400" height="200"/>
                <Image draggable={false} src={CityImg} alt="" className="footerCityImg" width="400" height="200"/>
            </div>
            <div className="p-12 pb-4 px-3 md:px-12 space-y-6 bg-shap-900">
                <div className="lg:flex space-y-4 items-center gap-4">
                    <div className="flex-grow">
                        <div className="text-3xl text-white">LOGO</div>
                        <div className="max-w-lg text-sm text-gray-400">A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the dinner would be cassava, eba, ewa and everything.</div>
                    </div>
                    <div className="flex w-80 rounded-lg overflow-hidden">
                        <button className="bg-black lg:order-1 text-white px-4 py-2">Subscribe</button>
                        <div className="flex-grow"><input type="text" className="w-full border-0 focus:outline-none focus:ring-0 px-4 h-full ring-0" /></div>
                    </div>
                </div>
                <hr className="w-[90%] mx-auto h-[1px]"/>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
                    <div className="">
                        <div className="text-lg text-white">Top Title</div>
                        <div>
                            <div className="text-gray-400">items</div>
                            <div className="text-gray-400">items</div>
                            <div className="text-gray-400">items</div>
                            <div className="text-gray-400">items</div>
                            <div className="text-gray-400">items</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-lg text-white">Top Title</div>
                        <div>
                            <div className="text-gray-400">items</div>
                            <div className="text-gray-400">items</div>
                            <div className="text-gray-400">items</div>
                            <div className="text-gray-400">items</div>
                            <div className="text-gray-400">items</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-lg text-white">Contacts & Addresses</div>
                        <div>
                            <div className="text-gray-400">items</div>
                            <div className="text-gray-400">items</div>
                            <div className="text-gray-400">items</div>
                            <div className="text-gray-400">items</div>
                            <div className="text-gray-400">items</div>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-3 xl:col-span-2">
                        <div className="space-y-3">
                            <div className="xl:text-right font-bold text-xl text-white">Social Media</div>
                            <div className="flex xl:justify-end gap-4">
                                <div className="h-8 w-8 flex items-center justify-center rounded-md bg-white text-blue-600"><GrFacebookOption /></div>
                                <div className="h-8 w-8 flex items-center justify-center rounded-md bg-white text-blue-500"><GrTwitter/></div>
                                <div className="h-8 w-8 flex items-center justify-center rounded-md bg-white"><span className="bg-gradient-to-br from-red-500 via-orange-500 bg-clip-text to-blue-600"><GrInstagram/></span></div>
                                <div className="h-8 w-8 flex items-center justify-center rounded-md bg-white text-red-500"><GrYoutube/></div>
                            </div>
                            <div className="flex xl:justify-end flex-wrap gap-2">
                                <Image src={playstore} alt="" className="rounded-lg cursor-pointer" />
                                <span className="bg-white p-0 rounded-lg cursor-pointer"><Image src={appstore} alt="" className="rounded-lg" /></span>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="w-[90%] mx-auto h-[2px]"/>
                <div className="sm:flex gap-4 space-y-3 text-sm">
                    <div className="flex-grow text-white font-semibold">Copyright &copy; 2023 - <span className="text-gray-400">Powered Shap-Shap </span></div>
                    <div className="w-72 flex items-center gap-4 text-gray-300">
                        <div className="cursor-pointer hover:text-white">Policy</div>
                        <div className="w-1 h-1 relative top-1 bg-slate-200 rounded-full"></div>
                        <div className="cursor-pointer hover:text-white">Teams & Conditions</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer