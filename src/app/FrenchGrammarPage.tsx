"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { getTitleAnimation, getSlideUpAnimation, getScaleInAnimation, getStaggerAnimation } from "./animations";

const GRAMMAR_SECTIONS = [
  {
    id: "future-proche",
    title: "Future proche",
    description: "The name says it all, it's the near (proche) future.",
    examples: [
      { french: "Je vais lire", english: "I am going to read" },
      { french: "Il va aller chez moi", english: "He is going to go to my house" },
      { french: "Nous allons manger", english: "We are going to eat" }
    ],
    color: "blue"
  },
  {
    id: "future-simple",
    title: "Future simple",
    description: "The name still says it all; it's the simple (simple) future.",
    examples: [
      { french: "J'irai à l'université", english: "I will go to college" },
      { french: "Ils écriront des examens", english: "They (masculine/mixed) will write exams" },
      { french: "Tu ne mourras pas", english: "You will not die" }
    ],
    color: "mauve"
  },
  {
    id: "differences",
    title: "Differences",
    summary: "Future simple is for distant future plans and predictions, while future proche is for near future actions.",
    description: "You use future simple when you want to talk about plans or intentions, and to make predictions about what may happen in the future. It's just like in english, you use `I will...` when you want to talk about the distant future in plans/predictions and `I am going to...` when you want to talk about the near future (this is why we use `aller` for future proche).",
    examples: [],
    color: "green"
  }
];

const ATTRACTION_SECTION = {
  title: "Le Tapis Magique",
  description: "Dans cette attraction, il y a deux écrans géants: l'un en face de vous l'autre sous vos pieds. Dans le film, vous suivrez des papillons monarque qui partent de l'Amérique du Nord pour arriver au Mexique. Vous aurez l'impression de survoler la Terre.",
  english: "It's just a movie that has a screen in front of you and a screen on the floor and you see the some monarch butterflies fly from North America to Mexico and feel like you're flying over earth.",
  color: "peach"
};

export default function FrenchGrammarPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showAttraction, setShowAttraction] = useState(false);

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "bg-blue text-crust",
      mauve: "bg-mauve text-crust",
      green: "bg-green text-crust",
      peach: "bg-peach text-crust",
      pink: "bg-pink text-crust",
      lavender: "bg-lavender text-crust",
      teal: "bg-teal text-crust",
      sapphire: "bg-sapphire text-crust",
      rosewater: "bg-rosewater text-crust",
      flamingo: "bg-flamingo text-crust",
      red: "bg-red text-crust",
      maroon: "bg-maroon text-crust",
      yellow: "bg-yellow text-crust",
      sky: "bg-sky text-crust"
    };
    return colorMap[color] || "bg-surface1 text-text";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base via-mantle to-crust text-text">
      {/* Header */}
      <motion.header
        className="text-center py-16 px-6 bg-gradient-to-r from-mauve/10 via-pink/10 to-lavender/10 rounded-3xl mx-6 mb-8"
        {...getTitleAnimation()}
      >
        <h2 className="text-5xl md:text-7xl font-bold text-mauve mb-6">
          Future Proche vs Future Simple
        </h2>
      </motion.header>


      {/* Grammar Sections */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          {...getStaggerAnimation(0, 0.2)}
        >
          {GRAMMAR_SECTIONS.map((section, index) => (
            <motion.div
              key={section.id}
              className={`${getColorClasses(section.color)} rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-white/20`}
              onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h2 className="text-2xl font-bold mb-3">{section.title}</h2>
              <p className="text-sm opacity-90 mb-4">
                {section.summary || section.description}
              </p>
              <div className="mt-4 text-sm font-medium">
                {activeSection === section.id ? "Click to collapse" : "Click to expand"}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Expanded Section */}
      <AnimatePresence>
        {activeSection && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="max-w-4xl mx-auto px-6 py-8"
          >
            {(() => {
              const section = GRAMMAR_SECTIONS.find(s => s.id === activeSection);
              if (!section) return null;

              return (
                <motion.div
                  className={`${getColorClasses(section.color)} rounded-xl p-8 border-2 border-white/10 shadow-2xl`}
                  {...getScaleInAnimation()}
                >
                  <h3 className="text-3xl font-bold mb-4">{section.title}</h3>
                  <p className="text-lg mb-6 opacity-90">{section.description}</p>

                  {section.examples.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold">Examples:</h4>
                      {section.examples.map((example, i) => (
                        <motion.div
                          key={i}
                          className="bg-gradient-to-r from-crust/30 to-surface0/30 rounded-lg p-4 border border-white/10 backdrop-blur-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="font-semibold text-lg mb-1">{example.french}</div>
                          <div className="opacity-80">{example.english}</div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })()}
          </motion.section>
        )}
      </AnimatePresence>

      {/* Cultural Section */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-12"
        {...getSlideUpAnimation(0.4)}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            className={`${getColorClasses(ATTRACTION_SECTION.color)} rounded-xl p-8 cursor-pointer transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-white/20 shadow-2xl`}
            onClick={() => setShowAttraction(!showAttraction)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h2 className="text-3xl font-bold mb-4">{ATTRACTION_SECTION.title}</h2>
            <p className="text-lg mb-4 opacity-90">{ATTRACTION_SECTION.description}</p>
            <div className="text-sm font-medium">
              {showAttraction ? "Click to hide English translation" : "Click to see English translation"}
            </div>
          </motion.div>

          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Futuroscope_Tapis_Magique.JPG/1280px-Futuroscope_Tapis_Magique.JPG"
              alt="Futuroscope Tapis Magique attraction"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <AnimatePresence>
          {showAttraction && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 bg-gradient-to-r from-surface1/80 to-surface0/80 rounded-xl p-6 border border-white/10 backdrop-blur-sm shadow-xl"
            >
              <h3 className="text-xl font-semibold text-peach mb-3">English Translation:</h3>
              <p className="text-text">{ATTRACTION_SECTION.english}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

    </div>
  );
}
