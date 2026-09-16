import React, { useState } from 'react';
import { PlanId } from './types';
import { TopBanner } from './components/TopBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { AiPromptSimulator } from './components/AiPromptSimulator';
import { ModulesSection } from './components/ModulesSection';
import { BonusesSection } from './components/BonusesSection';
import { PricingSection } from './components/PricingSection';
import { ComparisonTable } from './components/ComparisonTable';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { CheckoutModal } from './components/CheckoutModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedPlanForCheckout, setSelectedPlanForCheckout] = useState<PlanId | null>(null);

  const handleOpenCheckout = (planId: PlanId) => {
    setSelectedPlanForCheckout(planId);
  };

  const handleCloseCheckout = () => {
    setSelectedPlanForCheckout(null);
  };

  const scrollToPricing = () => {
    const el = document.getElementById('planos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSimulator = () => {
    const el = document.getElementById('simulador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Urgency Top Notification Banner */}
      <TopBanner />

      {/* Main Sticky Navbar */}
      <Navbar onSelectPlan={handleOpenCheckout} />

      {/* Main Sales Funnel Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onScrollToPricing={scrollToPricing} 
          onScrollToSimulator={scrollToSimulator} 
        />

        {/* Empathy & Routine Transformation */}
        <PainPoints 
          onScrollToPricing={scrollToPricing} 
        />

        {/* Interactive Prompt Simulator */}
        <AiPromptSimulator 
          onScrollToPricing={scrollToPricing} 
        />

        {/* Course Modules Breakdown */}
        <ModulesSection 
          onScrollToPricing={scrollToPricing} 
        />

        {/* Exclusive Bonuses Stack */}
        <BonusesSection 
          onScrollToPricing={scrollToPricing} 
        />

        {/* Packages & Pricing (Bronze, Prata, Ouro) */}
        <PricingSection 
          onSelectPlan={handleOpenCheckout} 
        />

        {/* Side-by-Side Comparison Matrix */}
        <ComparisonTable 
          onSelectPlan={handleOpenCheckout} 
        />

        {/* Social Proof & Testimonials */}
        <TestimonialsSection />

        {/* 7-Day Unconditional Guarantee */}
        <GuaranteeSection 
          onScrollToPricing={scrollToPricing} 
        />

        {/* Frequently Asked Questions (FAQ) */}
        <FaqSection />
      </main>

      {/* Interactive Checkout Simulation Modal */}
      {selectedPlanForCheckout && (
        <CheckoutModal
          planId={selectedPlanForCheckout}
          onClose={handleCloseCheckout}
        />
      )}

      {/* Floating Support Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </div>
  );
}

