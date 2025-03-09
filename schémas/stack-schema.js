import { z } from "zod";


export const stackSchema = z.object({
  front_end: z.object({
    framework: z.string(),
    state_management: z.string(),
    styling: z.string(),
    mapping: z.string(),
    additional_libraries: z.array(z.string()).optional(),
  }),
  back_end: z.object({
    framework: z.string(),
    web_framework: z.string(),
    authentication: z.string(),
    real_time: z.string(),
    additional_services: z.array(z.string()).optional(),
  }),
  database: z.object({
    type: z.string(),
    database: z.string(),
    cloud_service: z.string().optional(),
  }),
  additional_features: z.array(z.string()).optional(),
});


