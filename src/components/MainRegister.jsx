export default function MainRegister() {
  return (
    <main className="relative flex flex-col items-center my-16">
      <form
        action=""
        className="flex flex-col w-1/3 gap-6 text-xl rounded-lg shadow-lg"
      >
        <span className="flex gap-6">
          <span className="flex flex-col w-full">
            <label className="font-bold text-red-500" htmlFor="">
              First Name
            </label>
            <input
              className="p-2 pl-6 mt-2 rounded-full outline-none"
              type="text"
              name=""
              id=""
              required
            />
          </span>
          <span className="flex flex-col w-full">
            <label className="font-bold text-red-500" htmlFor="">
              Last Name
            </label>
            <input
              className="p-2 pl-6 mt-2 rounded-full outline-none"
              type="text"
              name=""
              id=""
              required
            />
          </span>
        </span>
        <span className="flex flex-col w-full">
          <label className="font-bold text-red-500" htmlFor="">
            Email
          </label>
          <input
            required
            className="p-2 pl-6 mt-2 rounded-full outline-none"
            type="email"
            name=""
            id=""
          />
        </span>
        <span className="flex flex-col w-full">
          <label className="font-bold text-red-500" htmlFor="">
            Country
          </label>
          <select
            required
            name=""
            id=""
            className="p-2 pl-6 mt-2 rounded-full outline-none cursor-pointer"
          >
            <option value="" disabled selected>
              Select your country
            </option>
            <option value="argentina">Argentina</option>
            <option value="brazil">Brazil</option>
            <option value="chile">Chile</option>
            <option value="colombia">Colombia</option>
            <option value="peru">Peru</option>
            <option value="uruguay">Uruguay</option>
          </select>
        </span>
        <span id="type" className="text-white">
          <label className="font-bold text-red-500" htmlFor="general">
            Registration Type
          </label>
          <br />
          <span className="flex items-center gap-6 mt-2">
            <span className="flex items-center gap-2">
              <input type="radio" name="type" id="general" checked />
              <label htmlFor="general">General</label>
            </span>
            <span className="flex items-center gap-2">
              <input type="radio" name="type" id="student" />
              <label htmlFor="student">Student</label>
            </span>
          </span>
        </span>
        <button
          type="submit"
          className="py-3 text-xl font-bold text-black transition-all duration-300 bg-white rounded-full cursor-pointer hover:bg-red-600 hover:text-white hover:shadow-slate-400/50 hover:shadow-md"
        >
          Register Now
        </button>
        <span>
          Need assistance?{" "}
          <a href="mailto:">Contact us at info@conference.org</a>
        </span>
      </form>
    </main>
  );
}
