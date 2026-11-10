// Standards covered by the supplied Network+ Module 12 slides and instructor notes.
const wifiGenerations = [
  ["802.11 (original)", "Legacy", "2.4 GHz", "1–2 Mb/s; the original wireless LAN baseline."],
  ["802.11a", "Legacy", "5 GHz", "Up to 54 Mb/s; OFDM. More channels and less 2.4 GHz interference, but usually shorter range through obstacles."],
  ["802.11b", "Legacy", "2.4 GHz", "Up to 11 Mb/s; DSSS/CCK. Better range than 5 GHz in many buildings, but slower and more exposed to congestion."],
  ["802.11g", "Legacy", "2.4 GHz", "Up to 54 Mb/s; OFDM. Keeps the 2.4 GHz band and can support older 802.11b clients."],
  ["802.11n", "Wi-Fi 4", "2.4 or 5 GHz", "Adds MIMO and 40 MHz channel bonding; up to 600 Mb/s with the full four-stream design."],
  ["802.11ac", "Wi-Fi 5", "5 GHz", "Wider channels and more spatial streams for very high throughput; later versions add downlink MU-MIMO."],
  ["802.11ax", "Wi-Fi 6", "2.4 or 5 GHz", "Adds OFDMA and improved multiuser efficiency, especially when many clients share the channel."],
  ["802.11ax in 6 GHz", "Wi-Fi 6E", "6 GHz", "The same 802.11ax generation extended to the 6 GHz band, providing more channel choices for compatible devices."]
];
