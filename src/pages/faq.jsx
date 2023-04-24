import Layout from '@/components/Layout'
import Image from 'next/image'
import img from '../../public/images/5157654.png'
import React, { useEffect, useState } from 'react'

function faq() {
  const [activeFaq,setActiveFaq] = useState('')
  const [catDetailsData,setCatDetailsData] = useState([])
  const [faqOption,setFaqOption] = useState([])
  const [faq,setFaq] = useState([
    {
      category:'help',
      qustions:'how to hewlp',
      answer:'A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba.'
    },
    {
      category:'helper',
      qustions:'how to helpwer',
      answer:'A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba.'
    },
    {
      category:'helper',
      qustions:'how to helper',
      answer:'A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba.'
    },
    {
      category:'help',
      qustions:'how to help',
      answer:'A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba.'
    },
  ])


  const setcurrentfaq = () => {
    let newfaq = []
    for (let i= 0; i < faq.length ; i++) {
        if (faq[i].category == activeFaq ) {
          newfaq = [...newfaq ,faq[i]];
        }
    }
    setCatDetailsData(newfaq)
  }

  useEffect(() => {
    setActiveFaq(faq[0].category)
    faq.forEach(ele => {
      if (!faqOption.includes(ele.category)){
        faqOption.push(ele.category)
      }
    });
  }, [faq,faqOption])

  useEffect(() => {
    setcurrentfaq()
  }, [activeFaq,faqOption])
  


  return (
    <Layout active={'faq'}>
        <section className="">
          <div className="pt-24 pb-20  bg-gray-50 dark:bg-gray-900 px-3">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex w-full items-center">
                <div className="">
                  <div className="text-3xl dark:text-gray-200">Get a</div>
                  <div className="text-4xl sm:text-6xl font-extrabold text-gray-700 dark:text-gray-50 capitalize"><span className="underline">Quick</span> <span className="text-3xl dark:text-gray-200">and</span></div>
                  <div className="text-4xl sm:text-6xl font-extrabold text-yellow-600 capitalize"><span className="text-3xl dark:text-gray-200 text-gray-700">Confortable</span> Ride</div>
                  <div className="max-w-lg mt-5 text-gray-500">
                    Lorem, ipsum dolor sit amet consectetur  nesciunt voluptatum eligendi magnam corrupti earum iusto nam illo inventore, dignissimos, sapiente atque officia aliquid ipsam!
                  </div>
                </div>
              </div>
              <div className="">
                {/* <Image src="imgs/business-desktop.png" alt="" srcset="" /> */}
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className=""></div>
            <div className="max-w-7xl mx-auto">
              <div className="">
                <div className="text-center text-4xl font-bold text-yellow-600" style={{ "font-family":'Segoe Script' }} >frequently asked questions</div>
                <div className="max-w-2xl mx-auto text-gray-400 text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi tempore possimus reiciendis doloribus impedit rem distinctio quam pariatur officiis facilis omnis reprehenderit, dignissimos laborum veritatis ipsam! Explicabo quia quam voluptates?
                </div>
              </div>
              <div className="max-w-5xl px-3 mx-auto py-10">
                <div className="grid md:grid-cols-3 gap-3">
                    <div className="">
                        {
                          faq.length < 1 ? (
                            <div>
                              No Fag
                            </div>
                          ):(
                            <div className="space-y-2 grid sm:grid-cols-2 md:grid-cols-1">
                              {
                                faqOption.map((data,i)=>(
                                  <div onClick={()=> setActiveFaq(data)} key={i} className={`hover:scale-95 hover:bg-black hover:text-white shadow-md border dark:border-gray-700 rounded-md capitalize p-3 cursor-pointer ${activeFaq == data ? 'scale-95 bg-black text-white  dark:bg-gray-900 dark:text-gray-300':' dark:bg-gray-600 dark:text-gray-300'} `}>
                                    {data}
                                  </div>
                                ))
                              }
                              
                            </div>
                          )
                        }
                        
                    </div>
                    <div className="md:col-span-2 space-y-3">
                        <div className=" bg-white dark:bg-gray-600 shadow-md rounded-md border dark:border-gray-700 p-3">
                            <div className="text-xl uppercase font-bold dark:text-white">{ activeFaq }</div>
                            <div className="divide-y allDetails">
                              {
                                catDetailsData.map((data,i) => (
                                  <div className="p-3 flex" key={i} >
                                    <div className="flex-grow space-y-2 dark:text-gray-200 cursor-pointer">
                                        <div className="first-letter:uppercase">{ data.qustions }</div>
                                        <div className="text-gray-400 text-sm hidden transition-all duration-300">{ data.answer }</div>
                                    </div>
                                    <div className="cursor-pointer px-1">
                                        {/* <font-awesome :icon="['fas', 'angle-down']" className="text-gray-400" size="" />
                                        <font-awesome :icon="['fas', 'minus']" className="text-gray-400 hidden" size="" /> */}
                                    </div>
                                  </div>
                                ))
                              }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
          </div>
        </section>
    </Layout>
  )
}

export default faq