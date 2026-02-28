import { useEffect, useMemo, useState } from "react";
import companyLogo from "../assets/logo.png";

const APP_STATE_KEY = "createch_enterprise_state";

const text = {
  en: {
    dashboard: "Dashboard",
    setup: "Project Setup",
    analytics: "AI Analytics",
    health: "Health & Export",
    enterpriseTitle: "L&T Construction",
    totalCostSaved: "Total Cost Saved",
    co2Reduction: "CO2 Reduction",
    inventoryUtilization: "Inventory Utilization",
    logisticsEfficiency: "Logistics Efficiency",
    notifications: "Notifications",
    darkMode: "Dark",
    lightMode: "Light",
    logout: "Logout",
    save: "Save Config",
    welcome: "Welcome",
    voiceCommand: "Voice Command Simulation",
    logisticsSnapshot: "Logistics Snapshot",
    inventoryHealth: "Inventory Health",
    siteSelection: "Site Selection",
    floors: "Floors",
    areaPerFloor: "Area per Floor (sq m)",
    targetReuse: "Target Reuse Cycles",
    configLocked: "Configuration locked successfully.",
    boqInputConsole: "BoQ Input Console",
    optimized: "Optimized",
    baseline: "Baseline",
    slabAreaPerFloor: "Slab Area per Floor (sq m)",
    numberOfFloors: "Number of Floors",
    typicalCycleTime: "Typical Cycle Time (days)",
    standardization: "Standardization (%)",
    wastageAllowance: "Wastage Allowance (%)",
    logisticsIntelligence: "Logistics Intelligence",
    financialImpact: "Financial Impact Preview",
    old: "Old",
    ai: "AI",
    blueprintUpload: "Blueprint Upload",
    noBlueprint: "No blueprint uploaded",
    uploadNote: "Upload triggers dummy BoQ regeneration for demo.",
    predictiveMetrics: "Predictive Metrics",
    costSavings: "Cost Savings",
    kitUnits: "Kit Optimization Units",
    treeEquivalency: "Tree Equivalency",
    boqComparison: "BoQ Comparison",
    manual: "Manual",
    aiOptimized: "AI Optimized",
    wastePrediction: "Waste Prediction",
    resourceUtilization: "Resource Utilization",
    aiRecommendations: "AI Recommendations & Risk Alerts",
    mlPrediction: "ML Prediction",
    simulateForecast: "Simulate Forecast",
    historicalBenchmarking: "Historical Benchmarking",
    assetIntegrity: "Asset Integrity Monitor",
    predictiveFailureRisk: "Predictive Failure Risk",
    requestWorkOrder: "Request Work Order",
    panelGrouping: "Panel Grouping Drag & Drop",
    greenZone: "Green Zone",
    yellowZone: "Yellow Zone",
    redZone: "Red Zone",
    dragHint: "Drag any panel chip between zones.",
    executiveExport: "Executive Export",
    exportDesc: "Generate BoQ package with summary logs and charts.",
    exportPdf: "Export PDF",
    exportExcel: "Export Excel",
    siteLogs: "Site Logs",
    inventorySnapshot: "Inventory Snapshot",
    reusable: "Reusable"
  },
  hi: {
    dashboard: "Daishbord",
    setup: "Project Setap",
    analytics: "AI Vishleshan",
    health: "Health aur Export",
    enterpriseTitle: "L&T Construction",
    totalCostSaved: "Kul Lagat Bachat",
    co2Reduction: "CO2 Ghatav",
    inventoryUtilization: "Inventory Upyog",
    logisticsEfficiency: "Logistics Kshamata",
    notifications: "Soochna",
    darkMode: "Dark",
    lightMode: "Light",
    logout: "Logout",
    save: "Config Save Kare",
    welcome: "Swagat",
    voiceCommand: "Voice Command",
    logisticsSnapshot: "Logistics Snapshot",
    inventoryHealth: "Inventory Health",
    siteSelection: "Site Chayan",
    floors: "Manzil",
    areaPerFloor: "Prati Manzil Kshetra (sq m)",
    targetReuse: "Target Reuse Cycle",
    configLocked: "Configuration lock ho gaya.",
    boqInputConsole: "BoQ Input Console",
    optimized: "Optimized",
    baseline: "Baseline",
    slabAreaPerFloor: "Slab Area per Floor (sq m)",
    numberOfFloors: "{t.floors} ki Sankhya",
    typicalCycleTime: "Cycle Time (din)",
    standardization: "Standardization (%)",
    wastageAllowance: "Wastage Allowance (%)",
    logisticsIntelligence: "Logistics Intelligence",
    financialImpact: "Financial Impact Preview",
    old: "Purana",
    ai: "AI",
    blueprintUpload: "Blueprint Upload",
    noBlueprint: "Koi blueprint upload nahi",
    uploadNote: "Upload se dummy BoQ regenerate hota hai.",
    predictiveMetrics: "Predictive Metrics",
    costSavings: "Lagat Bachat",
    kitUnits: "Kit Optimization Unit",
    treeEquivalency: "Tree Equivalency",
    boqComparison: "BoQ Tulanatmak",
    manual: "Manual",
    aiOptimized: "AI Optimized",
    wastePrediction: "Waste Prediction",
    resourceUtilization: "Resource Utilization",
    aiRecommendations: "AI Recommendation aur Risk Alert",
    mlPrediction: "ML Prediction",
    simulateForecast: "Forecast Chalaye",
    historicalBenchmarking: "Historical Benchmarking",
    assetIntegrity: "Asset Integrity Monitor",
    predictiveFailureRisk: "Failure Risk",
    requestWorkOrder: "Work Order Maange",
    panelGrouping: "Panel Grouping Drag & Drop",
    greenZone: "Green Zone",
    yellowZone: "Yellow Zone",
    redZone: "Red Zone",
    dragHint: "Panel ko zones ke beech drag kare.",
    executiveExport: "Executive Export",
    exportDesc: "Summary logs aur charts ke saath BoQ package banaye.",
    exportPdf: "PDF Export",
    exportExcel: "Excel Export",
    siteLogs: "Site Logs",
    inventorySnapshot: "Inventory Snapshot",
    reusable: "Reusable"
  },
  mr: {
    dashboard: "Dashbord",
    setup: "Project Setup",
    analytics: "AI Vishleshan",
    health: "Health ani Export",
    enterpriseTitle: "L&T Construction",
    totalCostSaved: "Ekun Bachat",
    co2Reduction: "CO2 Ghatav",
    inventoryUtilization: "Inventory Vapar",
    logisticsEfficiency: "Logistics Kshamata",
    notifications: "Soochana",
    darkMode: "Dark",
    lightMode: "Light",
    logout: "Logout",
    save: "Config Save Kara",
    welcome: "Swagat",
    voiceCommand: "Voice Command",
    logisticsSnapshot: "Logistics Snapshot",
    inventoryHealth: "Inventory Health",
    siteSelection: "Site Nivad",
    floors: "Majle",
    areaPerFloor: "Prati Majla Kshetrafal (sq m)",
    targetReuse: "Target Reuse Cycle",
    configLocked: "Configuration lock jhale.",
    boqInputConsole: "BoQ Input Console",
    optimized: "Optimized",
    baseline: "Baseline",
    slabAreaPerFloor: "Slab Area per Floor (sq m)",
    numberOfFloors: "Majlyanchi Sankhya",
    typicalCycleTime: "Cycle Time (divas)",
    standardization: "Standardization (%)",
    wastageAllowance: "Wastage Allowance (%)",
    logisticsIntelligence: "Logistics Intelligence",
    financialImpact: "Financial Impact Preview",
    old: "Juna",
    ai: "AI",
    blueprintUpload: "Blueprint Upload",
    noBlueprint: "Blueprint upload nahi",
    uploadNote: "Upload mule dummy BoQ regenerate hoto.",
    predictiveMetrics: "Predictive Metrics",
    costSavings: "Kharch Bachat",
    kitUnits: "Kit Optimization Unit",
    treeEquivalency: "Tree Equivalency",
    boqComparison: "BoQ Tulan",
    manual: "Manual",
    aiOptimized: "AI Optimized",
    wastePrediction: "Waste Prediction",
    resourceUtilization: "Resource Utilization",
    aiRecommendations: "AI Recommendation ani Risk Alert",
    mlPrediction: "ML Prediction",
    simulateForecast: "Forecast Chalva",
    historicalBenchmarking: "Historical Benchmarking",
    assetIntegrity: "Asset Integrity Monitor",
    predictiveFailureRisk: "Failure Risk",
    requestWorkOrder: "Work Order Request",
    panelGrouping: "Panel Grouping Drag & Drop",
    greenZone: "Green Zone",
    yellowZone: "Yellow Zone",
    redZone: "Red Zone",
    dragHint: "Panel chips zones madhe drag kara.",
    executiveExport: "Executive Export",
    exportDesc: "Summary logs ani charts sah BoQ package tayar kara.",
    exportPdf: "PDF Export",
    exportExcel: "Excel Export",
    siteLogs: "Site Logs",
    inventorySnapshot: "Inventory Snapshot",
    reusable: "Reusable"
  },
  ta: {
    dashboard: "Dashboard",
    setup: "Project Setup",
    analytics: "AI Analytics",
    health: "Health and Export",
    enterpriseTitle: "L&T Construction",
    totalCostSaved: "Total Cost Saved",
    co2Reduction: "CO2 Reduction",
    inventoryUtilization: "Inventory Utilization",
    logisticsEfficiency: "Logistics Efficiency",
    notifications: "Notifications",
    darkMode: "Dark",
    lightMode: "Light",
    logout: "Logout",
    save: "Save Config",
    welcome: "Welcome",
    voiceCommand: "Voice Command",
    logisticsSnapshot: "Logistics Snapshot",
    inventoryHealth: "Inventory Health",
    siteSelection: "Site Selection",
    floors: "Floors",
    areaPerFloor: "Area per Floor (sq m)",
    targetReuse: "Target Reuse Cycles",
    configLocked: "Configuration locked successfully.",
    boqInputConsole: "BoQ Input Console",
    optimized: "Optimized",
    baseline: "Baseline",
    slabAreaPerFloor: "Slab Area per Floor (sq m)",
    numberOfFloors: "Number of Floors",
    typicalCycleTime: "Typical Cycle Time (days)",
    standardization: "Standardization (%)",
    wastageAllowance: "Wastage Allowance (%)",
    logisticsIntelligence: "Logistics Intelligence",
    financialImpact: "Financial Impact Preview",
    old: "Old",
    ai: "AI",
    blueprintUpload: "Blueprint Upload",
    noBlueprint: "No blueprint uploaded",
    uploadNote: "Upload triggers dummy BoQ regeneration for demo.",
    predictiveMetrics: "Predictive Metrics",
    costSavings: "Cost Savings",
    kitUnits: "Kit Optimization Units",
    treeEquivalency: "Tree Equivalency",
    boqComparison: "BoQ Comparison",
    manual: "Manual",
    aiOptimized: "AI Optimized",
    wastePrediction: "Waste Prediction",
    resourceUtilization: "Resource Utilization",
    aiRecommendations: "AI Recommendations & Risk Alerts",
    mlPrediction: "ML Prediction",
    simulateForecast: "Simulate Forecast",
    historicalBenchmarking: "Historical Benchmarking",
    assetIntegrity: "Asset Integrity Monitor",
    predictiveFailureRisk: "Predictive Failure Risk",
    requestWorkOrder: "Request Work Order",
    panelGrouping: "Panel Grouping Drag & Drop",
    greenZone: "Green Zone",
    yellowZone: "Yellow Zone",
    redZone: "Red Zone",
    dragHint: "Drag any panel chip between zones.",
    executiveExport: "Executive Export",
    exportDesc: "Generate BoQ package with summary logs and charts.",
    exportPdf: "Export PDF",
    exportExcel: "Export Excel",
    siteLogs: "Site Logs",
    inventorySnapshot: "Inventory Snapshot",
    reusable: "Reusable"
  }
};

