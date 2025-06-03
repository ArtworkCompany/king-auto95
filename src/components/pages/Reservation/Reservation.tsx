import {
  Bed,
  Car,
  ChevronRight,
  CircleCheck,
  HelpCircle,
  Sofa,
  Truck,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import Footer from "../Home/Footer";
import Header from "../Home/Header";

// Étape de réservation
type ReservationStep = 1 | 2 | 3 | 4 | 5;

// Type de véhicule
type VehicleType =
  | "citadine"
  | "berline"
  | "suv"
  | "monospace5"
  | "monospace7"
  | "canape_sans_angle"
  | "canape_avec_angle"
  | "tapis_matelas"
  | "utilitaire"
  | "demande_specifique"
  | null;

const Reservation = () => {
  const [currentStep, setCurrentStep] = useState<ReservationStep>(1);
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType>(null);
  const [licensePlate, setLicensePlate] = useState("");
  const [isDetecting, setIsDetecting] = useState(false);

  const handleVehicleSelect = (vehicle: VehicleType) => {
    setSelectedVehicle(vehicle);
  };

  // Fonction pour passer à l'étape suivante
  const goToNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => (prev + 1) as ReservationStep);
    }
  };

  const detectVehicleType = async (plate: string) => {
    if (!plate || plate.length < 4) return;

    setIsDetecting(true);

    // Simulation d'une API de détection (remplacer par une vraie API)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulation basée sur des patterns de plaques
    const plateUpper = plate.toUpperCase();
    let detectedType: VehicleType = null;

    // Simulation de détection basée sur des patterns fictifs
    if (plateUpper.includes("AA") || plateUpper.includes("AB")) {
      detectedType = "citadine";
    } else if (plateUpper.includes("AC") || plateUpper.includes("AD")) {
      detectedType = "berline";
    } else if (plateUpper.includes("AE") || plateUpper.includes("AF")) {
      detectedType = "suv";
    } else if (plateUpper.includes("AG") || plateUpper.includes("AH")) {
      detectedType = "monospace5";
    } else if (plateUpper.includes("AI") || plateUpper.includes("AJ")) {
      detectedType = "monospace7";
    } else if (plateUpper.includes("UT") || plateUpper.includes("VU")) {
      detectedType = "utilitaire";
    } else {
      // Détection aléatoire pour les autres cas
      const types: VehicleType[] = ["citadine", "berline", "suv", "monospace5"];
      detectedType = types[Math.floor(Math.random() * types.length)];
    }

    setSelectedVehicle(detectedType);
    setIsDetecting(false);
  };

  return (
    <div className="min-h-screen bg-black text-secondary">
      <Header isHome={false} />
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 via-indigo-900 to-blue-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-cyan-400/10"></div>
        <div className="container relative z-10 px-4 mx-auto lg:px-6">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 md:gap-4">
            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full ${
                    step === currentStep
                      ? "bg-cyan-300 text-blue-900 font-bold"
                      : "bg-blue-800 text-white border border-cyan-300/30"
                  }`}
                >
                  {step}
                </div>
                <div
                  className={`hidden md:block text-sm md:text-base ml-2 ${
                    step === currentStep
                      ? "text-cyan-300 font-semibold"
                      : "text-white/70"
                  }`}
                >
                  {step === 1 && "Choix du lavage"}
                  {step === 2 && "Choix du pack"}
                  {step === 3 && "Ajout d'options"}
                  {step === 4 && "Lieu"}
                  {step === 5 && "Paiement / Réservation"}
                </div>
                {step < 5 && (
                  <div className="w-4 h-px mx-1 md:w-8 bg-cyan-300/30 md:mx-3">
                    <span className="sr-only">Séparateur</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Étape 1: Choix du véhicule */}
          {currentStep === 1 && (
            <div className="max-w-5xl mx-auto">
              <div className="mb-10 text-center">
                <h1 className="mb-8 text-3xl font-bold text-white md:text-4xl">
                  Que veux-tu laver ?
                </h1>
                <div className="max-w-md mx-auto mb-10">
                  <div className="p-6 border-2 shadow-lg bg-gradient-to-br from-blue-800/80 via-indigo-800/60 to-blue-900/80 border-cyan-300/30 rounded-xl">
                    <h3 className="mb-4 text-lg font-semibold text-center text-white">
                      Détection automatique par plaque
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="licensePlate"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Plaque d'immatriculation
                        </label>
                        <input
                          type="text"
                          id="licensePlate"
                          value={licensePlate}
                          onChange={(e) =>
                            setLicensePlate(e.target.value.toUpperCase())
                          }
                          placeholder="Ex: AB-123-CD"
                          className="w-full px-4 py-3 text-white transition-all duration-300 border rounded-lg bg-blue-900/50 border-cyan-300/30 placeholder-white/50 focus:outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
                          maxLength={10}
                        />
                      </div>
                      <button
                        onClick={() => detectVehicleType(licensePlate)}
                        disabled={
                          !licensePlate ||
                          licensePlate.length < 4 ||
                          isDetecting
                        }
                        className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                          licensePlate &&
                          licensePlate.length >= 4 &&
                          !isDetecting
                            ? "bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-blue-900 shadow-lg shadow-cyan-400/25"
                            : "bg-blue-800/50 text-white/50 cursor-not-allowed"
                        }`}
                      >
                        {isDetecting ? (
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-4 h-4 border-2 rounded-full border-white/30 border-t-white animate-spin"></div>
                            <span>Détection en cours...</span>
                          </div>
                        ) : (
                          "Détecter mon véhicule"
                        )}
                      </button>
                    </div>
                    {selectedVehicle && licensePlate && (
                      <div className="p-3 mt-4 border rounded-lg bg-cyan-300/10 border-cyan-300/30">
                        <p className="text-sm text-center text-cyan-300">
                          ✓ Véhicule détecté ! Sélection automatique effectuée.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <p className="text-sm text-white/60">
                    ou sélectionnez manuellement votre type de véhicule
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Citadine */}
                <Card
                  className={`bg-gradient-to-br from-blue-800/80 via-indigo-800/60 to-blue-900/80 border-2 transition-all duration-300 cursor-pointer hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-300/20 ${
                    selectedVehicle === "citadine"
                      ? "border-cyan-300 shadow-lg shadow-cyan-300/20"
                      : "border-cyan-300/30"
                  }`}
                  onClick={() => handleVehicleSelect("citadine")}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <Car className="w-16 h-16 text-white" />
                      {selectedVehicle === "citadine" && (
                        <CircleCheck className="absolute w-6 h-6 top-4 right-4 text-cyan-300" />
                      )}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      Citadine
                    </h3>
                    <p className="text-sm text-white/80">(Clio, 208, C3...)</p>
                  </CardContent>
                </Card>

                {/* Berline */}
                <Card
                  className={`bg-gradient-to-br from-blue-800/80 via-indigo-800/60 to-blue-900/80 border-2 transition-all duration-300 cursor-pointer hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-300/20 ${
                    selectedVehicle === "berline"
                      ? "border-cyan-300 shadow-lg shadow-cyan-300/20"
                      : "border-cyan-300/30"
                  }`}
                  onClick={() => handleVehicleSelect("berline")}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <Car className="w-16 h-16 text-white" />
                      {selectedVehicle === "berline" && (
                        <CircleCheck className="absolute w-6 h-6 top-4 right-4 text-cyan-300" />
                      )}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      Berline
                    </h3>
                    <p className="text-sm text-white/80">
                      (A5, 508, Classe C...)
                    </p>
                  </CardContent>
                </Card>

                {/* SUV */}
                <Card
                  className={`bg-gradient-to-br from-blue-800/80 via-indigo-800/60 to-blue-900/80 border-2 transition-all duration-300 cursor-pointer hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-300/20 ${
                    selectedVehicle === "suv"
                      ? "border-cyan-300 shadow-lg shadow-cyan-300/20"
                      : "border-cyan-300/30"
                  }`}
                  onClick={() => handleVehicleSelect("suv")}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <Car className="w-16 h-16 text-white" />
                      {selectedVehicle === "suv" && (
                        <CircleCheck className="absolute w-6 h-6 top-4 right-4 text-cyan-300" />
                      )}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      SUV
                    </h3>
                    <p className="text-sm text-white/80">
                      (3008, Toyota RAV4, Volkswagen Tiguan...)
                    </p>
                  </CardContent>
                </Card>

                {/* Monospace 5 places */}
                <Card
                  className={`bg-gradient-to-br from-blue-800/80 via-indigo-800/60 to-blue-900/80 border-2 transition-all duration-300 cursor-pointer hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-300/20 ${
                    selectedVehicle === "monospace5"
                      ? "border-cyan-300 shadow-lg shadow-cyan-300/20"
                      : "border-cyan-300/30"
                  }`}
                  onClick={() => handleVehicleSelect("monospace5")}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <Car className="w-16 h-16 text-white" />
                      {selectedVehicle === "monospace5" && (
                        <CircleCheck className="absolute w-6 h-6 top-4 right-4 text-cyan-300" />
                      )}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      Monospace 5 places
                    </h3>
                    <p className="text-sm text-white/80">
                      (Scénic, Renault Espace, Ford S-Max...)
                    </p>
                  </CardContent>
                </Card>

                {/* Monospace 7 places */}
                <Card
                  className={`bg-gradient-to-br from-blue-800/80 via-indigo-800/60 to-blue-900/80 border-2 transition-all duration-300 cursor-pointer hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-300/20 ${
                    selectedVehicle === "monospace7"
                      ? "border-cyan-300 shadow-lg shadow-cyan-300/20"
                      : "border-cyan-300/30"
                  }`}
                  onClick={() => handleVehicleSelect("monospace7")}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <Car className="w-16 h-16 text-white" />
                      {selectedVehicle === "monospace7" && (
                        <CircleCheck className="absolute w-6 h-6 top-4 right-4 text-cyan-300" />
                      )}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      Monospace 7 places
                    </h3>
                    <p className="text-sm text-white/80">
                      (Scénic, Renault Espace, Ford S-Max...)
                    </p>
                  </CardContent>
                </Card>

                {/* Canapé sans angle */}
                <Card
                  className={`bg-gradient-to-br from-blue-800/80 via-indigo-800/60 to-blue-900/80 border-2 transition-all duration-300 cursor-pointer hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-300/20 ${
                    selectedVehicle === "canape_sans_angle"
                      ? "border-cyan-300 shadow-lg shadow-cyan-300/20"
                      : "border-cyan-300/30"
                  }`}
                  onClick={() => handleVehicleSelect("canape_sans_angle")}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <Sofa className="w-16 h-16 text-white" />
                      {selectedVehicle === "canape_sans_angle" && (
                        <CircleCheck className="absolute w-6 h-6 top-4 right-4 text-cyan-300" />
                      )}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      Canapé sans angle
                    </h3>
                  </CardContent>
                </Card>

                {/* Canapé avec angle */}
                <Card
                  className={`bg-gradient-to-br from-blue-800/80 via-indigo-800/60 to-blue-900/80 border-2 transition-all duration-300 cursor-pointer hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-300/20 ${
                    selectedVehicle === "canape_avec_angle"
                      ? "border-cyan-300 shadow-lg shadow-cyan-300/20"
                      : "border-cyan-300/30"
                  }`}
                  onClick={() => handleVehicleSelect("canape_avec_angle")}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <Sofa className="w-16 h-16 text-white" />
                      {selectedVehicle === "canape_avec_angle" && (
                        <CircleCheck className="absolute w-6 h-6 top-4 right-4 text-cyan-300" />
                      )}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      Canapé avec angle
                    </h3>
                  </CardContent>
                </Card>

                {/* Tapis, matelas, Canapé en U */}
                <Card
                  className={`bg-gradient-to-br from-blue-800/80 via-indigo-800/60 to-blue-900/80 border-2 transition-all duration-300 cursor-pointer hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-300/20 ${
                    selectedVehicle === "tapis_matelas"
                      ? "border-cyan-300 shadow-lg shadow-cyan-300/20"
                      : "border-cyan-300/30"
                  }`}
                  onClick={() => handleVehicleSelect("tapis_matelas")}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <Bed className="w-16 h-16 text-white" />
                      {selectedVehicle === "tapis_matelas" && (
                        <CircleCheck className="absolute w-6 h-6 top-4 right-4 text-cyan-300" />
                      )}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      Tapis, matelas, Canapé en U
                    </h3>
                    <p className="text-sm text-white/80">(devis)</p>
                  </CardContent>
                </Card>

                {/* Utilitaire */}
                <Card
                  className={`bg-gradient-to-br from-blue-800/80 via-indigo-800/60 to-blue-900/80 border-2 transition-all duration-300 cursor-pointer hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-300/20 ${
                    selectedVehicle === "utilitaire"
                      ? "border-cyan-300 shadow-lg shadow-cyan-300/20"
                      : "border-cyan-300/30"
                  }`}
                  onClick={() => handleVehicleSelect("utilitaire")}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <Truck className="w-16 h-16 text-white" />
                      {selectedVehicle === "utilitaire" && (
                        <CircleCheck className="absolute w-6 h-6 top-4 right-4 text-cyan-300" />
                      )}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      Utilitaire
                    </h3>
                    <p className="text-sm text-white/80">(devis)</p>
                  </CardContent>
                </Card>

                {/* Demande spécifique */}
                <Card
                  className={`bg-gradient-to-br from-blue-800/80 via-indigo-800/60 to-blue-900/80 border-2 transition-all duration-300 cursor-pointer hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-300/20 ${
                    selectedVehicle === "demande_specifique"
                      ? "border-cyan-300 shadow-lg shadow-cyan-300/20"
                      : "border-cyan-300/30"
                  }`}
                  onClick={() => handleVehicleSelect("demande_specifique")}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <HelpCircle className="w-16 h-16 text-white" />
                      {selectedVehicle === "demande_specifique" && (
                        <CircleCheck className="absolute w-6 h-6 top-4 right-4 text-cyan-300" />
                      )}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      Demande spécifique
                    </h3>
                    <p className="text-sm text-white/80">
                      (exemple: shampoing siège, rénovation phare...)
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-center mt-10">
                <Button
                  onClick={goToNextStep}
                  disabled={!selectedVehicle}
                  className={`px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 ${
                    selectedVehicle
                      ? "bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-blue-900 shadow-lg shadow-cyan-400/25"
                      : "bg-blue-800/50 text-white/50 cursor-not-allowed"
                  }`}
                >
                  Continuer
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Étapes suivantes (à implémenter) */}
          {currentStep > 1 && (
            <div className="max-w-5xl mx-auto text-center">
              <div className="p-8 border-2 shadow-lg bg-gradient-to-br from-blue-800/80 via-indigo-800/60 to-blue-900/80 border-cyan-300/30 rounded-xl">
                <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                  {currentStep === 2 && "Choix du pack"}
                  {currentStep === 3 && "Ajout d'options"}
                  {currentStep === 4 && "Lieu"}
                  {currentStep === 5 && "Paiement / Réservation"}
                </h2>
                <p className="mb-8 text-white/80">
                  Cette étape est en cours de développement.
                </p>
                <div className="flex justify-center">
                  <Button
                    onClick={() => setCurrentStep(1)}
                    className="px-6 py-2 font-semibold text-blue-900 shadow-lg bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 shadow-cyan-400/25"
                  >
                    Retour à l'étape 1
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Reservation;
