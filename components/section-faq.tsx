import faqImage from '@/assets/images/faq-image.svg'
import Collapsible from '@/components/common/collapsible'
import { useState } from 'react'
import Image from 'next/image'

export default function SectionFaq() {
  const [expanded, setExpanded] = useState<number>()
  const questions = [
    {
      question: 'What is MEMETAVERSE?',
      answer: `https://docs.memetaverse.club/`
    },
    {
      question: 'How do I enter MEMETAVERSE?',
      answer: `https://docs.memetaverse.club/getting-started`
    },
    {
      question: 'Do I need cryptocurrency or a crypto wallet to use MEMETAVERSE?',
      answer: `https://docs.memetaverse.club/faq`
    },
    {
      question: 'How do I build on MEMETAVERSE?',
      answer: `https://docs.memetaverse.club/build-on-memetaverse`
    },
    {
      question: 'How can I get help and contact the Support Team?',
      answer: `https://docs.memetaverse.club/contact-us/customer-support`
    }
  ]

  const handleExpandItem = (v: number) => {
    setExpanded(v === expanded ? undefined : v)
  }

  return (
    <div className="w-full flex justify-center relative">
      <div className="absolute left-[-339px] bottom-[50%]" style={{
        transform: 'translateY(50%)',
        width: 678,
        height: 678,
        borderRadius: '678px',
        background: 'linear-gradient(180deg, #B401FF 0%, #5A01FF 100%)',
        filter: 'blur(150px)'
      }} />

      <div className="w-full px-[12px] laptop:px-0 flex flex-col laptop:flex-row items-center justify-center">
        <div className="flex-1 max-w-[658px]">
          <div className="inline-flex items-end gap-3 mb-4">
            <div className="bg-white w-6 h-0.5" />
            <p className="font-svn italic font-semibold tracking-[4.2px] uppercase leading-none">
              FAQs
            </p>
          </div>

          <p className="text-white text-[32px] laptop:text-[56px] font-bold uppercase font-chakra mb-7 laptop:mb-12"
             style={{ textShadow: '3px 3px 0px #5A01FF' }}>
            What do you wonder?
          </p>

          <div className="flex flex-col gap-6">
            {
              questions.map((item, index) => (
                <a key={index} href={item.answer} target="_blank" rel="noopener noreferrer">
                  <Collapsible
                    // renderExpanded={
                    //   <a href={item.answer} className="text-body-2 font-svn text-white">
                    //     {item.answer}
                    //   </a>
                    // }
                    expanded={expanded === index}
                    toggle={() => handleExpandItem(index)}
                  >
                    <p className="text-subtitle-1 font-svn">&#x2022; {item.question}</p>
                  </Collapsible>
                </a>
              ))
            }
          </div>
        </div>

        <Image className="flex-1 max-w-[658px]" src={faqImage} alt="" />
      </div>
    </div>
  )
}