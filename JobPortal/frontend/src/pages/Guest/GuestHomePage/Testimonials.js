import zair from "./img/zair.jpg";

const Testimonials = () => {
  return (
    <div>
      <section className="sec5 p-10 container m-auto border">
        <div className="subtitle text-center relative">
          <h1 className="inline-block text-3xl font-bold">Testimonials</h1>
          <span className="rounded absolute w-32 bg-teal-600 inline-block"></span>
        </div>
        <h3 className="font-bold mt-6 text-center text-sm">
          See what our users say about us
        </h3>
        <div className="max-w-5xl px-4 py-8 mx-auto">
          <section className="p-8 bg-gray-100 rounded-lg">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
              <div className="relative">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={zair}
                    alt="man"
                    className=" object-cover rounded-lg   "
                  />
                </div>

                <div className="absolute inline-flex px-4 py-2 bg-gray-200 rounded-lg shadow-xl -bottom-4 -right-4">
                  <span className="inline-block w-12 h-10 bg-teal-400 rounded-lg"></span>
                </div>
              </div>

              <blockquote className="sm:col-span-2">
                <p className="text-xl font-medium sm:text-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  perspiciatis cumque neque ut nobis excepturi, quasi iure
                  quisquam autem alias.
                </p>

                <cite className="inline-flex items-center mt-8 not-italic">
                  <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                  <p className="text-sm text-teal-500 uppercase sm:ml-3">
                    <strong>Zair Anjum</strong>, TitforTat Co.
                  </p>
                </cite>
              </blockquote>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
