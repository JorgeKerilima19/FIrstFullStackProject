export const Contact = () => {
  return (
    <>
      <section>
        <form>
          <header>Want to know more about our prices?</header>
          <span>
            Just tell us about your ideas, what your goals are and let's start
            this journey together
          </span>
          <label htmlFor="name">
            Name
            <input type="text" />
          </label>
          <label htmlFor="email">
            Email
            <input type="email" />
          </label>
          <label htmlFor="src">
            Where did your know us from?
            <input type="text" />
          </label>
          <label htmlFor="message">
            Message
            <textarea />
          </label>
          <button>Send Message</button>
        </form>
      </section>
    </>
  );
};
