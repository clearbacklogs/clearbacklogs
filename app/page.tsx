import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Statistics } from '@/components/Statistics'
import { Universities } from '@/components/Universities'
import { HowItWorks } from '@/components/HowItWorks'
import { FindFaculty } from '@/components/FindFaculty'
import { LiveBacklogBatches } from '@/components/LiveBacklogBatches'
import { StudentSuccessStories } from '@/components/StudentSuccessStories'
import { BecomeFaculty } from '@/components/BecomeFaculty'
import { FAQ } from '@/components/FAQ'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <Statistics />
      <Universities />
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="faculty">
        <FindFaculty />
      </section>
      <section id="batches">
        <LiveBacklogBatches />
      </section>
      <section id="stories">
        <StudentSuccessStories />
      </section>
      <section id="faculty-join">
        <BecomeFaculty />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}
