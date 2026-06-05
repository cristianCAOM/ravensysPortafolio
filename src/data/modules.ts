import {
  Settings,
  Users,
  FileText,
  BarChart3,
  Wrench,
  Package } from
'lucide-react';

export const modules = [
{
  id: 'config',
  name: 'Configuración',
  description: 'Ajustes del sistema',
  icon: Settings,
  angle: -90,
  color: '#1e9fff'
},
{
  id: 'docs',
  name: 'Documentos',
  description: 'Archivos y registros',
  icon: FileText,
  angle: -30,
  color: '#22d3ee'
},
{
  id: 'tools',
  name: 'Herramientas',
  description: 'Utilidades del sistema',
  icon: Wrench,
  angle: 30,
  color: '#f59e0b'
},
{
  id: 'almacen',
  name: 'Almacén',
  description: 'Inventario y existencias',
  icon: Package,
  angle: 90,
  color: '#8b7cff'
},
{
  id: 'reports',
  name: 'Reportes',
  description: 'Estadísticas y análisis',
  icon: BarChart3,
  angle: 150,
  color: '#34d399'
},
{
  id: 'users',
  name: 'Usuarios',
  description: 'Gestión de usuarios',
  icon: Users,
  angle: 210,
  color: '#f472b6'
}];