const colorData = [
  {label: "10R_6_6", value: "rgb(196,131,111)"},
  {label: "7-5R_6_6", value: "rgb(196,131,120)"},
  {label: "5R_6_6", value: "rgb(196,130,126)"},
  {label: "2-5R_6_6", value: "rgb(195,130,132)"},

  {label: "10RP_6_6", value: "rgb(194,130,138)"},
  {label: "7-5RP_6_6", value: "rgb(191,130,145)"},
  {label: "5RP_6_6", value: "rgb(188,131,151)"},
  {label: "2-5RP_6_6", value: "rgb(183,132,160)"},

  {label: "10P_6_6", value: "rgb(178,134,167)"},
  {label: "7-5P_6_6", value: "rgb(172,135,173)"},
  {label: "5P_6_6", value: "rgb(163,138,179)"},
  {label: "2-5P_6_6", value: "rgb(155,140,183)"},

  {label: "10BP_6_6", value: "rgb(147,142,186)"},
  {label: "7-5BP_6_6", value: "rgb(136,145,188)"},
  {label: "5BP_6_6", value: "rgb(122,149,188)"},
  {label: "2-5BP_6_6", value: "rgb(111,151,187)"},

  {label: "10B_6_6", value: "rgb(98,154,185)"},
  {label: "7-5B_6_6", value: "rgb(87,156,183)"},
  {label: "5B_6_6", value: "rgb(75,158,179)"},
  {label: "2-5B_6_6", value: "rgb(64,160,174)"},

  {label: "10BG_6_6", value: "rgb(61,161,168)"},
  {label: "7-5BG_6_6", value: "rgb(61,162,161)"},
  {label: "5BG_6_6", value: "rgb(63,162,154)"},
  {label: "2-5BG_6_6", value: "rgb(69,163,145)"},

  {label: "10G_6_6", value: "rgb(74,163,140)"},
  {label: "7-5G_6_6", value: "rgb(79,163,134)"},
  {label: "5G_6_6", value: "rgb(84,162,127)"},
  {label: "2-5G_6_6", value: "rgb(94,162,117)"},

  {label: "10GY_6_6", value: "rgb(108,160,103)"},
  {label: "7-5GY_6_6", value: "rgb(121,158,92)"},
  {label: "5GY_6_6", value: "rgb(135,156,79)"},
  {label: "2-5GY_6_6", value: "rgb(145,153,72)"},

  {label: "10Y_6_6", value: "rgb(154,151,67)"},
  {label: "7-5Y_6_6", value: "rgb(161,149,67)"},
  {label: "5Y_6_6", value: "rgb(168,146,69)"},
  {label: "2-5Y_6_6", value: "rgb(175,143,73)"},

  {label: "10YR_6_6", value: "rgb(182,140,80)"},
  {label: "7-5YR_6_6", value: "rgb(188,137,88)"},
  {label: "5YR_6_6", value: "rgb(192,135,94)"},
  {label: "2-5YR_6_6", value: "rgb(195,133,103)"},
];

const setupColors = (function () {
  let colorDataCopy = JSON.parse(JSON.stringify(colorData));
  for (var i = 0; i < colorDataCopy.length; i++) {
    colorDataCopy[i].color = colorDataCopy[i].value;
  }

  return colorDataCopy;
})();

const colorListData = setupColors;
export { colorData, colorListData };

