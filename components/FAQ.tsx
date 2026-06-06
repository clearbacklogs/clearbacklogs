'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

export function FAQ() {
  const faqs = [
    {
      question: 'How do I find a faculty member for my subject?',
      answer:
        'Use our search feature to filter faculty by subject, degree program, and rating. You can view their profiles, teaching approach, and connect with them directly. We help you match with the right faculty based on your learning style and schedule.',
    },
    {
      question: 'What degree programs do you support?',
      answer:
        'We support B.Tech, MBA, MCA, M.Tech, and other degree programs. Our platform has faculty and resources for all major backlog subjects including programming, mathematics, databases, web development, and more.',
    },
    {
      question: 'Are the live batches worth joining?',
      answer:
        'Absolutely! Live batches provide a structured learning environment with peer support, regular classes, and group doubt sessions. Our data shows 98% of students in live batches pass their exams. Plus, you get access to recorded sessions if you miss a class.',
    },
    {
      question: 'How much does it cost?',
      answer:
        'Pricing varies based on the faculty you choose and the type of program. Individual sessions start from ₹500, while monthly batch programs range from ₹2,000-₹5,000. We offer flexible payment options and money-back guarantee if you&apos;re not satisfied.',
    },
    {
      question: 'Can I get a refund if I&apos;m not satisfied?',
      answer:
        'Yes, we offer a 7-day money-back guarantee for all programs. If you&apos;re not satisfied with your faculty or batch, we&apos;ll refund your money without any questions asked.',
    },
    {
      question: 'How do I schedule sessions with a faculty?',
      answer:
        'Once you connect with a faculty member, you can view their available time slots and book sessions directly through our platform. You can schedule one-on-one sessions or join their live batch classes.',
    },
    {
      question: 'What if I need help during a session?',
      answer:
        'All faculty members provide real-time help during sessions. You can ask questions, share your screen, and get instant feedback. We also have 24/7 support to help with any platform-related issues.',
    },
    {
      question: 'Do you provide study materials?',
      answer:
        'Yes! Each faculty member provides comprehensive study materials including notes, practice problems, and mock exams. All materials are available on our platform and can be accessed anytime.',
    },
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-600">
            Find answers to common questions about ClearBacklogs
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 border-blue-100 rounded-xl px-6 bg-white hover:border-blue-300 hover:shadow-md transition-all data-[state=open]:border-blue-300 data-[state=open]:bg-blue-50"
            >
              <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-blue-600 py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200 rounded-2xl p-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">Still have questions?</h3>
          <p className="text-slate-600 text-lg">
            Can&apos;t find the answer you&apos;re looking for? Our support team is here to help.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-8 h-12 font-semibold shadow-lg hover:shadow-xl transition-all">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
