"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { HeroInput } from "@/myComponents/heroInput"; // Assure-toi que le chemin d'import est correct
import { SignupForm } from "@/myComponents/signForm";
import { motion } from "framer-motion";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [stack, setStack] = useState(null);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/generate-stack", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      const parsedStack = JSON.parse(data.stack);
      setStack(parsedStack);
    } catch (error) {
      setError("Erreur lors de la génération de la stack");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (e) => {
    console.log(prompt);
    setPrompt(e.target.value);
  };

  return (
    <div className="flex flex-col px-2">
      <HeroInput
        onChange={handleChange} // Passe la valeur de l'input au state 'prompt'
        onSubmit={handleSubmit} // Soumet le formulaire
      />

      {loading ? (
        <p className="loading self-center loading-spinner loading-xl"></p>
      ) : null}
      <button
        onClick={openModal}
        className="cursor-pointer self-center px-4 w-fit py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
      >
        Sign up to save your stack
      </button>
      {isModalOpen ? (
        <motion.div
          className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-50 z-50"
          initial={{ opacity: 0 }} // Initial state: modal invisible
          animate={{ opacity: 1 }} // Animate to full opacity when modal is open
          exit={{ opacity: 0 }} // Animate to invisible when modal is closed
          transition={{ duration: 0.3 }}
        >
          
          <SignupForm closeModal={closeModal} />
        </motion.div>
      ) : null}

      {stack && (
        <div className="space-y-8 p-4 flex flex-col">
          {/* Front-end Section */}
          <div className="bg-white border-2 border-gray-300 p-6 rounded-lg shadow-lg">
            <p className="text-2xl font-semibold mb-4">Front-end</p>
            <ul>
              <li>
                <strong>Framework:</strong> {stack.front_end.framework}
              </li>
              <li>
                <strong>State Management:</strong>{" "}
                {stack.front_end.state_management}
              </li>
              <li>
                <strong>Styling:</strong> {stack.front_end.styling}
              </li>
              <li>
                <strong>Mapping:</strong> {stack.front_end.mapping}
              </li>
              <li>
                <strong>Additional Libraries:</strong>{" "}
                {stack.front_end.additional_libraries.join(", ")}
              </li>
              <li>
                <strong>Explanation:</strong> {stack.front_end.explanation}
              </li>
              <li>
                <strong>Alternative:</strong> {stack.front_end.alternative}
              </li>
              <li>
                <strong>Alternative Explanation:</strong>{" "}
                {stack.front_end.alternative_explanation}
              </li>
            </ul>
          </div>

          {/* Back-end Section */}
          <div className="bg-white border-2 border-gray-300 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Back-end</h3>
            <ul>
              <li>
                <strong>Framework:</strong> {stack.back_end.framework}
              </li>
              <li>
                <strong>Web Framework:</strong> {stack.back_end.web_framework}
              </li>
              <li>
                <strong>Authentication:</strong> {stack.back_end.authentication}
              </li>
              <li>
                <strong>Real-time:</strong> {stack.back_end.real_time}
              </li>
              <li>
                <strong>Additional Services:</strong>{" "}
                {stack.back_end.additional_services.join(", ")}
              </li>
              <li>
                <strong>Explanation:</strong> {stack.back_end.explanation}
              </li>
              <li>
                <strong>Alternative:</strong> {stack.back_end.alternative}
              </li>
              <li>
                <strong>Alternative Explanation:</strong>{" "}
                {stack.back_end.alternative_explanation}
              </li>
            </ul>
          </div>

          {/* Database Section */}
          <div className="bg-white border-2 border-gray-300 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Database</h3>
            <ul>
              <li>
                <strong>Type:</strong> {stack.database.type}
              </li>
              <li>
                <strong>Database:</strong> {stack.database.database}
              </li>
              <li>
                <strong>Cloud Service:</strong> {stack.database.cloud_service}
              </li>
              <li>
                <strong>Explanation:</strong> {stack.database.explanation}
              </li>
              <li>
                <strong>Alternative:</strong> {stack.database.alternative}
              </li>
              <li>
                <strong>Alternative Explanation:</strong>{" "}
                {stack.database.alternative_explanation}
              </li>
            </ul>
          </div>

          {/* Additional Features Section */}
          <div className="bg-white border-2 border-gray-300 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Additional Features</h3>
            <ul>
              {stack.additional_features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
