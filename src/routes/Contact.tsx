export const Contact = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row gap-16 pb-10">
        <form className="flex flex-col gap-8 p-10 md:pt-10 w-full md:w-3/6">
          <header className="font-semibold text-2xl md:text-3xl">
            Want to know more about our prices?
          </header>
          <span className="text-lg w-5/6">
            Just tell us about your ideas, what your goals are and let's start
            this journey together
          </span>
          <label className="grid gap-y-2 text-xl font-semibold" htmlFor="name">
            Name
            <input
              className="rounded-lg font-normal py-1 pl-1 focus:outline-none focus:border-red-700 border-2 w-5/6 sm:w-60"
              type="text"
            />
          </label>
          <label className="grid gap-y-2 text-xl font-semibold" htmlFor="email">
            Email
            <input
              className="rounded-lg font-normal py-1 pl-1 focus:outline-none focus:border-red-700 border-2 w-5/6 sm:w-60"
              type="email"
            />
          </label>
          <label className="grid gap-y-2 text-xl font-semibold" htmlFor="src">
            Where did your know us from?
            <input
              className="rounded-lg font-normal py-1 pl-1 focus:outline-none focus:border-red-700 border-2 w-5/6 sm:w-60"
              type="text"
            />
          </label>
          <label
            htmlFor="message"
            className="grid gap-y-2 text-xl font-semibold"
          >
            Message
            <textarea className="rounded-lg font-normal py-1 pl-1 focus:outline-none focus:border-red-700 border-2 resize-none h-36 w-full" />
          </label>
          <button className="bg-transparent w-36 m-auto hover:bg-red-700 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent hover rounded">
            Send Message
          </button>
        </form>
        <div className="flex flex-col w-full md:w-3/6 gap-y-5 md:pt-10">
          <h3 className="text-2xl md:text-lg font-semibold">Email</h3>
          <span>thisemail@gmail.com</span>
          <h3 className="text-2xl md:text-lg font-semibold">Phones</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <span className="md:order-1">Peru</span>
            <span className="md:order-4">+5192245624</span>
            <span className="md:order-2">Argentina</span>
            <span className="md:order-5">+08712455224</span>
            <span className="md:order-3">Wakanda</span>
            <span className="md:order-6">+00144578</span>
          </div>
          <h3 className="text-2xl md:text-lg font-semibold">Address</h3>
          <div className="grid">
            <span>Lima</span>
            <span>21 Mariana St.</span>
            <span>Peru</span>
          </div>
          <div className="grid">
            <span>Buenos Aires</span>
            <span>21 La Rocola St.</span>
            <span>Argentina</span>
          </div>
        </div>
      </section>
    </>
  );
};
