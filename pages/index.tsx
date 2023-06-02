import { Fragment } from 'react';
import type { NextPage } from 'next';
// -------- custom component -------- //
import { Team1 } from 'components/blocks/team';
import { Hero1 } from 'components/blocks/hero';
import { About1 } from 'components/blocks/about';
import { Footer1 } from 'components/blocks/footer';
import { NavbarPhoto } from 'components/blocks/navbar';
import { Pricing7 } from 'components/blocks/pricing';
import { Clients1 } from 'components/blocks/clients';
import { Process6 } from 'components/blocks/process';
import { Contact4 } from 'components/blocks/contact';
import { CTA1, CTA2, CTA10 } from 'components/blocks/call-to-action';
import { Testimonial1 } from 'components/blocks/testimonial';
import { Services1, Services2 } from 'components/blocks/services';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
import { Portfolio2, Portfolio5 } from 'components/blocks/portfolio';

const Home: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <NavbarPhoto
          language={false}
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded" />}
        />
      </header>

      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero1 />

        <section className="wrapper bg-light angled upper-start lower-start">
          {/* ========== what we do section ========== */}
          <Services1 />
        </section>
        {/* =============== portfolio section =============== */}

        <Portfolio5 />
        <section className="wrapper bg-light angled upper-start lower-start">
          <div className="container py-14 pt-md-17 pb-md-15">
            {/* ================== pricing ===================== */}
            <Pricing7 />
          </div>
          {/* ========== call to action section ========== */}
          <CTA10 />
        </section>

        {/* ========== our strategy and why choose us section ========== */}
        <section className="wrapper bg-light angled upper-start lower-start">
          <div className="container py-14 pt-md-17 pb-md-15">
            <Process6 />
            {/* <About1 /> */}
          </div>
        </section>

        {/* ========== our team section ========== */}
        {/* <Team1 /> */}

        {/* ========== our solution section ========== */}
        {/* <Services2 /> */}

        {/* ========== testimonial section ========== */}
        <Testimonial1 />

        {/* ========== pricing, contact and clients section ========== */}
        <section className="wrapper bg-light angled upper-end lower-end">
          <div className="container py-14 pt-md-14 pb-md-18">
            {/* <Pricing1 dottedShape /> */}
            <Contact4 />
            <div className="px-lg-5">{/* <Clients1 /> */}</div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer1 />
    </Fragment>
  );
};

export default Home;
