"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Star, Home } from 'lucide-react';

const assetMap = [
  { id: 'hero-image', url: 'https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Colorful pink crust pizza with vegetables and herbs on a wooden platter. Perfect for food lovers.' },
  { id: 'about-image', url: 'https://images.pexels.com/photos/19130050/pexels-photo-19130050.png?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Tantalizing selection of gourmet pizzas with fresh toppings in Mexico City\'s vibrant dining scene.' },
  { id: 'product-image1', url: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A mouthwatering slice of pepperoni pizza with cheese and spices, ideal for any meal.' },
  { id: 'product-image2', url: 'https://images.pexels.com/photos/5848245/pexels-photo-5848245.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Delicious gourmet pizza in an open cardboard box, shot from above for a classic flat lay presentation.' },
  { id: 'product-image3', url: 'https://images.pexels.com/photos/6605245/pexels-photo-6605245.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Overhead view of friends sharing pizza and beer at a table indoors in a casual setting.' },
  { id: 'contact-image', url: 'https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Two vintage black telephone handsets connected by cords on gray background.' }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Pizzeria"
          logoSrc="/assets/logo.png"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-pink-100 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Welcome to Our Pizzeria"
            description="Experience the best pizza in town."
            imageSrc={assetMap.find(a => a.id === 'hero-image')?.url}
            imageAlt="Freshly baked pizza"
            buttons={[
              { text: "View Menu", href: "menu" },
              { text: "Contact Us", href: "contact" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-pink-100 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Authentic Italian Pizzeria in the Heart of the City"
            buttons={[
              { text: "Learn More", href: "about" }
            ]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24 bg-pink-100 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            features={[
              { title: "Quality Ingredients", description: "Only the freshest and finest ingredients.", icon: Star },
              { title: "Cozy Ambience", description: "Experience a warm and inviting atmosphere.", icon: Home }
            ]}
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24 bg-pink-100 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardTwo
            products={[
              {
                id: "1",
                brand: "Gourmet Pizzas",
                name: "Pepperoni Pizza",
                price: "$12.99",
                rating: 5,
                reviewCount: "1.2k",
                imageSrc: assetMap.find(a => a.id === 'product-image1')?.url
              },
              {
                id: "2",
                brand: "Gourmet Pizzas",
                name: "Vegetarian Pizza",
                price: "$11.99",
                rating: 4.5,
                reviewCount: "850",
                imageSrc: assetMap.find(a => a.id === 'product-image2')?.url
              },
              {
                id: "3",
                brand: "Gourmet Pizzas",
                name: "Margherita Pizza",
                price: "$10.99",
                rating: 4,
                reviewCount: "630",
                imageSrc: assetMap.find(a => a.id === 'product-image3')?.url
              }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-pink-100 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Join Us"
            title="Get In Touch"
            description="For reservations or inquiries, contact us anytime."
            imageSrc={assetMap.find(a => a.id === 'contact-image')?.url}
            inputPlaceholder="Your email address"
            buttonText="Send"
            termsText="We respect your privacy."
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-pink-100 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [ { label: "Home", href: "home" }, { label: "Menu", href: "menu" }, { label: "About Us", href: "about" } ] },
              { items: [ { label: "Contact", href: "contact" }, { label: "Privacy Policy", href: "privacy" } ] }
            ]}
            logoText="Pizzeria"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
