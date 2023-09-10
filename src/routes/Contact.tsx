export const Contact = () => {
  return (
    <>
      <section>
        <form className="flex flex-col gap-8 md:pt-10">
          <header className="font-medium text-2xl">
            Want to know more about our prices?
          </header>
          <span className="text-lg">
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
            <textarea className="rounded-lg font-normal py-1 pl-1 focus:outline-none focus:border-red-700 border-2 w-5/6 sm:w-60 resize-none h-36" />
          </label>
          <button className="bg-transparent w-36 m-auto hover:bg-red-700 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent hover rounded">
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};
