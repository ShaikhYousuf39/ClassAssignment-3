export default function ServicesSection() {
    return (
      <section className="services-section py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          <div className="service-item bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Fast Delivery</h3>
            <p className="text-gray-700">
              Enjoy quick and reliable delivery right to your doorstep. Our team is dedicated to ensuring your food arrives hot and fresh!
            </p>
          </div>
  
          <div className="service-item bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Wide Selection</h3>
            <p className="text-gray-700">
              Choose from a diverse range of cuisines and dishes from local restaurants. There is something to satisfy every craving!
            </p>
          </div>
  
          <div className="service-item bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">User-Friendly App</h3>
            <p className="text-gray-700">
              Our easy-to-use app makes ordering food a breeze. Browse menus, customize your order, and track delivery in real-time.
            </p>
          </div>
  
          <div className="service-item bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Secure Payments</h3>
            <p className="text-gray-700">
              We offer a variety of secure payment options to ensure your information is safe while you enjoy your meal.
            </p>
          </div>
  
          <div className="service-item bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
            <p className="text-gray-700">
              Our friendly customer support team is here to assist you with any questions or concerns you may have.
            </p>
          </div>
  
          <div className="service-item bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Special Offers</h3>
            <p className="text-gray-700">
              Enjoy exclusive discounts and promotions on your favorite dishes. Sign up for our newsletter to stay updated!
            </p>
          </div>
        </div>
      </section>
    );
  }
  