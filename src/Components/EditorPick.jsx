export default function EditorsPick() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">EDITOR’S PICK</h2>
          <p className="text-gray-500 text-sm">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="relative overflow-hidden rounded aspect-3/4 md:aspect-auto md:col-span-2 md:row-span-2">
            <img
              src="/img/editorpick/editpic1.png"
              alt="men"
              className="w-full h-full object-cover object-top"
            />
            <button className="absolute bottom-4 left-4 bg-white px-6 py-2 text-sm font-semibold">
              MEN
            </button>
          </div>

          <div className="relative overflow-hidden rounded aspect-3/4 md:aspect-auto md:row-span-2">
            <img
              src="/img/editorpick/editpic2.png"
              alt="women"
              className="w-full h-full object-cover object-top"
            />
            <button className="absolute bottom-4 left-4 bg-white px-6 py-2 text-sm font-semibold">
              WOMEN
            </button>
          </div>

          <div className="grid grid-rows-2 gap-6 aspect-3/4 md:aspect-auto md:contents">
            <div className="relative overflow-hidden rounded">
              <img
                src="/img/editorpick/editpic3.png"
                alt="accessories"
                className="w-full h-full object-cover object-center"
              />
              <button className="absolute bottom-4 left-4 bg-white px-4 py-2 text-sm font-semibold">
                ACCESSORIES
              </button>
            </div>

            <div className="relative overflow-hidden rounded">
              <img
                src="/img/editorpick/editpic4.png"
                alt="kids"
                className="w-full h-full object-cover object-center"
              />
              <button className="absolute bottom-4 left-4 bg-white px-4 py-2 text-sm font-semibold">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
