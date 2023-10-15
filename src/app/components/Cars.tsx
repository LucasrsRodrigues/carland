import { Brands, CarSlider } from ".";

export function Cars() {
  return (
    <section className="h-screen flex items-center" id="cars">
      <div className="container mx-auto">
        <Brands />
        <CarSlider />
      </div>
    </section>
  );
}
