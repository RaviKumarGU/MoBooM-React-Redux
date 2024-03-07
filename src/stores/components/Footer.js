import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="mb-4 w-full md:mb-0 md:w-1/3">
          <h3 className="text-lg font-bold">Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="mb-4 w-full md:mb-0 md:w-1/3">
          <h3 className="text-lg font-bold">Follow Us</h3>
          <div className="mt-2 flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              <FaFacebook />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-bold">Newsletter</h3>
          <p>Subscribe to our newsletter for updates.</p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-md bg-gray-700 px-4 py-2 text-white"
            />
            <button
              type="submit"
              className="mt-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 Your E-Commerce Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
