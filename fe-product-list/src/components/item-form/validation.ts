import { z } from 'zod';

export const schema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters long'),
  imageUrl: z.string().url('Invalid image url'),
  count: z.number().int().min(0, 'Count must be a positive number'),
  weight: z.number().int().min(0, 'Weight must be a positive number'),
});
