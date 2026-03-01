import { useEffect, useMemo, useState } from "react";
import companyLogo from "../assets/logo.png";

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
    floors: 0,
    areaPerFloor: 0,
    targetReuse: 0,
    locked: false,
    blueprintName: ""
  },
  boq: {
    slabArea: 0,
    floorCount: 0,
    cycleDays: 0,
    standardization: 0,
    wastage: 0,
    mode: "optimized"
  },
  appliedProject: {
    site: "Mumbai",
    floors: 0,
    areaPerFloor: 0,
    targetReuse: 0,
    locked: false,
    blueprintName: ""
  },
  appliedBoq: {
    slabArea: 0,
    floorCount: 0,
    cycleDays: 0,
    standardization: 0,
    wastage: 0,
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

function formatINR(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

function formatINRForPdf(value) {
  return `INR ${new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(value)}`;
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

function downloadExecutivePdf(filename, report) {
  const encoder = new TextEncoder();
  const escapeText = (text) => String(text).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  const commands = [];
  const page = { width: 595, height: 842, left: 44, right: 44, top: 800 };
  const contentWidth = page.width - page.left - page.right;

  function writeText(x, y, text, size = 11) {
    commands.push(`BT /F1 ${size} Tf 1 0 0 1 ${x} ${y} Tm (${escapeText(text)}) Tj ET`);
  }

  function drawLine(x1, y1, x2, y2) {
    commands.push(`${x1} ${y1} m ${x2} ${y2} l S`);
  }

  function drawRect(x, y, w, h) {
    commands.push(`${x} ${y} ${w} ${h} re S`);
  }

  function drawTable(startX, startY, colWidths, headers, rows, rowHeight = 18) {
    const tableWidth = colWidths.reduce((sum, width) => sum + width, 0);
    const rowCount = rows.length + 1;
    const tableHeight = rowCount * rowHeight;
    const bottomY = startY - tableHeight;
    drawRect(startX, bottomY, tableWidth, tableHeight);

    let x = startX;
    for (let i = 0; i < colWidths.length - 1; i += 1) {
      x += colWidths[i];
      drawLine(x, startY, x, bottomY);
    }

    for (let i = 1; i < rowCount; i += 1) {
      const y = startY - i * rowHeight;
      drawLine(startX, y, startX + tableWidth, y);
    }

    headers.forEach((header, index) => {
      writeText(startX + colWidths.slice(0, index).reduce((sum, width) => sum + width, 0) + 6, startY - 13, header, 10);
    });

    rows.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        writeText(
          startX + colWidths.slice(0, colIndex).reduce((sum, width) => sum + width, 0) + 6,
          startY - (rowIndex + 2) * rowHeight + 5,
          String(cell),
          10
        );
      });
    });

    return bottomY - 18;
  }

  let y = page.top;
  writeText(page.left, y, "L&T Construction - Executive BoQ Export", 18);
  y -= 24;
  writeText(page.left, y, `Generated: ${report.generatedAt}`, 11);
  y -= 18;
  writeText(page.left, y, `Report ID: ${report.reportId}`, 11);

  y -= 30;
  writeText(page.left, y, "Project Summary", 13);
  y -= 10;
  y = drawTable(
    page.left,
    y,
    [200, contentWidth - 200],
    ["Metric", "Value"],
    [
      ["Site", report.site],
      ["Floors", report.floors],
      ["Slab Area", `${report.slabArea} sq m`],
      ["Cycle Time", `${report.cycleTime} days`]
    ]
  );

  writeText(page.left, y, "BoQ Totals", 13);
  y -= 10;
  y = drawTable(
    page.left,
    y,
    [240, contentWidth - 240],
    ["Metric", "Amount"],
    [
      ["Manual Total", report.manualTotal],
      ["AI Optimized Total", report.aiTotal],
      ["Savings", report.savings]
    ]
  );

  writeText(page.left, y, "Quantities and Cost Detail", 13);
  y -= 10;
  y = drawTable(
    page.left,
    y,
    [130, 90, 110, contentWidth - 330],
    ["Component", "Quantity", "Rate", "Amount"],
    report.quantities.map((item) => [item.name, item.quantity, item.rate, item.amount])
  );

  writeText(page.left, Math.max(36, y), "Generated by L&T Construction Analytics", 9);

  const streamBody = commands.join("\n");

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

