import { z } from 'zod';

const loginSchema = z.object({
  nombreUsuario: z.string().min(3).max(50).regex(/^[a-zA-Z0-9_-]*$/),
  contrasena: z.string().min(8).max(128)
});
export default loginSchema;