export type ProjectCategory =
  | "Machine Learning"
  | "Data Analysis"
  | "Process Engineering"
  | "Automation"
  | "AI Agent";

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  featured: boolean;
  github?: string;
  liveUrl?: string;
  category: ProjectCategory;
  keyResult?: string;
  problem?: string;
  approach?: string;
  results?: string;
  tools?: string[];
  image?: string;
}

/** Maps category to CSS badge class (e.g. "Machine Learning" -> "badge-ml") */
export function categoryToBadgeClass(category: ProjectCategory): string {
  const map: Record<ProjectCategory, string> = {
    "Machine Learning": "badge-ml",
    "Data Analysis": "badge-data",
    "Process Engineering": "badge-process",
    "Automation": "badge-automation",
    "AI Agent": "badge-ai-agent",
  };
  return map[category];
}

export const projects: Project[] = [
  {
    slug: "chemical-process-ml",
    title: "Chemical Process ML Model",
    shortDescription: "Predictive model to optimize chemical reaction yield using regression algorithms.",
    fullDescription: "Built a predictive Python model to optimize reaction yield using regression algorithms and preprocessing techniques. Applied feature engineering and model evaluation to identify optimal process parameters for maximizing chemical output.",
    tags: ["Python", "Scikit-learn", "Regression", "Preprocessing"],
    featured: true,
    category: "Machine Learning",
    keyResult: "Optimized reaction yield using regression",
    problem: "Identifying optimal process parameters for chemical reactions to maximize output yield.",
    approach: "Built a predictive Python model using regression algorithms and preprocessing techniques, with feature engineering and model evaluation to surface the most influential parameters.",
    results: "Achieved a model that correlates process inputs with reaction yield, enabling data-driven optimization of chemical process parameters.",
    tools: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    image: "/images/projects/chemical-process-ml.svg",
  },
  {
    slug: "anomaly-detection-multiphase-flow",
    title: "Anomaly Detection in Multiphase Flow",
    shortDescription: "ML system detecting air leakage and blockage faults using 29 sensor variables.",
    fullDescription: "Developed an ML-based anomaly detection system for a multiphase air-water flow facility using 29 sensor variables. Performed data cleaning, feature engineering, and model comparison to identify normal vs abnormal operation and classify two fault types (air leakage and air blockage), improving detection accuracy.",
    tags: ["Python", "Classification", "Feature Engineering", "Anomaly Detection"],
    featured: true,
    category: "Machine Learning",
    keyResult: "Classified 2 fault types across 29 sensors",
    problem: "Multiphase air-water flow facilities need early detection of faults (air leakage and air blockage) to avoid operational and safety issues.",
    approach: "Used 29 sensor variables to build an ML-based anomaly detection system: data cleaning, feature engineering, and model comparison to distinguish normal vs abnormal operation and classify the two fault types.",
    results: "Improved detection accuracy for air leakage and air blockage, enabling faster response to abnormal conditions in the facility.",
    tools: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    image: "/images/projects/anomaly-detection.svg",
  },
  {
    slug: "gas-eur-prediction",
    title: "Gas EUR Prediction",
    shortDescription: "Regression model predicting gas recovery for 507 simulated horizontal wells.",
    fullDescription: "Built a regression model to predict gas Estimated Ultimate Recovery (EUR) for 507 simulated horizontal multistage fractured wells using geological, drilling, and completion attributes. Performed data preprocessing, feature engineering, and model evaluation to achieve high correlation with actual EUR values, while analyzing feature importance to identify the most influential well parameters.",
    tags: ["Python", "Regression", "Feature Importance", "Reservoir Engineering"],
    featured: true,
    category: "Machine Learning",
    keyResult: "High correlation with actual EUR for 507 wells",
    problem: "Predicting Estimated Ultimate Recovery (EUR) for horizontal multistage fractured wells is critical for reservoir planning and investment decisions.",
    approach: "Built a regression model using geological, drilling, and completion attributes for 507 simulated wells. Applied preprocessing, feature engineering, and model evaluation, plus feature importance analysis.",
    results: "Achieved high correlation with actual EUR values and identified the most influential well parameters for reservoir performance forecasting.",
    tools: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
    image: "/images/projects/gas-eur.svg",
  },
  {
    slug: "steel-electrical-load-prediction",
    title: "Steel Electrical Load Prediction",
    shortDescription: "Multi-class model predicting electricity load levels for 35k+ steel production cycles.",
    fullDescription: "Developed a multi-class classification model to predict electricity load levels (Light, Medium, Maximum) for 35k+ steel production cycles using historical consumption data, time-based features, grid measurements, and power factor indicators. Performed feature engineering on timestamp variables, reactive power metrics, and usage patterns to improve predictive accuracy.",
    tags: ["Python", "Classification", "Time-Series", "Energy Optimization"],
    featured: true,
    category: "Machine Learning",
    keyResult: "Predicted load levels for 35k+ production cycles",
    problem: "Steel production requires effective load management; predicting electricity load levels (Light, Medium, Maximum) supports scheduling and energy-saving strategies.",
    approach: "Built a multi-class classification model using historical consumption data, time-based features, grid measurements, and power factor indicators. Feature engineering on timestamps, reactive power, and usage patterns improved accuracy.",
    results: "Enabled prediction of load levels across 35k+ production cycles, supporting optimized production scheduling and better load management.",
    tools: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    image: "/images/projects/steel-load.svg",
  },
];
