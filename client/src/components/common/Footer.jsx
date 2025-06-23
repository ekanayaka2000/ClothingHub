import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import ClothingHubFooter from "../../assets/ClothingHubFooter.jpg";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            src={ClothingHubFooter}
            alt="Clothing Hub Footer"
            className="w-40 h-40 object-contain"
          />
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <MapPin className="text-white" />
            <div>
              <p className="text-sm">21 Revolution Street</p>
              <p className="font-bold">Paris, France</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-white" />
            <p className="font-bold">+1 555 123456</p>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-white" />
            <a
              href="mailto:support@company.com"
              className="text-blue-400 font-bold hover:underline"
            >
              support@company.com
            </a>
          </div>
        </div>

        {/* About Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">About the company</h2>
          <p className="text-gray-400 text-sm mb-4 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>
          <div className="flex gap-3">
            <a href="#" className="bg-gray-700 p-2 rounded hover:bg-gray-600">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded hover:bg-gray-600">
              <FaTwitter />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded hover:bg-gray-600">
              <FaLinkedinIn />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded hover:bg-gray-600">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
