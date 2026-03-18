import { FaRegComments, FaRegCalendarAlt } from "react-icons/fa";

const posts = [
  {
    id: 1,
    title: "Loudest à la Madison #1 (L'integral)",
    desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    img: "/img/featurepost/featurepost1.png",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 2,
    title: "Loudest à la Madison #1 (L'integral)",
    desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    img: "/img/featurepost/featurepost2.png",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 3,
    title: "Loudest à la Madison #1 (L'integral)",
    desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    img: "/img/featurepost/featurepost3.png",
    date: "22 April 2021",
    comments: 10,
  },
];

export default function Feature() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-blue-500 text-sm font-semibold mb-2">
            Practice Advice
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Featured Posts
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white transition shadow-sm rounded pb-5"
            >
              <div className="relative overflow-hidden rounded">
                <img
                  src={post.img}
                  alt="post"
                  className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                />
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  NEW
                </span>
              </div>

              <div className="mt-4 px-2">
                <p className="text-xs text-gray-400 mb-2">
                  Google • Trending • New
                </p>
                <h3 className="font-semibold text-base mb-2 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{post.desc}</p>
                <div className="flex justify-between items-center text-xs text-[#737373] mb-4">
                  <div className="flex items-center gap-2 group cursor-default">
                    <FaRegCalendarAlt className="text-[#23A6F0] drop-shadow-[0_0_5px_rgba(35,166,240,0.4)]" />
                    <span className="group-hover:text-[#252B42] transition-colors">
                      {post.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 group cursor-default">
                    <FaRegComments className="text-[#23856D] drop-shadow-[0_0_5px_rgba(35,133,109,0.4)]" />
                    <span className="group-hover:text-[#252B42] transition-colors">
                      {post.comments} comments
                    </span>
                  </div>
                </div>
                <button className="text-blue-500 text-sm font-medium hover:underline">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
