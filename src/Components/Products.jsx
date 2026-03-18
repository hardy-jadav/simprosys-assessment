const products = [
  {
    id: 1,
    img: "/img/bestseller/bs-img1.png",
    title: "Graphic Design",
    dept: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 2,
    img: "/img/bestseller/bs-img2.png",
    title: "Graphic Design",
    dept: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 3,
    img: "/img/bestseller/bs-img3.png",
    title: "Graphic Design",
    dept: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 4,
    img: "/img/bestseller/bs-img4.png",
    title: "Graphic Design",
    dept: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 5,
    img: "/img/bestseller/bs-img5.png",
    title: "Graphic Design",
    dept: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 6,
    img: "/img/bestseller/bs-img6.png",
    title: "Graphic Design",
    dept: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 7,
    img: "/img/bestseller/bs-img7.png",
    title: "Graphic Design",
    dept: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 8,
    img: "/img/bestseller/bs-img8.png",
    title: "Graphic Design",
    dept: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
];

export default function Products() {
  return (
    <section className="bg-gray-100 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center mb-10">
        <p className="text-sm text-gray-500 mb-2">Featured Products</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-gray-400 text-sm max-w-xs mx-auto md:max-w-none">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Increased gap from 2 to 6 or 8 for better breathing room on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          {products.map((item) => (
            <div key={item.id} className="group flex flex-col items-center text-center">
              
              <div className="w-full overflow-hidden aspect-3/4 bg-gray-200">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-3 font-semibold text-sm text-gray-800">
                {item.title}
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                {item.dept}
              </p>

              <div className="flex justify-center gap-2 mt-2 text-sm">
                <span className="text-gray-400 line-through">
                  {item.oldPrice}
                </span>
                <span className="text-green-600 font-bold">
                  {item.newPrice}
                </span>
              </div>

              <div className="flex justify-center gap-2 mt-3">
                <span className="w-3 h-3 bg-blue-400 rounded-full cursor-pointer"></span>
                <span className="w-3 h-3 bg-green-400 rounded-full cursor-pointer"></span>
                <span className="w-3 h-3 bg-red-400 rounded-full cursor-pointer"></span>
                <span className="w-3 h-3 bg-black rounded-full cursor-pointer"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}