function downloadStyledExcel(filename, payload) {
  const rowsHtml = payload.rows
    .map((row) => {
      const tag = row.type === "header" ? "th" : "td";
      const cls = row.className ? ` class="${row.className}"` : "";
      const cells = row.cells.map((cell) => `<${tag}>${String(cell)}</${tag}>`).join("");
      return `<tr${cls}>${cells}</tr>`;
    })
    .join("");

  const html = `
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: Calibri, Arial, sans-serif; }
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid #1f2f3b; padding: 6px 8px; font-size: 12pt; text-align: left; }
          .title td { background: #d9eef9; font-size: 14pt; font-weight: 700; }
          .section td { background: #edf5fb; font-weight: 700; }
          .empty td { border: 0; height: 8px; background: #ffffff; }
          .meta td:first-child { font-weight: 700; width: 220px; }
          .numeric { text-align: right; }
        </style>
      </head>
      <body>
        <table>${rowsHtml}</table>
      </body>
    </html>
  `;

  triggerDownload(filename, html, "application/vnd.ms-excel;charset=utf-8;");
}

export default function EnterpriseApp({ session, onLogout }) {
  const [state, setState] = useState(() => ({
    ...defaultState,
    project: { ...defaultState.project },
    boq: { ...defaultState.boq },
    appliedProject: { ...defaultState.appliedProject },
    appliedBoq: { ...defaultState.appliedBoq },
    panelGroups: {
      green: [...defaultState.panelGroups.green],
      yellow: [...defaultState.panelGroups.yellow],
      red: [...defaultState.panelGroups.red]
    },
    profileRole: session.role || defaultState.profileRole || "Engineer"
  }));
  const [notifOpen, setNotifOpen] = useState(false);
  const appliedProject = state.appliedProject || state.project;
  const appliedBoq = state.appliedBoq || state.boq;

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
    const delayWarning = asNumber(appliedBoq.cycleDays, 0) > 8;
    return [
      { kind: fatigue ? "critical" : "ok", title: fatigue ? "Inventory fatigue detected" : "Inventory healthy" },
      {
        kind: delayWarning ? "warning" : "ok",
        title: delayWarning ? "Two inbound trucks delayed by 45 minutes" : "Inbound logistics on schedule"
      },
      { kind: "ok", title: "AI optimization run completed successfully" }
    ];
  }, [state.panelGroups.red.length, appliedBoq.cycleDays]);

  const boq = useMemo(() => {
    const slabArea = asNumber(appliedBoq.slabArea, 0);
    const floors = asNumber(appliedBoq.floorCount, 0);
    const cycleDays = asNumber(appliedBoq.cycleDays, 0);
    const standardization = Math.min(asNumber(appliedBoq.standardization, 0), 100);
    const wastage = Math.min(asNumber(appliedBoq.wastage, 0), 40);

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
    const activeScenario = appliedBoq.mode === "optimized" ? optimizedScenario : manualScenario;

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
  }, [appliedBoq]);

  const logistics = logisticsDb[appliedProject.site];

  const logisticsCosts = useMemo(() => {
    const transport = Math.round(logistics.distance * 1800);
    const fuel = Math.round(logistics.distance * 640);
    const delayPenalty = asNumber(appliedBoq.cycleDays, 0) > 8 ? 125000 : 40000;
    return { transport, fuel, delayPenalty, total: transport + fuel + delayPenalty };
  }, [logistics.distance, appliedBoq.cycleDays]);

  const metrics = useMemo(() => {
    const utilization = Math.min(97, Math.round((appliedProject.targetReuse / 25) * 100));
    const logisticsScore = Math.max(72, 94 - logistics.distance / 2);
    return {
      totalCost: formatINR(boq.totalCost),
      costSaved: formatINR(boq.savings),
      co2: `${boq.co2} metric tons of CO2`,
      utilization: `${utilization}%`,
      logistics: `${logisticsScore.toFixed(1)}%`
    };
  }, [boq.totalCost, boq.savings, boq.co2, logistics.distance, appliedProject.targetReuse]);

  function setPage(page) {
    setState((prev) => ({ ...prev, page }));
  }

  function updateProject(key, value) {
    setState((prev) => ({ ...prev, project: { ...prev.project, [key]: value, locked: false } }));
  }

  function updateBoq(key, value) {
    setState((prev) => ({ ...prev, boq: { ...prev.boq, [key]: value }, project: { ...prev.project, locked: false } }));
  }

  function applyConfig() {
    setState((prev) => ({
      ...prev,
      appliedProject: { ...prev.project, locked: false },
      appliedBoq: { ...prev.boq },
      project: { ...prev.project, locked: true }
    }));
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
      project: { ...prev.project, blueprintName: file.name, locked: false },
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
    const pdfReport = {
      reportId: `BOQ-${Date.now()}`,
      generatedAt: new Date().toLocaleString(),
      site: appliedProject.site,
      floors: appliedBoq.floorCount,
      slabArea: appliedBoq.slabArea,
      cycleTime: appliedBoq.cycleDays,
      manualTotal: formatINRForPdf(boq.manualTotal),
      aiTotal: formatINRForPdf(boq.optimizedTotal),
      savings: formatINRForPdf(boq.savings),
      quantities: [
        {
          name: "Panel",
          quantity: boq.quantities.panel,
          rate: formatINRForPdf(boq.rates.panel),
          amount: formatINRForPdf(boq.quantities.panel * boq.rates.panel)
        },
        {
          name: "Beam",
          quantity: boq.quantities.beam,
          rate: formatINRForPdf(boq.rates.beam),
          amount: formatINRForPdf(boq.quantities.beam * boq.rates.beam)
        },
        {
          name: "Prop",
          quantity: boq.quantities.prop,
          rate: formatINRForPdf(boq.rates.prop),
          amount: formatINRForPdf(boq.quantities.prop * boq.rates.prop)
        },
        {
          name: "Deck",
          quantity: boq.quantities.deck,
          rate: formatINRForPdf(boq.rates.deck),
          amount: formatINRForPdf(boq.quantities.deck * boq.rates.deck)
        }
      ]
    };

    downloadExecutivePdf(`createch-boq-${Date.now()}.pdf`, pdfReport);
    setState((prev) => ({ ...prev, exportCelebration: true }));
    setWorkOrderMessage(`PDF downloaded at ${new Date().toLocaleTimeString()}.`);
  }

  function exportBoqExcel() {
    const reportId = `BOQ-${Date.now()}`;
    const rows = [
      { type: "data", className: "title", cells: ["L&T Construction - Executive BoQ Export", "", "", ""] },
      { type: "data", className: "meta", cells: ["Generated At", new Date().toLocaleString(), "", ""] },
      { type: "data", className: "meta", cells: ["Report ID", reportId, "", ""] },
      { type: "data", className: "empty", cells: ["", "", "", ""] },
      { type: "data", className: "section", cells: ["Project Summary", "", "", ""] },
      { type: "header", cells: ["Metric", "Value", "", ""] },
      { type: "data", cells: ["Site", appliedProject.site, "", ""] },
      { type: "data", cells: ["Floors", appliedBoq.floorCount, "", ""] },
      { type: "data", cells: ["Slab Area (sq m)", appliedBoq.slabArea, "", ""] },
      { type: "data", cells: ["Cycle Time (days)", appliedBoq.cycleDays, "", ""] },
      { type: "data", className: "empty", cells: ["", "", "", ""] },
      { type: "data", className: "section", cells: ["BoQ Totals", "", "", ""] },
      { type: "header", cells: ["Metric", "Amount (INR)", "", ""] },
      { type: "data", cells: ["Manual Total", formatINRForPdf(boq.manualTotal), "", ""] },
      { type: "data", cells: ["AI Optimized Total", formatINRForPdf(boq.optimizedTotal), "", ""] },
      { type: "data", cells: ["Savings", formatINRForPdf(boq.savings), "", ""] },
      { type: "data", className: "empty", cells: ["", "", "", ""] },
      { type: "data", className: "section", cells: ["Quantities and Cost Detail", "", "", ""] },
      { type: "header", cells: ["Component", "Quantity", "Rate (INR)", "Amount (INR)"] },
      { type: "data", cells: ["Panel", boq.quantities.panel, formatINRForPdf(boq.rates.panel), formatINRForPdf(boq.quantities.panel * boq.rates.panel)] },
      { type: "data", cells: ["Beam", boq.quantities.beam, formatINRForPdf(boq.rates.beam), formatINRForPdf(boq.quantities.beam * boq.rates.beam)] },
      { type: "data", cells: ["Prop", boq.quantities.prop, formatINRForPdf(boq.rates.prop), formatINRForPdf(boq.quantities.prop * boq.rates.prop)] },
      { type: "data", cells: ["Deck", boq.quantities.deck, formatINRForPdf(boq.rates.deck), formatINRForPdf(boq.quantities.deck * boq.rates.deck)] }
    ];

    downloadStyledExcel(`createch-boq-${Date.now()}.xls`, { rows });
    setState((prev) => ({ ...prev, exportCelebration: true }));
    setWorkOrderMessage(`Excel report downloaded at ${new Date().toLocaleTimeString()}.`);
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

      <div className={`workspace ${state.page === "dashboard" && notifOpen ? "notif-open" : ""}`}>
        {state.page === "dashboard" ? (
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
              <button
                type="button"
                className={`theme-switch ${state.theme === "light" ? "on" : "off"}`}
                onClick={() => setState((prev) => ({ ...prev, theme: prev.theme === "dark" ? "light" : "dark" }))}
                aria-label={state.theme === "dark" ? t.lightMode : t.darkMode}
              >
                <span className="theme-icon" aria-hidden="true">{state.theme === "dark" ? "🌙" : "☀️"}</span>
                <span className="theme-knob" aria-hidden="true" />
                <span className="sr-only">{state.theme === "dark" ? t.lightMode : t.darkMode}</span>
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
        ) : null}

        {state.page === "dashboard" && notifOpen ? <button type="button" className="notif-overlay" aria-label="Close notifications" onClick={() => setNotifOpen(false)} /> : null}

        {state.page === "setup" ? (
          <section className="kpi-row">
            <div className="glass kpi-card">
              <p>Total Cost (BoQ Model)</p>
              <strong>{metrics.totalCost}</strong>
              <small>{t.totalCostSaved} (Optimized vs Baseline): {metrics.costSaved}</small>
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
        ) : null}

        <main className="page-area">
          {state.page === "dashboard" ? (
            <DashboardPage session={session} state={state} logistics={logistics} logisticsCosts={logisticsCosts} onVoiceChange={(value) => setState((prev) => ({ ...prev, voiceQuery: value }))} onRunVoice={runVoiceCommand} t={t} />
          ) : null}

          {state.page === "setup" ? (
            <ProjectSetupPage state={state} onProjectChange={updateProject} onBoqChange={updateBoq} onBlueprintUpload={onBlueprintUpload} lockConfig={applyConfig} t={t} />
          ) : null}

          {state.page === "analytics" ? (
            <AnalyticsPage boq={boq} logistics={logistics} state={state} setWorkOrderMessage={setWorkOrderMessage} t={t} />
          ) : null}

          {state.page === "health" ? (
            <HealthPage panelGroups={state.panelGroups} onDropPanel={onDropPanel} setWorkOrderMessage={setWorkOrderMessage} onExportPdf={exportBoqPdf} onExportExcel={exportBoqExcel} exportCelebration={state.exportCelebration} t={t} />
          ) : null}
        </main>

        <footer className="app-footer">
          <p>Contact Us: <a href="tel:+919508426145">9508426145</a> | <a href="mailto:vishaljha9905@gmail.com">vishaljha9905@gmail.com</a></p>
          <p>All rights reserved @ LT construction</p>
        </footer>
      </div>
    </div>
  );
}

