import Layout from '@/components/Layout'
import { AiOutlineMinus } from 'react-icons/ai'
import { HiOutlineChevronDown } from 'react-icons/hi'
import { TbZoomQuestion } from 'react-icons/tb'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Faq() {
  useEffect(() =>{
      AOS.init();
  },[])
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
        <div className="abtBg">
          <div className="[background:linear-gradient(90.06deg,#050400_-1.71%,rgba(87,70,0,0.25)_56.42%,rgba(151,120,0,0.83)_113.82%)] space-y-6 py-20">
            <div className="text-center text-4xl font-bold text-white capitalize"  >frequently asked questions</div>
            <div className="max-w-2xl mx-auto text-gray-200 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi tempore possimus reiciendis doloribus impedit rem distinctio quam pariatur officiis facilis omnis reprehenderit, dignissimos laborum veritatis ipsam! Explicabo quia quam voluptates?
            </div>
          </div>
        </div>
        <div className="p-3 pt-24">
          <div className="max-w-7xl space-y-12 mx-auto">
            <div className="max-w-3xl space-y-8 px-3 mx-auto">
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
                        <div data-aos="fade-up" className="p-3 flex" key={i} role="button" onClick={() => dropDown(i)}>
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