const defaultState = {
  page: "setup",
  theme: "dark",
  language: "en",
  profileRole: "Engineer",
  sidebarCollapsed: false,
  project: {
    site: "Mumbai",
    floors: 12,
    areaPerFloor: 2500,
    targetReuse: 14,
    locked: false,
    blueprintName: ""
  },
  boq: {
    slabArea: 2500,
    floorCount: 12,
    cycleDays: 7,
    standardization: 68,
    wastage: 6,
    mode: "optimized"
  },
  panelGroups: {
    green: ["P-102", "P-110", "P-119"],
    yellow: ["P-031", "P-066"],
    red: ["P-018"]
  },
  voiceQuery: "",
  workOrderMessage: "",
  exportCelebration: false
};

const logisticsDb = {
  Mumbai: { warehouse: "Navi Mumbai Hub", distance: 22, transfer: "Transfer 340 panels from Pune site" },
  Delhi: { warehouse: "Noida Yard", distance: 17, transfer: "Transfer 190 props from Gurugram" },
  Chennai: { warehouse: "Sriperumbudur Depot", distance: 28, transfer: "Transfer 130 decks from Ranipet" },
  Ranchi: { warehouse: "Namkum Stockpoint", distance: 14, transfer: "Transfer 95 beams from Jamshedpur" }
};

