import React from "react";

const Testimonials = () => {
  return (
    <section className="">
      <div className="grid items-center gap-4 xl:grid-cols-5">
        <div className="max-w-2xl my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
          <p className="text-primary">Testimonials</p>
          <h2 className="text-4xl font-semibold font-playfairDisplay text-neutral-800">
            What <span className="text-primary">People</span> Say About Us
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa iste
            praesentium sequi ipsam dolor odit similique alias mollitia,
            excepturi ullam.
          </p>
        </div>
        <div className="p-6 xl:col-span-3">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid content-center gap-4">
              <div className="p-6 rounded-3xl border-[1px] border-neutral-800  space-y-6 ">
                <p className="text-sm leading-6">
                  An audire commodo habemus cum. Ne sed corrumpit repudiandae.
                  Tota aliquip democritum pro in, nec democritum intellegam ne.
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <img
                    src="https://source.unsplash.com/50x50/?portrait?1"
                    alt=""
                    className="w-12 h-12 bg-center bg-cover rounded-full"
                  />
                  <div>
                    <p className="text-lg font-semibold">Leroy Jenkins</p>
                    <p className="text-sm ">CTO of Company Co.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-3xl border-[1px] border-neutral-800  space-y-6 ">
                <p className="text-sm leading-6">
                  Sit wisi sapientem ut, pri civibus temporibus voluptatibus et,
                  ius cu hinc fabulas.
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <img
                    src="https://source.unsplash.com/50x50/?portrait?2"
                    alt=""
                    className="w-12 h-12 bg-center bg-cover rounded-full "
                  />
                  <div>
                    <p className="text-lg font-semibold">Leroy Jenkins</p>
                    <p className="text-sm ">CTO of Company Co.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid content-center gap-4">
              <div className="p-6 rounded-3xl border-[1px] border-neutral-800  space-y-6 ">
                <p className="text-sm leading-6">
                  Putant omnium elaboraret per ut. Id dicta tritani nominavi
                  quo, mea id justo errem elaboraret.
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <img
                    src="https://source.unsplash.com/50x50/?portrait?3"
                    alt=""
                    className="w-12 h-12 bg-center bg-cover rounded-full "
                  />
                  <div>
                    <p className="text-lg font-semibold">Leroy Jenkins</p>
                    <p className="text-sm ">CTO of Company Co.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-3xl border-[1px] border-neutral-800  space-y-6 ">
                <p className="text-sm leading-6">
                  Te omnes virtute volutpat sed. Ei esse eros interesset vel, ei
                  populo denique ocurreret vix, eu cum pertinax mandamus
                  vituperatoribus.
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <img
                    src="https://source.unsplash.com/50x50/?portrait?4"
                    alt=""
                    className="w-12 h-12 bg-center bg-cover rounded-full "
                  />
                  <div>
                    <p className="text-lg font-semibold">Leroy Jenkins</p>
                    <p className="text-sm ">CTO of Company Co.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