function DashboardPage({ session, state, logistics, logisticsCosts, onVoiceChange, onRunVoice, t }) {
  const appliedProject = state.appliedProject || state.project;
  return (
    <div className="grid-two fade-in">
      <article className="glass panel">
        <h3>{t.welcome}, {session.name}</h3>
        <p>{appliedProject.site} site is configured with {appliedProject.floors} floors and {appliedProject.targetReuse} reuse cycles.</p>
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

function ProjectSetupPage({ state, onProjectChange, onBoqChange, onBlueprintUpload, lockConfig, t }) {
  const appliedProject = state.appliedProject || state.project;
  const appliedBoq = state.appliedBoq || state.boq;
  const slabArea = asNumber(appliedBoq.slabArea, 0);
  const floors = asNumber(appliedBoq.floorCount, 0);
  const maxHeight = 160;
  const selectIfZero = (event) => {
    if (String(event.target.value) === "0") {
      event.target.select();
    }
  };

  const normalizeNumber = (event) => {
    const normalized = asNumber(event.target.value, 0);
    event.target.value = String(normalized);
    return normalized;
  };

  const oldCost = slabArea * floors * 460;
  const standardizationGain = Math.min(0.14, asNumber(appliedBoq.standardization, 0) / 1000);
  const reuseGain = Math.min(0.1, asNumber(appliedProject.targetReuse, 0) / 250);
  const wastagePenalty = Math.min(0.08, asNumber(appliedBoq.wastage, 0) / 300);
  const aiReduction = Math.max(0.06, Math.min(0.35, 0.12 + standardizationGain + reuseGain - wastagePenalty));
  const optimized = oldCost * (1 - aiReduction);
  const chartMax = Math.max(oldCost, optimized, 1);
  const savingsValue = Math.max(0, oldCost - optimized);
  const savingsPercent = oldCost > 0 ? (savingsValue / oldCost) * 100 : 0;
  const compareSeries = [
    { key: "old", label: t.old, value: oldCost, barClass: "old" },
    { key: "ai", label: t.ai, value: optimized, barClass: "ai" }
  ];

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
          <input type="number" value={state.project.floors} onFocus={selectIfZero} onChange={(e) => {
            const value = normalizeNumber(e);
            onProjectChange("floors", value);
            onBoqChange("floorCount", value);
          }} />
        </label>
        <label>
          {t.areaPerFloor}
          <input type="number" value={state.project.areaPerFloor} onFocus={selectIfZero} onChange={(e) => {
            const value = normalizeNumber(e);
            onProjectChange("areaPerFloor", value);
            onBoqChange("slabArea", value);
          }} />
        </label>
        <label>
          {t.targetReuse}: {state.project.targetReuse}
          <input type="range" min="0" max="25" value={state.project.targetReuse} onChange={(e) => onProjectChange("targetReuse", asNumber(e.target.value, 0))} />
        </label>
      </article>

      <article className="glass panel">
        <h3>{t.boqInputConsole}</h3>
        <div className="inline-form">
          <button type="button" className={state.boq.mode === "optimized" ? "active-pill" : ""} onClick={() => onBoqChange("mode", "optimized")}>{t.optimized}</button>
          <button type="button" className={state.boq.mode === "baseline" ? "active-pill" : ""} onClick={() => onBoqChange("mode", "baseline")}>{t.baseline}</button>
        </div>
        <label>
          {t.slabAreaPerFloor}
          <input type="number" value={state.boq.slabArea} onFocus={selectIfZero} onChange={(e) => onBoqChange("slabArea", normalizeNumber(e))} />
        </label>
        <label>
          {t.typicalCycleTime}
          <input type="number" value={state.boq.cycleDays} onFocus={selectIfZero} onChange={(e) => onBoqChange("cycleDays", normalizeNumber(e))} />
        </label>
        <label>
          {t.standardization}
          <input type="number" min="0" max="100" value={state.boq.standardization} onFocus={selectIfZero} onChange={(e) => onBoqChange("standardization", normalizeNumber(e))} />
        </label>
        <label>
          {t.wastageAllowance}
          <input type="number" min="0" max="40" value={state.boq.wastage} onFocus={selectIfZero} onChange={(e) => onBoqChange("wastage", normalizeNumber(e))} />
        </label>
        <button type="button" className="save-config-btn" onClick={lockConfig}>{t.save}</button>
        {state.project.locked ? <small className="ok">{t.configLocked}</small> : null}
      </article>

      <article className="glass panel">
        <div className="compare-head">
          <h3>{t.financialImpact}</h3>
          <small className="compare-total">Total Cost (Preview Model): {formatINR(optimized)}</small>
        </div>
        <div className="compare-chart">
          {compareSeries.map((point) => (
            <div key={point.key} className="compare-col">
              <span>{point.label}</span>
              <i className={point.barClass} style={{ height: `${(point.value / chartMax) * maxHeight}px` }} />
              <b>{formatINR(point.value)}</b>
            </div>
          ))}
        </div>
        <small className="compare-meta">Latest saved preview-model delta: {formatINR(savingsValue)} ({savingsPercent.toFixed(1)}%)</small>
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
  const appliedProject = state.appliedProject || state.project;
  const appliedBoq = state.appliedBoq || state.boq;
  const manual = boq.manualTotal;
  const optimized = boq.optimizedTotal;
  const wasteAvoided = Math.min(68, Math.max(18, Math.round(asNumber(appliedBoq.standardization, 0) * 0.6)));
  const failureProbability = Math.min(45, Math.max(8, 36 - asNumber(appliedProject.targetReuse, 0)));
  const baseDemandForecast = Math.max(5, Math.round(appliedBoq.slabArea / 500));
  const baseCostRisk = Math.max(7, Math.round(appliedBoq.wastage * 1.7));
  const [simulatedForecast, setSimulatedForecast] = useState(null);

  useEffect(() => {
    setSimulatedForecast(null);
  }, [appliedBoq.slabArea, appliedBoq.wastage, appliedProject.targetReuse]);

  function runForecastSimulation() {
    const jitter = () => Math.round((Math.random() * 2 - 1) * 6);
    const demand = Math.max(1, baseDemandForecast + jitter());
    const costRisk = Math.max(1, baseCostRisk + jitter());
    const failure = Math.min(95, Math.max(1, failureProbability + jitter()));
    setSimulatedForecast({ demand, costRisk, failure });
    setWorkOrderMessage(
      `Forecast simulation complete: Demand +${demand}%, Cost Risk ${costRisk}%, Failure ${failure}%.`
    );
  }

  const shownDemand = simulatedForecast?.demand ?? baseDemandForecast;
  const shownCostRisk = simulatedForecast?.costRisk ?? baseCostRisk;
  const shownFailure = simulatedForecast?.failure ?? failureProbability;
  const historicalBenchmark = useMemo(() => {
    const cycleDays = asNumber(appliedBoq.cycleDays, 0);
    const standardization = asNumber(appliedBoq.standardization, 0);
    const wastage = asNumber(appliedBoq.wastage, 0);
    const reuse = asNumber(appliedProject.targetReuse, 0);
    const savingsPct = manual > 0 ? ((manual - optimized) / manual) * 100 : 0;

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
    const historicalAvg = clamp(48 + standardization * 0.22 + reuse * 0.55 - wastage * 0.45 - cycleDays * 1.05, 20, 92);
    const currentPerf = clamp(historicalAvg + savingsPct * 0.75 + (100 - failureProbability) * 0.06, 20, 96);
    const deltaPct = historicalAvg > 0 ? ((currentPerf - historicalAvg) / historicalAvg) * 100 : 0;
    const pointScores = [
      clamp(historicalAvg - 8, 20, 96),
      clamp(historicalAvg - 4, 20, 96),
      clamp(historicalAvg - 1, 20, 96),
      clamp(historicalAvg + 2, 20, 96),
      currentPerf
    ];
    const xLabels = ["T-4", "T-3", "T-2", "T-1", "Current"];

    return {
      pointScores,
      xLabels,
      deltaPct: Math.abs(deltaPct),
      isBetter: deltaPct >= 0
    };
  }, [
    appliedBoq.cycleDays,
    appliedBoq.standardization,
    appliedBoq.wastage,
    appliedProject.targetReuse,
    manual,
    optimized,
    failureProbability
  ]);
  const historicalPlot = useMemo(() => {
    const width = 760;
    const height = 230;
    const margin = { top: 16, right: 18, bottom: 42, left: 48 };
    const yMin = 20;
    const yMax = 100;
    const xStep = (width - margin.left - margin.right) / (historicalBenchmark.pointScores.length - 1);

    const points = historicalBenchmark.pointScores.map((score, index) => {
      const x = margin.left + index * xStep;
      const y = margin.top + ((yMax - score) / (yMax - yMin)) * (height - margin.top - margin.bottom);
      return {
        x,
        y,
        score: Number(score.toFixed(1)),
        label: historicalBenchmark.xLabels[index]
      };
    });

    const yTicks = [20, 40, 60, 80, 100].map((tick) => ({
      value: tick,
      y: margin.top + ((yMax - tick) / (yMax - yMin)) * (height - margin.top - margin.bottom)
    }));

    return {
      width,
      height,
      margin,
      points,
      yTicks,
      polyline: points.map((point) => `${point.x},${point.y}`).join(" ")
    };
  }, [historicalBenchmark]);

  return (
    <div className="grid-two fade-in">
      <article className="glass panel">
        <h3>{t.predictiveMetrics}</h3>
        <p>{t.costSavings}: {formatINR(boq.savings)}</p>
        <p>{t.kitUnits}: {Math.round(boq.quantities.panel * 0.11)}</p>
        <p>CO2 Reduction: {boq.co2} metric tons of CO2</p>
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
        <div className="pie-legend">
          <span><i className="swatch avoided" /> Avoided waste (repetition strategy)</span>
          <span><i className="swatch remaining" /> Remaining waste/risk</span>
        </div>
      </article>

      <article className="glass panel">
        <h3>{t.resourceUtilization}</h3>
        <div className="donut" />
        <div className="util-legend">
          <span><i className="swatch purchase" /> Purchase: 34%</span>
          <span><i className="swatch transfer" /> Transfer: 29%</span>
          <span><i className="swatch reuse" /> Reuse: 30%</span>
          <span><i className="swatch loss" /> Loss: 7%</span>
        </div>
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
        <p>Material Demand Forecast (next 2 cycles): +{shownDemand}%</p>
        <p>Cost Fluctuation Risk: {shownCostRisk}%</p>
        <p>Failure Probability: {shownFailure}%</p>
        <button type="button" onClick={runForecastSimulation}>{t.simulateForecast}</button>
        <small>{simulatedForecast ? "Showing latest simulated scenario values." : "Shows baseline forecast from current saved configuration."}</small>
      </article>

      <article className="glass panel wide">
        <h3>{t.historicalBenchmarking}</h3>
        <div className="line-chart benchmark-chart">
          <svg viewBox={`0 0 ${historicalPlot.width} ${historicalPlot.height}`} aria-label="Historical benchmarking coordinate chart">
            {historicalPlot.yTicks.map((tick) => (
              <g key={`y-tick-${tick.value}`}>
                <line
                  x1={historicalPlot.margin.left}
                  y1={tick.y}
                  x2={historicalPlot.width - historicalPlot.margin.right}
                  y2={tick.y}
                  className="grid-line"
                />
                <text x={historicalPlot.margin.left - 8} y={tick.y + 4} textAnchor="end" className="axis-tick">{tick.value}</text>
              </g>
            ))}
            <line
              x1={historicalPlot.margin.left}
              y1={historicalPlot.margin.top}
              x2={historicalPlot.margin.left}
              y2={historicalPlot.height - historicalPlot.margin.bottom}
              className="axis-line"
            />
            <line
              x1={historicalPlot.margin.left}
              y1={historicalPlot.height - historicalPlot.margin.bottom}
              x2={historicalPlot.width - historicalPlot.margin.right}
              y2={historicalPlot.height - historicalPlot.margin.bottom}
              className="axis-line"
            />
            <polyline points={historicalPlot.polyline} className="trend-line" />
            {historicalPlot.points.map((point) => (
              <g key={`history-point-${point.label}`}>
                <circle cx={point.x} cy={point.y} r="5.5" className="trend-point" />
                <text x={point.x} y={historicalPlot.height - historicalPlot.margin.bottom + 16} textAnchor="middle" className="axis-tick">{point.label}</text>
              </g>
            ))}
          </svg>
        </div>
        <small className="benchmark-axis">X (Independent): Benchmark Period (T-4 to Current) | Y (Dependent): Performance Index (%)</small>
        <small>
          Current project tracks {historicalBenchmark.deltaPct.toFixed(1)}%{" "}
          {historicalBenchmark.isBetter ? "better" : "below"} than historical average.
        </small>
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
        <div className="inline-form export-actions">
          <button type="button" className="export-btn export-pdf" onClick={onExportPdf}>{t.exportPdf}</button>
          <button type="button" className="export-btn export-excel" onClick={onExportExcel}>{t.exportExcel}</button>
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











