'use client';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const testimonials = [
  {
    name: "Mohamed T.",
    role: "Client particulier",
    text: "Intervention ultra-rapide pour une fuite d'eau à 2h du matin. Professionnels exceptionnels !",
    rating: 5
  },
  // Ajoute d'autres témoignages...
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          ILS NOUS ONT <span className="text-red-600">FAIT CONFIANCE</span>
        </h2>

        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          className="max-w-3xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-8 py-12 bg-white rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p className="text-lg italic mb-6">"{testimonial.text}"</p>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}