export default function LegalPage() {
    return (
      <div className="min-h-screen">
        {/* Hero simple */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center">Mentions légales</h1>
          </div>
        </section>
  
        {/* Contenu */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl prose prose-red">
            <h2>Informations légales</h2>
            <p><strong>Nom de l'entreprise :</strong> Mission Possible TN</p>
            <p><strong>Forme juridique :</strong> SARL</p>
            <p><strong>Capital social :</strong> 50 000 TND</p>
            <p><strong>Adresse :</strong> 20 Rue de la Réparation, 1080 Tunis</p>
            <p><strong>Téléphone :</strong> 71 234 567</p>
            <p><strong>Email :</strong> contact@missionpossible.tn</p>
            <p><strong>RCS :</strong> Tunis B 123 456 789</p>
            <p><strong>Numéro TVA :</strong> FR12345678901</p>
  
            <h2>Hébergement</h2>
            <p>Notre site est hébergé par :</p>
            <p><strong>Nom :</strong> Votre Hébergeur</p>
            <p><strong>Adresse :</strong> 123 Rue de l'Hébergement, Paris</p>
            <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
  
            <h2>Protection des données</h2>
            <p>
              Conformément au règlement RGPD, vous disposez d'un droit d'accès, 
              de rectification et de suppression de vos données personnelles. 
              Pour exercer ce droit, contactez-nous à l'adresse email suivante : 
              privacy@missionpossible.tn
            </p>
  
            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, vidéos, logo) 
              est la propriété exclusive de Mission Possible TN. Toute reproduction 
              sans autorisation est interdite.
            </p>
  
            <h2>Cookies</h2>
            <p>
              Notre site utilise des cookies pour améliorer l'expérience utilisateur. 
              Vous pouvez les désactiver dans les paramètres de votre navigateur.
            </p>
          </div>
        </section>
      </div>
    );
  }