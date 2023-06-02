import Layout from '@/components/Layout'
import { AiOutlineMinus } from 'react-icons/ai'
import { HiOutlineChevronDown } from 'react-icons/hi'
import { TbZoomQuestion } from 'react-icons/tb'
import React, { useEffect, useState } from 'react'
import { FiPlay } from 'react-icons/fi'
import axios from 'axios'

function Faq() {
  const [faq, setFaq] = useState([])
  const base = 'https://api.hmxexpress.com/api';

  const fetchFaq = () => {
    axios.post(`${base}/support/fetch-faq`).then((res) => {
      setFaq(res.data.data.faqs);
    })
  }

  useEffect(() => {
    fetchFaq()
  }, [])
  

  // useEffect(() => {
  //   setActiveFaq(faq[0].category)
  //   faq.forEach(ele => {
  //     if (!faqOption.includes(ele.category)) {
  //       faqOption.push(ele.category)
  //     }
  //   });
  // }, [faq, faqOption])

  // useEffect(() => {
  //   let newfaq = []
  //   for (let i = 0; i < faq.length; i++) {
  //     if (faq[i].category == activeFaq) {
  //       newfaq = [...newfaq, faq[i]];
  //     }
  //   }
  //   closeD()
  //   setCatDetailsData(newfaq)
  // }, [activeFaq, faq, faqOption])


  const dropDown = (index) => {
    if (!document.querySelectorAll('.allDetails')[0].children[index].children[1].children[0].classList.contains('hidden')) {
      closeD()
      document.querySelectorAll('.allDetails')[0].children[index].children[1].children[0].classList.add('hidden')
      document.querySelectorAll('.allDetails')[0].children[index].children[1].children[1].classList.remove('hidden')
      document.querySelectorAll('.allDetails')[0].children[index].firstChild.lastChild.classList.remove('hidden')
    } else {
      closeD()
    }
  }

  const closeD = () => {
    var lent = document.querySelectorAll('.allDetails')[0].childElementCount
    for (let index = 0; index < lent; index++) {
      document.querySelectorAll('.allDetails')[0].children[index].firstChild.lastChild.classList.add('hidden')
      document.querySelectorAll('.allDetails')[0].children[index].children[1].children[0].classList.remove('hidden')
      document.querySelectorAll('.allDetails')[0].children[index].children[1].children[1].classList.add('hidden')
    }
  }




  return (
    <Layout active={'faq'}>
      <section className="">
        <div className="faqBanner">
          <div className="pt-24 pb-20 bg-black bg-opacity-25 backdrop-blur-md px-3">
            <div className="max-w-7xl py-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex w-full items-center">
                <div className="">
                  <div className="text-3xl text-gray-200">Get a</div>
                  <div className="text-4xl sm:text-6xl font-extrabold text-gray-50 capitalize"><span className="underline">Quick</span> <span className="text-3xl text-gray-200">and</span></div>
                  <div className="text-4xl sm:text-6xl font-extrabold text-yellow-600 capitalize"><span className="text-3xl text-gray-200">Comfortable</span> Ride</div>
                  <div className="max-w-lg mt-5 text-white">
                    Lorem, ipsum dolor sit amet consectetur  nesciunt voluptatum eligendi magnam corrupti earum iusto nam illo inventore, dignissimos, sapiente atque officia aliquid ipsam!
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-black cursor-pointer md:bg-transparent flex items-center rounded-full gap-4 text-white ">
                  <div className="h-16 relative after:absolute after:w-full after:h-full after:animate-ping after:rounded-full after:bg-white w-16 rounded-full border-2 border-white text-white flex items-center justify-center">
                    <FiPlay className="relative left-[2px] text-white" />
                  </div>
                  <div className="pr-4 md:hidden">Watch Video</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 pt-24">
          <div className="max-w-7xl space-y-12 mx-auto">
            <div className="">
              <div className="text-center text-4xl font-bold text-yellow-600 capitalize"  >frequently asked questions</div>
              <div className="max-w-2xl mx-auto text-gray-400 text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi tempore possimus reiciendis doloribus impedit rem distinctio quam pariatur officiis facilis omnis reprehenderit, dignissimos laborum veritatis ipsam! Explicabo quia quam voluptates?
              </div>
            </div>
            <div className="max-w-3xl space-y-8 px-3 mx-auto py-10">
              <div className="">
                <div className="max-w-3xl bg-white dark:text-white dark:border-gray-600 dark:bg-gray-800 rounded-lg overflow-hidden border relative">
                  <div className="absolute top-2 left-2">
                    <TbZoomQuestion size={'24px'} />
                  </div>
                  <input type="text" className="w-full pl-9 bg-transparent h-full focus:outline-none p-3" placeholder="Search by Question" />
                </div>
              </div>
              <div className="">
                <div className=" bg-white dark:bg-gray-600 shadow-md rounded-md border dark:border-gray-700 p-3">
                  <div className="divide-y allDetails">
                    {
                      faq.map((data, i) => (
                        <div className="p-3 flex" key={i} role="button" onClick={() => dropDown(i)}>
                          <div className="flex-grow space-y-2 dark:text-gray-200 cursor-pointer">
                            <div className="first-letter:uppercase">{data.question}</div>
                            <div className="text-gray-400 text-sm hidden transition-all duration-300">{data.answer}</div>
                          </div>
                          <div className="cursor-pointer px-1 text-gray-400">
                            <HiOutlineChevronDown className="" />
                            <AiOutlineMinus className="hidden" />
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
      </section>
    </Layout>
  )
}

export default Faq