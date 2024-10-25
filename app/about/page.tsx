export default function AboutSection() {
    return (
      <section className="about-section py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">About Us</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg text-gray-700">
          At QuickBite, we believe that great food should be accessible to everyone. Our mission is to deliver delicious meals from your favorite local restaurants right to your doorstep. We partner with a diverse range of eateries to provide you with a wide selection of cuisines, ensuring that there’s something for everyone.
        </p>
        <p className="max-w-2xl mx-auto mb-6 text-lg text-gray-700">
          Our team is dedicated to making your food delivery experience as seamless as possible. With a user-friendly app and fast delivery times, we’re here to satisfy your cravings without the hassle. Join us on our journey to bring good food to good people!
        </p>
  
        <h3 className="text-2xl font-bold mt-10">Our Values</h3>
        <ul className="list-disc list-inside mt-4 max-w-md mx-auto text-left">
          <li className="mb-2">Quality: We partner with only the best restaurants to ensure top-notch food quality.</li>
          <li className="mb-2">Speed: Our delivery team is committed to getting your food to you quickly and efficiently.</li>
          <li className="mb-2">Customer Satisfaction: Your happiness is our priority. We strive to provide excellent service.</li>
          <li className="mb-2">Community: Supporting local businesses and fostering community connections is at our core.</li>
        </ul>
      </section>
    );
  }
  