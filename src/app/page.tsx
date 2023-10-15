import {
  About,
  Cars,
  Header,
  Hero,
  Why,
  Testimonial,
  Cta,
  Footer,
  BackToTopButton,
} from "./components";

export default function Home() {
  return (
    <main className="max-w[1920px] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Cars />
      <About />
      <Why />
      <Testimonial />
      <Cta />
      <Footer />
      <BackToTopButton />
    </main>
  );
}
