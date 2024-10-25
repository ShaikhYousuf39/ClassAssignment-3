export default function Home() {
  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-white text-gray-800 shadow-md">
        <div className="text-2xl font-bold">QuickBite</div>
        <ul className="flex gap-6">
          <li>
            <a
              href="/about"
              className="text-gray-800 text-base hover:text-teal-500 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="text-gray-800 text-base hover:text-teal-500 transition-colors duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-gray-800 text-base hover:text-teal-500 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="flex gap-4">
          <a
            href="/menu"
            className="px-4 py-2 border border-teal-500 text-teal-500 rounded-md hover:bg-teal-500 hover:text-white transition-colors duration-300"
          >
            Menu
          </a>
          <a
            href="/order"
            className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors duration-300"
          >
            Order
          </a>
        </div>
      </nav>
      <section className="hero h-screen bg-white text-gray-800">
        <div className="flex flex-col items-center justify-center h-full px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Delicious Meals, Delivered Fast!
          </h1>
          <p className="text-lg mb-8">
            Order from your favorite restaurants and get it delivered to your
            door.
          </p>
          <a
            href="/menu"
            className="px-6 py-4 bg-gray-700 hover:bg-gray-800 text-white rounded-lg text-lg font-semibold"
          >
            Explore Menu
          </a>
        </div>
      </section>
      <section className="featured-restaurants py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Popular Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <div className="bg-gray-50 shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Pizza Palace</h3>
              <p className="text-gray-600">
                Indulge in the best pizzas in town, made with fresh ingredients.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Sushi Delight</h3>
              <p className="text-gray-600">
                Enjoy authentic sushi with a modern twist.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Burger Haven</h3>
              <p className="text-gray-600">
                Serving juicy burgers with unique flavors for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="flex flex-wrap justify-center gap-12 px-6">
          <div className="text-center w-72">
            <div className="text-4xl text-teal-500 mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">Browse</h3>
            <p className="text-gray-600">
              Choose from a wide variety of restaurants and dishes.
            </p>
          </div>
          <div className="text-center w-72">
            <div className="text-4xl text-teal-500 mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">Order</h3>
            <p className="text-gray-600">
              Place your order with a few easy clicks.
            </p>
          </div>
          <div className="text-center w-72">
            <div className="text-4xl text-teal-500 mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">Enjoy</h3>
            <p className="text-gray-600">
              Relax and enjoy your meal delivered to your door.
            </p>
          </div>
        </div>
      </section>
      <section className="testimonials py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Happy Customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <div className="bg-gray-50 shadow-lg rounded-lg p-6">
            <p className="italic text-gray-700 mb-4">
              The delivery was super quick, and the food was still hot and
              fresh!
            </p>
            <h4 className="font-semibold">- Talha Khan</h4>
          </div>
          <div className="bg-gray-50 shadow-lg rounded-lg p-6">
            <p className="italic text-gray-700 mb-4">
              Fantastic service and delicious meals every time I order.
            </p>
            <h4 className="font-semibold">- Moiz Hassan</h4>
          </div>
          <div className="bg-gray-50 shadow-lg rounded-lg p-6">
            <p className="italic text-gray-700 mb-4">
              Great variety and super convenient when I don’t have time to cook.
            </p>
            <h4 className="font-semibold">- Ahmed Shaikh</h4>
          </div>
        </div>
      </section>

      <footer className="footer py-10 bg-gray-50 text-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">QuickBite</h3>
            <p className="text-gray-600">
              Delicious meals delivered fast to your door.
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <p className="text-base text-gray-600">
              Made By Shaikh Yousuf.
            </p>
          </div>
          <ul className="flex gap-6 mb-6 md:mb-0">
            <li>
              <a href="/menu" className="hover:text-teal-500">
                Menu
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-teal-500">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-teal-500">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-teal-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
