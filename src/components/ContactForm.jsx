export default function ContactForm() {
    return (
      <form className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <label className="block mb-2">Name</label>
        <input type="text" className="w-full p-2 border rounded mb-4" />
  
        <label className="block mb-2">Email</label>
        <input type="email" className="w-full p-2 border rounded mb-4" />
  
        <label className="block mb-2">Message</label>
        <textarea className="w-full p-2 border rounded mb-4" rows="4"></textarea>
  
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
      </form>
    );
  }
  