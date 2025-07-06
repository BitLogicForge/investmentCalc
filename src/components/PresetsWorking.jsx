const PRESET_CONFIGS = [
  {
    name: "Conservative",
    description: "Low risk, steady growth",
    settings: {
      initialInvestment: 10000,
      annualInvestment: 2000,
      expectedReturn: 4,
      duration: 20,
    },
  },
  {
    name: "Moderate",
    description: "Balanced risk and return",
    settings: {
      initialInvestment: 15000,
      annualInvestment: 3000,
      expectedReturn: 7,
      duration: 15,
    },
  },
  {
    name: "Aggressive",
    description: "High risk, high potential return",
    settings: {
      initialInvestment: 20000,
      annualInvestment: 5000,
      expectedReturn: 10,
      duration: 10,
    },
  },
  {
    name: "Retirement",
    description: "Long-term retirement planning",
    settings: {
      initialInvestment: 5000,
      annualInvestment: 6000,
      expectedReturn: 6,
      duration: 30,
    },
  },
];

function PresetCard({ preset, onApply }) {
  const { name, description, settings } = preset;

  return (
    <div className="preset-card">
      <h3>{name}</h3>
      <p className="preset-description">{description}</p>
      <div className="preset-details">
        <p>Initial: ${settings.initialInvestment.toLocaleString()}</p>
        <p>Annual: ${settings.annualInvestment.toLocaleString()}</p>
        <p>Return: {settings.expectedReturn}%</p>
        <p>Duration: {settings.duration} years</p>
      </div>
      <button onClick={() => onApply(settings)} className="apply-preset-btn">
        Apply Preset
      </button>
    </div>
  );
}

export default function Presets({ onApplyPreset }) {
  return (
    <section id="presets">
      <h2>Investment Presets</h2>
      <div className="presets-grid">
        {PRESET_CONFIGS.map((preset) => (
          <PresetCard
            key={preset.name}
            preset={preset}
            onApply={onApplyPreset}
          />
        ))}
      </div>
    </section>
  );
}
