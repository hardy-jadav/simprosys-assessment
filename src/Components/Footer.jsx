import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FOOTER_DATA = [
  {
    title: "Company Info",
    links: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  {
    title: "Legal",
    links: ["Terms of Service", "Privacy Policy", "Cookie Policy"],
  },
  {
    title: "Features",
    links: ["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"],
  },
  {
    title: "Resources",
    links: ["iOS & Android", "Watch a Demo", "Customers", "API"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Bandage</h2>
          <div className="flex gap-5 text-blue-500 text-xl">
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, index) => (
              <Icon key={index} className="cursor-pointer hover:text-blue-700 transition-all hover:scale-110" />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 text-sm">
          
          {FOOTER_DATA.map((column, idx) => (
            <div key={idx} className="lg:col-span-1">
              <h3 className="font-bold mb-5 text-gray-800 uppercase tracking-wide">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link} className="font-semibold text-gray-500 cursor-pointer hover:text-blue-500 transition-colors">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="font-bold mb-5 text-gray-800 uppercase tracking-wide">Get In Touch</h3>
            <div className="flex max-w-sm rounded overflow-hidden border border-gray-200 focus-within:ring-1 ring-blue-400 transition-all">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 w-full outline-none bg-gray-50 text-gray-700 text-sm"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 transition-colors text-xs font-semibold shrink-0">
                Subscribe
              </button>
            </div>
            <p className="text-xs mt-3 text-gray-400 italic">Lore imp sum dolor Amit</p>
          </div>

        </div>
      </div>

      <div className="bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          <p className="font-bold text-sm text-gray-400 tracking-tight">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}