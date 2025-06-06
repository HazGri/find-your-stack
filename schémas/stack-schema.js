import { z } from "zod";

export const stackSchema = z.object({
  front_end: z.object({
    framework: z.string(),
    state_management: z.string(),
    styling: z.string(),
    mapping: z.string(),
    additional_libraries: z.array(z.string()),
    explanation: z.string(),
    alternative: z.string(),
    alternative_explanation: z.string(),
  }),
  back_end: z.object({
    framework: z.string(),
    web_framework: z.string(),
    authentication: z.string(),
    real_time: z.string(),
    additional_services: z.array(z.string()),
    explanation: z.string(),
    alternative: z.string(),
    alternative_explanation: z.string(),
  }),
  database: z.object({
    type: z.string(),
    database: z.string(),
    cloud_service: z.string(),
    explanation: z.string(),

    alternative: z.string(),
    alternative_explanation: z.string(),
  }),
  additional_features: z.array(z.string()),
  explanation: z.string(),
});
