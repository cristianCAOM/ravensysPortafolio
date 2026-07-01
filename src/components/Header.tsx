import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
// import PeopleIcon from "@mui/icons-material/People";
// import SecurityIcon from "@mui/icons-material/Security";
import FolderIcon from "@mui/icons-material/Folder";
// import AssignmentIcon from "@mui/icons-material/Assignment";
// import SchoolIcon from "@mui/icons-material/School";
// import PaymentsIcon from "@mui/icons-material/Payments";
// import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export function Header() {
  const [user, setUser] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(
      localStorage.getItem("user") || "{}"
    );

    setUser(userData);
  }, []);

  const iniciales =
    user?.username?.charAt(0)?.toUpperCase() || "";

  const handleLogout = () => {
    localStorage.clear();

    navigate("/login", {
      replace: true,
    });
  };

  const menuItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      path: "/dashboard",
    },
    /*  {
      text: "Usuarios",
      icon: <PeopleIcon />,
      path: "/usuarios",
    },
    {
      text: "Roles",
      icon: <SecurityIcon />,
      path: "/roles",
    }, */
    {
      text: "Proyectos",
      icon: <FolderIcon />,
      path: "/project",
    },
    /* {
      text: "Asignaciones",
      icon: <AssignmentIcon />,
      path: "/asignaciones",
    },
    {
      text: "Configuración",
      icon: <SettingsIcon />,
      path: "/configuracion",
    }, */
  ];

  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-background/50 backdrop-blur-sm z-10 relative">

        {/* IZQUIERDA */}
        <div className="flex items-center gap-3">

          <IconButton
            onClick={() => setOpen(true)}
            sx={{ color: "white" }}
          >
            <MenuIcon />
          </IconButton>

          <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center shadow-glow-primary bg-background">
            <img
              src="src/assets/image/logo_ravensys.png"
              alt="Ravensys"
              className="w-9 h-8 object-contain"
            />
          </div>

          <h1 className="font-orbitron font-bold text-xl tracking-widest text-primary">
            RAVENSYS
          </h1>

        </div>

        {/* DERECHA */}
        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-orbitron font-bold text-white shadow-glow-primary">
            {iniciales}
          </div>

        </div>

      </header>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div
          style={{
            width: 280,
            height: "100%",
            background: "#111827",
            color: "white",
          }}
        >
          <List>
            {menuItems.map((item) => (
              <ListItemButton
                key={item.text}
                onClick={() => {
                  navigate(item.path);
                  setOpen(false);
                }}
              >
                <ListItemIcon
                  sx={{ color: "white" }}
                >
                  {item.icon}
                </ListItemIcon>

                <ListItemText
                  primary={item.text}
                />
              </ListItemButton>
            ))}
          </List>

          <Divider />

          <List>
            <ListItemButton
              onClick={handleLogout}
            >
              <ListItemIcon
                sx={{ color: "#ef4444" }}
              >
                <LogoutIcon />
              </ListItemIcon>

              <ListItemText
                primary="Cerrar sesión"
              />
            </ListItemButton>
          </List>
        </div>
      </Drawer>
    </>
  );
}