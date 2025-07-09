import { CalendarDays, Clock, User } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';
export default function BlogPage() {
  const articles = [
    {
      title: "Comment prévenir les fuites d'eau en hiver",
      excerpt: "Découvrez nos conseils pour protéger vos canalisations des températures froides...",
      category: "Plomberie",
      date: "15 Nov 2023",
      readTime: "5 min",
      image: "/images/blog/blog.jpg"
    },
    // Ajoutez 5-6 articles supplémentaires...
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-black to-red-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            CONSEILS <span className="text-red-500">EXPERT</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Découvrez nos guides pratiques pour l'entretien de votre maison
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nos derniers articles"
            subtitle="Apprenez avec nos experts"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {articles.map((article, index) => (
              <article key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
                <div className="h-80 bg-gray-200 relative overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="flex items-center mr-4">
                      <CalendarDays className="mr-1" size={14} />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1" size={14} />
                      {article.readTime}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-4 py-2 border rounded-lg text-red-600 border-red-600 hover:bg-red-50">
                Précédent
              </button>
              {[1, 2, 3].map((num) => (
                <button 
                  key={num}
                  className={`px-4 py-2 border rounded-lg ${num === 1 ? 'bg-red-600 text-white border-red-600' : 'text-gray-600 border-gray-300 hover:bg-gray-50'}`}
                >
                  {num}
                </button>
              ))}
              <button className="px-4 py-2 border rounded-lg text-red-600 border-red-600 hover:bg-red-50">
                Suivant
              </button>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}