function readState() {
  try {
    const raw = localStorage.getItem(APP_STATE_KEY);
    return raw ? { ...defaultState, ...JSON.parse(raw) } : defaultState;
  } catch {
    return defaultState;
  }
}

function formatINR(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

function asNumber(value, min = 0) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    return min;
  }

  return Math.max(min, parsed);
}

function triggerDownload(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function downloadSimplePdf(filename, lines) {
  const encoder = new TextEncoder();
  const escapeText = (text) => String(text).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

  const streamBody = lines
    .slice(0, 40)
    .map((line, index) => {
      const y = 800 - index * 18;
      return `BT /F1 12 Tf 50 ${y} Td (${escapeText(line)}) Tj ET`;
    })
    .join("\n");

  const objects = [
    "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n",
    "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n",
    "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n",
    `4 0 obj\n<< /Length ${encoder.encode(streamBody).length} >>\nstream\n${streamBody}\nendstream\nendobj\n`,
    "5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n"
  ];

  const header = "%PDF-1.4\n";
  const offsets = [0];
  let pointer = encoder.encode(header).length;

  for (const obj of objects) {
    offsets.push(pointer);
    pointer += encoder.encode(obj).length;
  }

  const xref =
    "xref\n" +
    `0 ${objects.length + 1}\n` +
    "0000000000 65535 f \n" +
    offsets
      .slice(1)
      .map((off) => `${String(off).padStart(10, "0")} 00000 n \n`)
      .join("");

  const trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${pointer}\n%%EOF`;
  const pdfContent = header + objects.join("") + xref + trailer;

  triggerDownload(filename, pdfContent, "application/pdf");
}

function downloadCsv(filename, rows) {
  const csv = rows
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
    .join("\n");
  triggerDownload(filename, csv, "text/csv;charset=utf-8;");
}

export default function EnterpriseApp({ session, onLogout }) {
  const [state, setState] = useState(() => {
    const saved = readState();
    return { ...saved, profileRole: saved.profileRole || session.role || "Engineer" };
  });
  const [notifOpen, setNotifOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(APP_STATE_KEY, JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    if (!state.exportCelebration) {
      return;
    }

    const timer = setTimeout(() => {
      setState((prev) => ({ ...prev, exportCelebration: false }));
    }, 2600);

    return () => clearTimeout(timer);
  }, [state.exportCelebration]);

  const t = text[state.language] || text.en;

  const navItems = [
    { id: "dashboard", label: t.dashboard },
    { id: "setup", label: t.setup },
    { id: "analytics", label: t.analytics },
    { id: "health", label: t.health }
  ];

  const notifications = useMemo(() => {
    const fatigue = state.panelGroups.red.length > 0;
    const delayWarning = asNumber(state.boq.cycleDays, 1) > 8;
    return [
      { kind: fatigue ? "critical" : "ok", title: fatigue ? "Inventory fatigue detected" : "Inventory healthy" },
      {
        kind: delayWarning ? "warning" : "ok",
        title: delayWarning ? "Two inbound trucks delayed by 45 minutes" : "Inbound logistics on schedule"
      },
      { kind: "ok", title: "AI optimization run completed successfully" }
    ];
  }, [state.panelGroups.red.length, state.boq.cycleDays]);

  const boq = useMemo(() => {
    const slabArea = asNumber(state.boq.slabArea, 100);
    const floors = asNumber(state.boq.floorCount, 1);
    const cycleDays = asNumber(state.boq.cycleDays, 1);
    const standardization = Math.min(asNumber(state.boq.standardization, 0), 100);
    const wastage = Math.min(asNumber(state.boq.wastage, 0), 40);

    const repetitionFactor = 1 + (100 - standardization) / 100;
    const safetyFactor = 1 + wastage / 100;
    const rates = { panel: 1250, beam: 780, prop: 450, deck: 620 };

    function scenario(modeMultiplier) {
      const quantities = {
        panel: Math.ceil(slabArea * 1.05 * repetitionFactor * safetyFactor * modeMultiplier),
        beam: Math.ceil(slabArea * 0.58 * repetitionFactor * safetyFactor * modeMultiplier),
        prop: Math.ceil(slabArea * 0.42 * repetitionFactor * safetyFactor * modeMultiplier),
        deck: Math.ceil(slabArea * 0.7 * repetitionFactor * safetyFactor * modeMultiplier)
      };

      const materialCost = Object.entries(quantities).reduce((sum, [k, v]) => sum + v * rates[k], 0);
      const projectMonths = (floors * cycleDays) / 30;
      const carryingCost = materialCost * 0.014 * projectMonths;
      const totalCost = materialCost + carryingCost;

      return { quantities, materialCost, carryingCost, totalCost };
    }

    const manualScenario = scenario(1);
    const optimizedScenario = scenario(0.84);
    const activeScenario = state.boq.mode === "optimized" ? optimizedScenario : manualScenario;

    const savings = Math.max(0, manualScenario.totalCost - optimizedScenario.totalCost);
    const co2 = Math.max(1, Math.round(savings / 100000));
    const treeEq = co2 * 45;

    return {
      quantities: activeScenario.quantities,
      rates,
      materialCost: activeScenario.materialCost,
      carryingCost: activeScenario.carryingCost,
      totalCost: activeScenario.totalCost,
      manualTotal: manualScenario.totalCost,
      optimizedTotal: optimizedScenario.totalCost,
      savings,
      co2,
      treeEq
    };
  }, [state.boq]);

  const logistics = logisticsDb[state.project.site];

  const logisticsCosts = useMemo(() => {
    const transport = Math.round(logistics.distance * 1800);
    const fuel = Math.round(logistics.distance * 640);
    const delayPenalty = asNumber(state.boq.cycleDays, 1) > 8 ? 125000 : 40000;
    return { transport, fuel, delayPenalty, total: transport + fuel + delayPenalty };
  }, [logistics.distance, state.boq.cycleDays]);

  const metrics = useMemo(() => {
    const utilization = Math.min(97, Math.round((state.project.targetReuse / 25) * 100));
    const logisticsScore = Math.max(72, 94 - logistics.distance / 2);
    return {
      costSaved: formatINR(boq.savings),
      co2: `${boq.co2} tCO2`,
      utilization: `${utilization}%`,
      logistics: `${logisticsScore.toFixed(1)}%`
    };
  }, [boq.savings, boq.co2, logistics.distance, state.project.targetReuse]);

  function setPage(page) {
    setState((prev) => ({ ...prev, page }));
  }

  function updateProject(key, value) {
    setState((prev) => ({ ...prev, project: { ...prev.project, [key]: value } }));
  }

  function updateBoq(key, value) {
    setState((prev) => ({ ...prev, boq: { ...prev.boq, [key]: value } }));
  }

  function setWorkOrderMessage(message) {
    setState((prev) => ({ ...prev, workOrderMessage: message }));
  }

  function runVoiceCommand() {
    const q = state.voiceQuery.toLowerCase();
    let message = "No direct command matched. Showing AI recommendations.";

    if (q.includes("cheapest") || q.includes("supplier")) {
      message = "AI Suggestion: Shift 22% volume to Supplier B to cut panel cost by 4.8%.";
    } else if (q.includes("delay") || q.includes("route")) {
      message = "AI Suggestion: Reroute one truck from Pune to recover 1.5 hours.";
    } else if (q.includes("reuse")) {
      message = "AI Suggestion: Increase deck reuse target from 14 to 17 cycles after maintenance.";
    }

    setWorkOrderMessage(message);
  }

  function onBlueprintUpload(event) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    setState((prev) => ({
      ...prev,
      project: { ...prev.project, blueprintName: file.name },
      boq: {
        ...prev.boq,
        slabArea: prev.boq.slabArea + 220,
        standardization: Math.min(95, prev.boq.standardization + 4)
      }
    }));
  }

  function onDropPanel(event, zone) {
    event.preventDefault();
    const panel = event.dataTransfer.getData("panel-id");
    if (!panel) {
      return;
    }

    setState((prev) => {
      const next = {
        green: prev.panelGroups.green.filter((id) => id !== panel),
        yellow: prev.panelGroups.yellow.filter((id) => id !== panel),
        red: prev.panelGroups.red.filter((id) => id !== panel)
      };
      next[zone] = [...next[zone], panel];
      return { ...prev, panelGroups: next };
    });
  }

  function exportBoqPdf() {
    const lines = [
      "L&T Construction - Executive BoQ Export",
      `Generated: ${new Date().toLocaleString()}`,
      "",
      `Site: ${state.project.site}`,
      `Floors: ${state.boq.floorCount}`,
      `Slab Area: ${state.boq.slabArea} sq m`,
      `Cycle Time: ${state.boq.cycleDays} days`,
      "",
      "BoQ Totals",
      `Manual Total: ${formatINR(boq.manualTotal)}`,
      `AI Optimized Total: ${formatINR(boq.optimizedTotal)}`,
      `Savings: ${formatINR(boq.savings)}`,
      "",
      "Quantities",
      `Panel: ${boq.quantities.panel}`,
      `Beam: ${boq.quantities.beam}`,
      `Prop: ${boq.quantities.prop}`,
      `Deck: ${boq.quantities.deck}`
    ];

    downloadSimplePdf(`createch-boq-${Date.now()}.pdf`, lines);
    setState((prev) => ({ ...prev, exportCelebration: true }));
    setWorkOrderMessage(`PDF downloaded at ${new Date().toLocaleTimeString()}.`);
  }

  function exportBoqExcel() {
    const rows = [
      ["Metric", "Value"],
      ["Site", state.project.site],
      ["Floors", state.boq.floorCount],
      ["Slab Area", state.boq.slabArea],
      ["Cycle Time", state.boq.cycleDays],
      ["Manual Total", boq.manualTotal],
      ["AI Optimized Total", boq.optimizedTotal],
      ["Savings", boq.savings],
      [],
      ["Component", "Quantity", "Rate", "Amount"],
      ["Panel", boq.quantities.panel, boq.rates.panel, boq.quantities.panel * boq.rates.panel],
      ["Beam", boq.quantities.beam, boq.rates.beam, boq.quantities.beam * boq.rates.beam],
      ["Prop", boq.quantities.prop, boq.rates.prop, boq.quantities.prop * boq.rates.prop],
      ["Deck", boq.quantities.deck, boq.rates.deck, boq.quantities.deck * boq.rates.deck]
    ];

    downloadCsv(`createch-boq-${Date.now()}.csv`, rows);
    setState((prev) => ({ ...prev, exportCelebration: true }));
    setWorkOrderMessage(`Excel CSV downloaded at ${new Date().toLocaleTimeString()}.`);
  }

  const breadcrumb = `${state.profileRole} / ${navItems.find((item) => item.id === state.page)?.label || "Dashboard"}`;

  return (
    <div className={`enterprise ${state.theme === "light" ? "theme-light" : "theme-dark"}`}>
      <aside className={`side-nav ${state.sidebarCollapsed ? "collapsed" : ""}`}>
        <div className="brand-wrap">
          <img src={companyLogo} alt="L&T logo" className="brand-logo" />
          <div className="brand">L&T Construction</div>
        </div>
        <button type="button" className="collapse-btn" onClick={() => setState((prev) => ({ ...prev, sidebarCollapsed: !prev.sidebarCollapsed }))}>
          {state.sidebarCollapsed ? ">" : "<"}
        </button>
        <nav>
          {navItems.map((item) => (
            <button key={item.id} type="button" className={state.page === item.id ? "active" : ""} onClick={() => setPage(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <div className={`workspace ${notifOpen ? "notif-open" : ""}`}>
        <header className="top-head glass">
          <div>
            <p className="crumb">{breadcrumb}</p>
            <h1>{t.enterpriseTitle}</h1>
          </div>
          <div className="head-actions">
            <select value={state.language} onChange={(e) => setState((prev) => ({ ...prev, language: e.target.value }))}>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="mr">Marathi</option>
              <option value="ta">Tamil</option>
            </select>
            <button type="button" onClick={() => setState((prev) => ({ ...prev, theme: prev.theme === "dark" ? "light" : "dark" }))}>
              {state.theme === "dark" ? t.lightMode : t.darkMode}
            </button>
            <button type="button" className="notify-btn" onClick={() => setNotifOpen((prev) => !prev)}>
              {t.notifications} ({notifications.length})
            </button>
            <button type="button" onClick={onLogout}>{t.logout}</button>
          </div>
          {notifOpen ? (
            <div className="notification-pop glass">
              {notifications.map((note) => (
                <div key={note.title} className={`note ${note.kind}`}>{note.title}</div>
              ))}
            </div>
          ) : null}
        </header>

        {notifOpen ? <button type="button" className="notif-overlay" aria-label="Close notifications" onClick={() => setNotifOpen(false)} /> : null}

        <section className="kpi-row">
          <div className="glass kpi-card">
            <p>{t.totalCostSaved}</p>
            <strong>{metrics.costSaved}</strong>
            <span className="spark up" />
          </div>
          <div className="glass kpi-card">
            <p>{t.co2Reduction}</p>
            <strong>{metrics.co2}</strong>
            <span className="spark up" />
          </div>
          <div className="glass kpi-card">
            <p>{t.inventoryUtilization}</p>
            <strong>{metrics.utilization}</strong>
            <span className="spark flat" />
          </div>
          <div className="glass kpi-card">
            <p>{t.logisticsEfficiency}</p>
            <strong>{metrics.logistics}</strong>
            <span className="spark up" />
          </div>
        </section>

        <main className="page-area">
          {state.page === "dashboard" ? (
            <DashboardPage session={session} state={state} logistics={logistics} logisticsCosts={logisticsCosts} onVoiceChange={(value) => setState((prev) => ({ ...prev, voiceQuery: value }))} onRunVoice={runVoiceCommand} t={t} />
          ) : null}

          {state.page === "setup" ? (
            <ProjectSetupPage state={state} logistics={logistics} logisticsCosts={logisticsCosts} onProjectChange={updateProject} onBoqChange={updateBoq} onBlueprintUpload={onBlueprintUpload} lockConfig={() => setState((prev) => ({ ...prev, project: { ...prev.project, locked: true } }))} t={t} />
          ) : null}

          {state.page === "analytics" ? (
            <AnalyticsPage boq={boq} logistics={logistics} state={state} setWorkOrderMessage={setWorkOrderMessage} t={t} />
          ) : null}

          {state.page === "health" ? (
            <HealthPage panelGroups={state.panelGroups} onDropPanel={onDropPanel} setWorkOrderMessage={setWorkOrderMessage} onExportPdf={exportBoqPdf} onExportExcel={exportBoqExcel} exportCelebration={state.exportCelebration} t={t} />
          ) : null}
        </main>

        <section className="glass insight-box">
          <h3>AI Insights</h3>
          <p>{state.workOrderMessage || "Recommendations appear here after analytics, voice command, or export actions."}</p>
          <p className="erp">ERP Integration: SAP connector placeholder ready.</p>
        </section>
      </div>
    </div>
  );
}

function DashboardPage({ session, state, logistics, logisticsCosts, onVoiceChange, onRunVoice, t }) {
  return (
    <div className="grid-two fade-in">
      <article className="glass panel">
        <h3>{t.welcome}, {session.name}</h3>
        <p>{state.project.site} site is configured with {state.project.floors} floors and {state.project.targetReuse} reuse cycles.</p>
        <div className="mini-bars">
          <div style={{ width: "75%" }} />
          <div style={{ width: "58%" }} />
          <div style={{ width: "82%" }} />
        </div>
      </article>

      <article className="glass panel">
        <h3>{t.voiceCommand}</h3>
        <p>Try: "Show cheapest supplier", "predict delay", "increase reuse"</p>
        <div className="inline-form">
          <input value={state.voiceQuery} onChange={(e) => onVoiceChange(e.target.value)} placeholder="Type command" />
          <button type="button" onClick={onRunVoice}>Run</button>
        </div>
      </article>

      <article className="glass panel">
        <h3>{t.logisticsSnapshot}</h3>
        <ul>
          <li>Warehouse: {logistics.warehouse}</li>
          <li>Distance: {logistics.distance} km</li>
          <li>{logistics.transfer}</li>
        </ul>
        <small>Transport: {formatINR(logisticsCosts.transport)} | Fuel: {formatINR(logisticsCosts.fuel)} | Delay: {formatINR(logisticsCosts.delayPenalty)}</small>
      </article>

      <article className="glass panel">
        <h3>{t.inventoryHealth}</h3>
        <div className="progress-track">
          <span style={{ width: "64%" }} className="used" />
          <span style={{ width: "23%" }} className="available" />
          <span style={{ width: "13%" }} className="damaged" />
        </div>
        <small>Used 64% | Available 23% | Damaged 13%</small>
      </article>
    </div>
  );
}

function ProjectSetupPage({ state, logistics, logisticsCosts, onProjectChange, onBoqChange, onBlueprintUpload, lockConfig, t }) {
  const slabArea = asNumber(state.boq.slabArea, 100);
  const floors = asNumber(state.boq.floorCount, 1);
  const maxHeight = 160;

  const oldCost = slabArea * floors * 460;
  const standardizationGain = Math.min(0.14, asNumber(state.boq.standardization, 0) / 1000);
  const reuseGain = Math.min(0.1, asNumber(state.project.targetReuse, 1) / 250);
  const wastagePenalty = Math.min(0.08, asNumber(state.boq.wastage, 0) / 300);
  const aiReduction = Math.max(0.06, Math.min(0.35, 0.12 + standardizationGain + reuseGain - wastagePenalty));
  const optimized = oldCost * (1 - aiReduction);

  return (
    <div className="grid-two fade-in">
      <article className="glass panel">
        <h3>{t.setup}</h3>
        <label>
          {t.siteSelection}
          <select value={state.project.site} onChange={(e) => onProjectChange("site", e.target.value)}>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Chennai</option>
            <option>Ranchi</option>
          </select>
        </label>
        <label>
          {t.floors}
          <input type="number" value={state.project.floors} onChange={(e) => {
            const value = asNumber(e.target.value, 1);
            onProjectChange("floors", value);
            onBoqChange("floorCount", value);
          }} />
        </label>
        <label>
          {t.areaPerFloor}
          <input type="number" value={state.project.areaPerFloor} onChange={(e) => {
            const value = asNumber(e.target.value, 100);
            onProjectChange("areaPerFloor", value);
            onBoqChange("slabArea", value);
          }} />
        </label>
        <label>
          {t.targetReuse}: {state.project.targetReuse}
          <input type="range" min="1" max="25" value={state.project.targetReuse} onChange={(e) => onProjectChange("targetReuse", asNumber(e.target.value, 1))} />
        </label>
        <button type="button" onClick={lockConfig}>{t.save}</button>
        {state.project.locked ? <small className="ok">{t.configLocked}</small> : null}
      </article>

      <article className="glass panel">
        <h3>{t.boqInputConsole}</h3>
        <div className="inline-form">
          <button type="button" className={state.boq.mode === "optimized" ? "active-pill" : ""} onClick={() => onBoqChange("mode", "optimized")}>{t.optimized}</button>
          <button type="button" className={state.boq.mode === "baseline" ? "active-pill" : ""} onClick={() => onBoqChange("mode", "baseline")}>{t.baseline}</button>
        </div>
        <label>
          {t.slabAreaPerFloor}
          <input type="number" value={state.boq.slabArea} onChange={(e) => onBoqChange("slabArea", asNumber(e.target.value, 100))} />
        </label>
        <label>
          {t.numberOfFloors}
          <input type="number" value={state.boq.floorCount} onChange={(e) => onBoqChange("floorCount", asNumber(e.target.value, 1))} />
        </label>
        <label>
          {t.typicalCycleTime}
          <input type="number" value={state.boq.cycleDays} onChange={(e) => onBoqChange("cycleDays", asNumber(e.target.value, 1))} />
        </label>
        <label>
          {t.standardization}
          <input type="number" min="0" max="100" value={state.boq.standardization} onChange={(e) => onBoqChange("standardization", asNumber(e.target.value, 0))} />
        </label>
        <label>
          {t.wastageAllowance}
          <input type="number" min="0" max="40" value={state.boq.wastage} onChange={(e) => onBoqChange("wastage", asNumber(e.target.value, 0))} />
        </label>
      </article>

      <article className="glass panel">
        <h3>{t.logisticsIntelligence}</h3>
        <p>{logistics.warehouse}</p>
        <p>{logistics.distance} km from site</p>
        <p>{logistics.transfer}</p>
        <div className="map-box">Map placeholder: Google Maps route optimization integration point</div>
        <small>Transport: {formatINR(logisticsCosts.transport)} | Fuel: {formatINR(logisticsCosts.fuel)} | Delay Penalty: {formatINR(logisticsCosts.delayPenalty)}</small>
      </article>

      <article className="glass panel">
        <h3>{t.financialImpact}</h3>
        <div className="compare-chart">
          <div>
            <span>{t.old}</span>
            <i style={{ height: `${oldCost > 0 ? maxHeight : 0}px` }} />
            <b>{formatINR(oldCost)}</b>
          </div>
          <div>
            <span>{t.ai}</span>
            <i style={{ height: `${oldCost > 0 ? (optimized / oldCost) * maxHeight : 0}px` }} />
            <b>{formatINR(optimized)}</b>
          </div>
        </div>
      </article>

      <article className="glass panel">
        <h3>{t.blueprintUpload}</h3>
        <input type="file" accept=".pdf,.png,.jpg,.jpeg" onChange={onBlueprintUpload} />
        <p>{state.project.blueprintName ? `Loaded: ${state.project.blueprintName}` : t.noBlueprint}</p>
        <small>{t.uploadNote}</small>
      </article>
    </div>
  );
}

function AnalyticsPage({ boq, logistics, state, setWorkOrderMessage, t }) {
  const manual = boq.manualTotal;
  const optimized = boq.optimizedTotal;
  const wasteAvoided = Math.min(68, Math.max(18, Math.round(asNumber(state.boq.standardization, 0) * 0.6)));
  const failureProbability = Math.min(45, Math.max(8, 36 - asNumber(state.project.targetReuse, 1)));

  return (
    <div className="grid-two fade-in">
      <article className="glass panel">
        <h3>{t.predictiveMetrics}</h3>
        <p>{t.costSavings}: {formatINR(boq.savings)}</p>
        <p>{t.kitUnits}: {Math.round(boq.quantities.panel * 0.11)}</p>
        <p>CO2 Reduction: {boq.co2} tCO2</p>
        <p>{t.treeEquivalency}: {boq.treeEq} trees</p>
      </article>

      <article className="glass panel">
        <h3>{t.boqComparison}</h3>
        <div className="bars">
          <div>
            <span>{t.manual}</span>
            <i style={{ width: "100%" }} />
            <b>{formatINR(manual)}</b>
          </div>
          <div>
            <span>{t.aiOptimized}</span>
            <i style={{ width: `${(optimized / manual) * 100}%` }} />
            <b>{formatINR(optimized)}</b>
          </div>
        </div>
      </article>

      <article className="glass panel">
        <h3>{t.wastePrediction}</h3>
        <div className="pie" style={{ "--val": `${wasteAvoided}%` }} />
        <small>{wasteAvoided}% avoided waste by repetition strategy</small>
      </article>

      <article className="glass panel">
        <h3>{t.resourceUtilization}</h3>
        <div className="donut" />
        <small>Purchase 34% | Transfer 29% | Reuse 30% | Loss 7%</small>
      </article>

      <article className="glass panel wide">
        <h3>{t.aiRecommendations}</h3>
        <ul>
          <li>Switch deck supplier batch B for 3.2% cost reduction.</li>
          <li>Pre-position props from {logistics.warehouse} to avoid tomorrow morning delay.</li>
          <li>Over-ordering risk: panel quantity crossing threshold by 7.5%.</li>
          <li>Failure probability: {failureProbability}% on red-group panels within 3 cycles.</li>
        </ul>
      </article>

      <article className="glass panel">
        <h3>{t.mlPrediction}</h3>
        <p>Material Demand Forecast (next 2 cycles): +{Math.max(5, Math.round(state.boq.slabArea / 500))}%</p>
        <p>Cost Fluctuation Risk: {Math.max(7, Math.round(state.boq.wastage * 1.7))}%</p>
        <p>Failure Probability: {failureProbability}%</p>
        <button type="button" onClick={() => setWorkOrderMessage("ML forecast shared to planning and procurement teams.")}>{t.simulateForecast}</button>
      </article>

      <article className="glass panel wide">
        <h3>{t.historicalBenchmarking}</h3>
        <div className="line-chart">
          <span style={{ left: "8%", top: "68%" }} />
          <span style={{ left: "28%", top: "52%" }} />
          <span style={{ left: "48%", top: "46%" }} />
          <span style={{ left: "68%", top: "34%" }} />
          <span style={{ left: "88%", top: "30%" }} />
        </div>
        <small>Current project tracks 14% better than historical average.</small>
      </article>
    </div>
  );
}

function HealthPage({ panelGroups, onDropPanel, setWorkOrderMessage, onExportPdf, onExportExcel, exportCelebration, t }) {
  const all = [...panelGroups.green, ...panelGroups.yellow, ...panelGroups.red];

  return (
    <div className="grid-two fade-in">
      <article className="glass panel">
        <h3>{t.assetIntegrity}</h3>
        <div className="progress-track tall">
          <span className="used" style={{ width: "73%" }} />
        </div>
        <p>Average panel integrity: 73%</p>
        <p className="warn">Fatigue warning: 2 panels approaching cycle limit.</p>
      </article>

      <article className="glass panel">
        <h3>{t.predictiveFailureRisk}</h3>
        <ul>
          <li>P-018: 41% risk</li>
          <li>P-031: 26% risk</li>
          <li>P-066: 22% risk</li>
        </ul>
        <button type="button" onClick={() => setWorkOrderMessage("Maintenance work order requested: lubrication + joint inspection.")}>{t.requestWorkOrder}</button>
      </article>

      <article className="glass panel wide">
        <h3>{t.panelGrouping}</h3>
        <div className="drag-grid">
          {[
            ["green", t.greenZone],
            ["yellow", t.yellowZone],
            ["red", t.redZone]
          ].map(([zone, label]) => (
            <div key={zone} className={`drop-zone ${zone}`} onDragOver={(e) => e.preventDefault()} onDrop={(e) => onDropPanel(e, zone)}>
              <h4>{label}</h4>
              <div className="chip-wrap">
                {panelGroups[zone].map((id) => (
                  <span key={id} draggable onDragStart={(e) => e.dataTransfer.setData("panel-id", id)}>{id}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <small>{t.dragHint}</small>
      </article>

      <article className="glass panel">
        <h3>{t.executiveExport}</h3>
        <p>{t.exportDesc}</p>
        <div className="inline-form">
          <button type="button" onClick={onExportPdf}>{t.exportPdf}</button>
          <button type="button" onClick={onExportExcel}>{t.exportExcel}</button>
        </div>
        {exportCelebration ? <div className="balloons" /> : null}
      </article>

      <article className="glass panel">
        <h3>{t.siteLogs}</h3>
        <table className="mini-table">
          <tbody>
            <tr><td>08:45</td><td>Panel transfer queued</td></tr>
            <tr><td>09:12</td><td>Maintenance alert raised</td></tr>
            <tr><td>09:35</td><td>Export shared to leadership</td></tr>
          </tbody>
        </table>
      </article>

      <article className="glass panel wide">
        <h3>{t.inventorySnapshot}</h3>
        <p>Total tracked panels: {all.length}</p>
        <p>{t.reusable}: {Math.max(1, panelGroups.green.length * 4)} cycles left</p>
        <div className="trend-mini">
          <span style={{ height: "32%" }} />
          <span style={{ height: "54%" }} />
          <span style={{ height: "48%" }} />
          <span style={{ height: "70%" }} />
          <span style={{ height: "66%" }} />
          <span style={{ height: "82%" }} />
        </div>
      </article>
    </div>
  );
}











