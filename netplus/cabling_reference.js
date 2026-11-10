// Connector types in the supplied Network+ N10-009 objectives and example cable reaches.
const connectorReference = [
  ["RJ45 (8P8C)", "Cat5/5e/6/6a/8 twisted-pair copper", "Ethernet wall jacks, patch cords, switches, and NICs."],
  ["RJ11", "Telephone twisted pair", "Analog telephone and some DSL connections; narrower than an Ethernet RJ45 plug."],
  ["BNC", "Coaxial cable", "Bayonet connector used by legacy coax Ethernet, radio, and video equipment."],
  ["F-type", "Coaxial cable, commonly RG6", "Cable TV and cable-modem service."],
  ["SC", "Single-mode or multimode fiber", "Larger push-pull fiber connector; used on patch panels and some optics."],
  ["LC", "Single-mode or multimode fiber", "Compact fiber connector common on SFP/SFP+ optics."],
  ["ST", "Single-mode or multimode fiber", "Bayonet-style fiber connector found on some older installations."],
  ["MPO", "Multi-fiber ribbon cable", "Several fiber strands in one connector for dense parallel optical links."],
  ["SFP+/QSFP DAC ends", "Direct attach copper (twinax)", "A short preterminated cable assembly between compatible switch or server ports; the module housing is a transceiver form factor."]
];

const cableDistanceReference = [
  ["Cat5", "100BASE-TX", "100 m (328 ft)", "Legacy Category 5 copper at 100 Mb/s."],
  ["Cat5e", "1000BASE-T", "100 m (328 ft)", "Common 1 Gb/s copper channel."],
  ["Cat6", "1000BASE-T / 10GBASE-T", "100 m at 1 Gb/s; about 37–55 m at 10 Gb/s", "The 10 Gb/s reach depends on alien crosstalk and installation quality."],
  ["Cat6a", "10GBASE-T", "100 m (328 ft)", "The usual choice for a full-length 10 Gb/s copper channel."],
  ["Cat8", "25/40GBASE-T", "30 m (98 ft)", "Short shielded data-center channel."],
  ["OM3 multimode fiber", "10GBASE-SR optic", "300 m (984 ft)", "Short-reach 10 Gb/s example; match optic and fiber."],
  ["OM4 multimode fiber", "10GBASE-SR optic", "400 m (1,312 ft)", "Higher-grade multimode example using the same 10GBASE-SR family."],
  ["Single-mode fiber", "10GBASE-LR optic", "10 km (6.2 mi)", "Long-reach example; fiber alone does not determine the distance."],
  ["Single-mode fiber", "10GBASE-ER optic", "40 km (24.9 mi)", "Extended-reach example with a compatible optic and optical budget."],
  ["DAC twinax", "SFP+/QSFP direct attach", "Typically a few meters", "Check the exact cable assembly and switch datasheets; passive and active models differ."]
];
