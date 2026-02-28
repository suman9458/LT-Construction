import { useMemo, useState } from "react";

const inventoryRates = {
  panel: 1250,
  beam: 780,
  prop: 450,
  deck: 620,
  fitting: 110
};

const carryingRatePerMonth = 0.014;

function parseNum(value) {
  const num = Number(value);
  return Number.isFinite(num) && num >= 0 ? num : 0;
}

function formatINR(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

export default function MainDashboard({ session, onLogout }) {
  const [inputs, setInputs] = useState({
    slabArea: 2500,
    floorCount: 12,
    cycleDays: 7,
    standardization: 68,
    wastage: 6
  });

  const [mode, setMode] = useState("optimized");

  const boq = useMemo(() => {
    const slabArea = parseNum(inputs.slabArea);
    const floors = parseNum(inputs.floorCount);
    const cycleDays = parseNum(inputs.cycleDays);
    const standardization = Math.min(parseNum(inputs.standardization), 100);
    const wastage = Math.min(parseNum(inputs.wastage), 40);

    const repetitionFactor = 1 + (100 - standardization) / 100;
    const modeMultiplier = mode === "optimized" ? 0.84 : 1;

    const basePanel = slabArea * 1.05;
    const baseBeam = slabArea * 0.58;
    const baseProp = slabArea * 0.42;
    const baseDeck = slabArea * 0.7;

    const safetyFactor = 1 + wastage / 100;
    const cycleFactor = cycleDays <= 7 ? 1.08 : cycleDays <= 10 ? 1 : 0.94;

    const panelQty = Math.ceil(basePanel * repetitionFactor * safetyFactor * modeMultiplier * cycleFactor);
    const beamQty = Math.ceil(baseBeam * repetitionFactor * safetyFactor * modeMultiplier * cycleFactor);
    const propQty = Math.ceil(baseProp * repetitionFactor * safetyFactor * modeMultiplier * cycleFactor);
    const deckQty = Math.ceil(baseDeck * repetitionFactor * safetyFactor * modeMultiplier * cycleFactor);
    const fittingQty = Math.ceil((panelQty + beamQty + propQty + deckQty) * 0.18);

    const quantities = {
      panel: panelQty,
      beam: beamQty,
      prop: propQty,
      deck: deckQty,
      fitting: fittingQty
    };

    const materialCost = Object.entries(quantities).reduce((sum, [key, qty]) => {
      return sum + qty * inventoryRates[key];
    }, 0);

    const projectMonths = (floors * cycleDays) / 30;
    const carryingCost = materialCost * carryingRatePerMonth * projectMonths;
    const totalCost = materialCost + carryingCost;

    const baselineMaterial = Object.entries(quantities).reduce((sum, [key, qty]) => {
      const baselineQty = mode === "optimized" ? Math.ceil(qty / 0.84) : qty;
      return sum + baselineQty * inventoryRates[key];
    }, 0);

    const baselineCarry = baselineMaterial * carryingRatePerMonth * projectMonths;
    const baselineTotal = baselineMaterial + baselineCarry;
    const savings = Math.max(0, baselineTotal - totalCost);

    return {
      quantities,
      materialCost,
      carryingCost,
      totalCost,
      savings,
      projectMonths
    };
  }, [inputs, mode]);

  function updateField(key, value) {
    setInputs((prev) => ({ ...prev, [key]: value }));
  }

  function handleCardMove(event) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const offsetX = (x / rect.width - 0.5) * 2;
    const offsetY = (y / rect.height - 0.5) * 2;

    const rotateY = offsetX * 5;
    const rotateX = -offsetY * 4;

    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
    card.style.setProperty("--rx", `${rotateX}deg`);
    card.style.setProperty("--ry", `${rotateY}deg`);
    card.classList.add("is-active");
  }

  function handleCardLeave(event) {
    const card = event.currentTarget;
    card.style.setProperty("--mx", "50%");
    card.style.setProperty("--my", "50%");
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
    card.classList.remove("is-active");
  }

  return (
    <div className="page">
      <div className="top-bar">
        <div>
          <strong>{session.name}</strong>
          <span>
            {session.role} | {session.employeeId}
          </span>
        </div>
        <button type="button" className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>

      <header className="hero card">
        <h1>Automation of Formwork Kitting & BoQ Optimization Using Data Science</h1>
        <p className="subtitle">
          Design a data-driven system to automate formwork kitting, optimize BoQ planning, and maximize repetition to
          reduce inventory and overall project costs.
        </p>
        <div className="hero-grid">
          <article className="interactive-card" onMouseMove={handleCardMove} onMouseLeave={handleCardLeave}>
            <h3>Background</h3>
            <p>
              Formwork contributes 7-10% of total construction cost. Inefficiencies in kitting, repetition planning, and
              BoQ estimation often lead to excess inventory and avoidable cost overruns.
            </p>
          </article>
          <article className="interactive-card" onMouseMove={handleCardMove} onMouseLeave={handleCardLeave}>
            <h3>Action Item</h3>
            <p>
              Build an integrated platform that connects design inputs, schedule data, and inventory logic to generate
              optimized kitting plans and BoQ quantities automatically.
            </p>
          </article>
          <article className="interactive-card" onMouseMove={handleCardMove} onMouseLeave={handleCardLeave}>
            <h3>Key Considerations</h3>
            <ul>
              <li>Standardization and repetition analytics</li>
              <li>Predictive inventory optimization</li>
              <li>Design and schedule integration</li>
              <li>Measurable reduction in material and carrying costs</li>
            </ul>
          </article>
        </div>
      </header>

      <main className="main-grid">
        <section className="card input-card">
          <div className="section-head">
            <h2>BoQ Input Console</h2>
            <div className="toggle-wrap">
              <button
                className={mode === "optimized" ? "active" : ""}
                onClick={() => setMode("optimized")}
                type="button"
              >
                Optimized
              </button>
              <button
                className={mode === "baseline" ? "active" : ""}
                onClick={() => setMode("baseline")}
                type="button"
              >
                Baseline
              </button>
            </div>
          </div>

          <div className="input-grid">
            <label>
              Slab Area per Floor (sq m)
              <input
                type="number"
                min="0"
                value={inputs.slabArea}
                onChange={(e) => updateField("slabArea", e.target.value)}
              />
            </label>

            <label>
              Number of Floors
              <input
                type="number"
                min="0"
                value={inputs.floorCount}
                onChange={(e) => updateField("floorCount", e.target.value)}
              />
            </label>

            <label>
              Typical Cycle Time (days)
              <input
                type="number"
                min="0"
                value={inputs.cycleDays}
                onChange={(e) => updateField("cycleDays", e.target.value)}
              />
            </label>

            <label>
              Standardization (%)
              <input
                type="number"
                min="0"
                max="100"
                value={inputs.standardization}
                onChange={(e) => updateField("standardization", e.target.value)}
              />
            </label>

            <label>
              Wastage Allowance (%)
              <input
                type="number"
                min="0"
                max="40"
                value={inputs.wastage}
                onChange={(e) => updateField("wastage", e.target.value)}
              />
            </label>
          </div>
        </section>

        <section className="card output-card">
          <h2>BoQ Output</h2>
          <p className="muted">Estimated formwork quantities and cost metrics for planning decisions.</p>

          <div className="kpi-grid">
            <article>
              <span>Total Material Cost</span>
              <strong>{formatINR(boq.materialCost)}</strong>
            </article>
            <article>
              <span>Carrying Cost</span>
              <strong>{formatINR(boq.carryingCost)}</strong>
            </article>
            <article>
              <span>Total BoQ Cost</span>
              <strong>{formatINR(boq.totalCost)}</strong>
            </article>
            <article>
              <span>Estimated Savings</span>
              <strong className="success">{formatINR(boq.savings)}</strong>
            </article>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Qty</th>
                  <th>Rate</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(boq.quantities).map(([key, qty]) => (
                  <tr key={key}>
                    <td>{key.toUpperCase()}</td>
                    <td>{qty.toLocaleString("en-IN")}</td>
                    <td>{formatINR(inventoryRates[key])}</td>
                    <td>{formatINR(qty * inventoryRates[key])}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="foot-note">
            Planning horizon: <strong>{boq.projectMonths.toFixed(1)} months</strong>
          </div>
        </section>
      </main>
    </div>
  );
}
