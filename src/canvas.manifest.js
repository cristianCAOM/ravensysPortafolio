export const manifest = {
  screens: {
    scr_jhtgy0: { name: "Iniciar Sesión", route: "/", state: { "isLoggedIn": false }, position: { "x": 160, "y": 220 } },
    scr_pkt62k: { name: "Dashboard", route: "/", state: { "isLoggedIn": true }, position: { "x": 1560, "y": 220 } }
  },
  sections: {
    sec_lj158d: { name: "Authentication flow", x: 0, y: 0, width: 2920, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_lj158d", children: [
    { kind: "screen", id: "scr_jhtgy0" },
    { kind: "screen", id: "scr_pkt62k" }]
  }]

};