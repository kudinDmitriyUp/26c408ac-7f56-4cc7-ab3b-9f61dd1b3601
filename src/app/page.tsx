"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { MessageSquare, Star } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="dotGrid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Grand Vista Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Grand Vista Hotel"
          description="Experience unparalleled luxury and exceptional hospitality in the heart of the city"
          buttons={[
            {
              text: "Book Your Stay",
              href: "contact"
            },
            {
              text: "Explore Amenities",
              href: "feature"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763411271678-5i5ro529.jpg"
          imageAlt="Elegant hotel lobby with luxury interior design"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Legacy"
          description={[
            "For over three decades, Grand Vista Hotel has been synonymous with luxury, comfort, and exceptional service. Located in the heart of the city, we offer a perfect blend of modern amenities and timeless elegance.",
            "Our dedicated team of hospitality professionals ensures every guest experiences the highest standards of comfort and personalized service that has made us a preferred destination for discerning travelers."
          ]}
          buttons={[
            {
              text: "Our Story",
              href: "about"
            }
          ]}
          showBorder={false}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Premium Amenities"
          description="Discover world-class facilities designed for your comfort and convenience"
          tag="Facilities"
          tagIcon={Star}
          features={[
            {
              id: "01",
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your senses at our award-winning spa featuring therapeutic treatments and state-of-the-art wellness facilities",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763411273143-evp4nfvw.jpg",
              imageAlt: "Luxury hotel spa and wellness center"
            },
            {
              id: "02",
              title: "Fine Dining Restaurant",
              description: "Experience culinary excellence at our signature restaurant, offering gourmet cuisine crafted by world-renowned chefs",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763411273851-zna23zv5.jpg",
              imageAlt: "Hotel fine dining restaurant"
            },
            {
              id: "03",
              title: "Infinity Pool & Terrace",
              description: "Relax by our stunning rooftop infinity pool with panoramic city views and premium poolside service",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763411274602-bkwbrc75.jpg",
              imageAlt: "Hotel infinity pool with city views"
            },
            {
              id: "04",
              title: "Fitness & Recreation",
              description: "Stay active in our fully-equipped fitness center with personal training services and modern exercise equipment",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763411275369-v9ermwgm.jpg",
              imageAlt: "Hotel fitness center and gym"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted Hospitality Partners"
          description="Proudly affiliated with the world's leading hotel brands and hospitality networks"
          tag="Partners"
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763411278966-h8jjj619.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763411279656-ahposcz2.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763411280463-0nq7movj.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763411281112-54bu074r.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763411281975-b2wdwpy4.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763411282518-h4ut213d.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763411283020-i8aqrerc.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Experience the exceptional service that keeps our guests coming back"
          tag="Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "CEO, Tech Solutions Inc.",
              testimonial: "Exceptional service and attention to detail. The staff went above and beyond to ensure our corporate event was flawless. The facilities are world-class.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763411276146-2w68lj75.png",
              imageAlt: "Sarah Mitchell portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Travel Blogger",
              testimonial: "Grand Vista Hotel sets the gold standard for luxury hospitality. From the moment you arrive, every detail is perfectly orchestrated. Truly unforgettable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763411276830-lgni80yo.jpg",
              imageAlt: "Michael Chen portrait"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Wedding Planner",
              testimonial: "As a wedding planner, I've worked with many venues, but Grand Vista Hotel consistently delivers perfection. Their team makes magic happen.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763411277362-zihpeilj.png",
              imageAlt: "Emily Rodriguez portrait"
            },
            {
              id: "4",
              name: "James Thompson",
              role: "Business Executive",
              testimonial: "The perfect blend of luxury and functionality. Whether for business or leisure, Grand Vista Hotel exceeds expectations every time.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763411278219-1vz3c10j.jpg",
              imageAlt: "James Thompson portrait"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Reserve Your Stay"
          description="Contact our reservations team to book your perfect getaway or plan your next event with us."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            },
            {
              name: "dates",
              type: "text",
              placeholder: "Preferred Dates",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or additional information...",
            rows: 5,
            required: false
          }}
          buttonText="Send Inquiry"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763411283682-6mj0odqp.jpg"
          imageAlt="Hotel concierge at reception desk"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Grand Vista Hotel"
          columns={[
            {
              items: [
                {
                  label: "Reservations",
                  href: "contact"
                },
                {
                  label: "Our Amenities",
                  href: "feature"
                },
                {
                  label: "About Us",
                  href: "about"
                }
              ]
            },
            {
              items: [
                {
                  label: "Guest Services",
                  href: "contact"
                },
                {
                  label: "Event Planning",
                  href: "contact"
                },
                {
                  label: "Concierge",
                  href: "contact"
                }
              ]
            },
            {
              items: [
                {
                  label: "Dining",
                  href: "feature"
                },
                {
                  label: "Spa & Wellness",
                  href: "feature"
                },
                {
                  label: "Business Center",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}