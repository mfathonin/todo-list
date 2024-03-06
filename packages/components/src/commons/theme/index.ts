export const themes = {
  typography: {
    size: {
      h1: "20px",
      h2: "18px",
      h3: "16px",
      body: "13px",
      caption: "12px",
    },
    weight: {
      bold: 700,
      medium: 500,
      normal: 400,
    },
  },
  breakpoints: {
    sm: "425px",
    lg: "1024px",
  },
  colors: {
    primary: "#a5d8ff",
    secondary: "#40c057",
    error: "#ff8787",
    bg: "#fdf8f6",
    fg: "#605f5e",
  },
} as const;

export default themes;
