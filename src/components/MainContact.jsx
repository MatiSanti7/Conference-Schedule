export default function MainContact() {
  return (
    <main className="relative flex justify-center gap-32 my-14">
      <form action="" className="w-1/3 text-xl">
        <label className="text-white" htmlFor="name">
          Name *
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          className="w-full p-2 pl-4 my-2 mb-5 border-2 border-gray-300 rounded-full outline-none focus:ring-red-500 focus:border-red-500"
          required
        />
        <label className="text-white" htmlFor="email">
          Email *
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 pl-4 my-2 mb-5 border-2 border-gray-300 rounded-full outline-none focus:ring-red-500 focus:border-red-500"
          required
        />
        <label className="text-white" htmlFor="company">
          Company/Organization
        </label>
        <input
          id="company"
          type="text"
          placeholder="Enter your company or organization"
          className="w-full p-2 pl-4 my-2 mb-5 border-2 border-gray-300 rounded-full outline-none focus:ring-red-500 focus:border-red-500"
        />
        <label className="text-white" htmlFor="textarea">
          Message *
        </label>
        <textarea
          id="textarea"
          placeholder="Enter your message"
          className="w-full p-2 pl-4 my-2 mb-5 border-2 border-gray-300 rounded-lg outline-none resize-none focus:ring-red-500 focus:border-red-500"
          rows="5"
          required
        />
        <button
          type="submit"
          className="px-10 py-2 mt-3 transition-all duration-300 bg-white rounded-full hover:bg-red-500 hover:text-white hover:shadow-md hover:shadow-slate-400/50"
        >
          Submit
        </button>
      </form>
      <section className="text-white w-60 ">
        <ul className="flex gap-5 text-4xl mb-7">
          <li>
            <a href="">
              <i
                className="transition-all duration-300 hover:text-red-500 fa fa-facebook-official"
                aria-hidden="true"
              ></i>
            </a>
          </li>
          <li>
            <a href="">
              <i
                className="transition-all duration-300 hover:text-red-500 fa fa-instagram "
                aria-hidden="true"
              ></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="transition-all duration-300 hover:text-red-500 fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="transition-all duration-300 hover:text-red-500 fa fa-youtube"></i>
            </a>
          </li>
        </ul>
        <span className="text-xl">
          <strong>Conference Schedule</strong>
          <br /> San Francisco, California
        </span>
      </section>
    </main>
  );
}
