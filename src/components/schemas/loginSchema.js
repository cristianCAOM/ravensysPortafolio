import { z } from 'zod';

const loginSchema = z.object({
  username: z.string().min(3).max(50).regex(/^[a-zA-Z0-9_-]*$/),
  password: z.string().min(8).max(128)
});
export default loginSchema;