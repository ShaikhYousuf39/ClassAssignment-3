export default function MenuSection() {
  return (
    <section className="menu-section py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Our Menu</h2>

      <div className="categories flex justify-center gap-6 mb-8">
        <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-teal-500 hover:text-white transition-colors duration-300">
          All
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-teal-500 hover:text-white transition-colors duration-300">
          Pizza
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-teal-500 hover:text-white transition-colors duration-300">
          Burgers
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-teal-500 hover:text-white transition-colors duration-300">
          Sushi
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-teal-500 hover:text-white transition-colors duration-300">
          Desserts
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        <div className="menu-item bg-gray-50 shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Pepperoni Pizza</h3>
            <p className="text-gray-600 mb-4">
              Classic pizza topped with spicy pepperoni and mozzarella.
            </p>
            <span className="font-bold text-teal-500">$12.99</span>
          </div>
        </div>

        <div className="menu-item bg-gray-50 shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Salmon Sushi</h3>
            <p className="text-gray-600 mb-4">
              Fresh salmon sushi rolls served with wasabi and soy sauce.
            </p>
            <span className="font-bold text-teal-500">$15.49</span>
          </div>
        </div>

        <div className="menu-item bg-gray-50 shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Cheeseburger</h3>
            <p className="text-gray-600 mb-4">
              Juicy beef patty topped with melted cheese, lettuce, and tomato.
            </p>
            <span className="font-bold text-teal-500">$9.99</span>
          </div>
        </div>
      </div>
    </section>
  );
}
