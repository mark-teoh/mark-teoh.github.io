import Nav from '../component/nav/Nav'

const ContactPage = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="max-w-xl mx-auto mt-10 p-6 bg-stone-100 text-stone-800 shadow-md rounded-2xl">
        <h1 className="text-2xl font-semibold mb-6">Contact Me</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 rounded-md bg-stone-200 text-stone-800 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 rounded-md bg-stone-200 text-stone-800 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full p-2 rounded-md bg-stone-200 text-stone-800 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </main>
    </>
  )
}

export default ContactPage
