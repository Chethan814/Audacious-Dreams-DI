import { z } from "zod";

export const ENQUIRY_TYPES = [
  "Student or young person",
  "School, college or university",
  "Organisation or industry",
  "International organisation",
  "Other",
] as const;

export const enquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Full name must be at least 2 characters." })
    .max(100, { message: "Full name must not exceed 100 characters." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid official or institutional email address." })
    .max(120, { message: "Email must not exceed 120 characters." }),
  phone: z
    .string()
    .trim()
    .min(7, { message: "Phone number must be at least 7 digits." })
    .max(25, { message: "Phone number must not exceed 25 characters." })
    .regex(/^[+0-9\s\-()]+$/, { message: "Please enter a valid phone number." }),
  organisation: z
    .string()
    .trim()
    .min(2, { message: "Organisation / Institution name is required." })
    .max(150, { message: "Organisation name must not exceed 150 characters." }),
  designation: z
    .string()
    .trim()
    .min(2, { message: "Designation / Role is required." })
    .max(100, { message: "Designation must not exceed 100 characters." }),
  enquiryType: z.enum(ENQUIRY_TYPES, {
    message: "Please select an enquiry category.",
  }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(2000, { message: "Message must not exceed 2,000 characters." }),
  // Anti-spam security fields
  website_hp: z.string().max(0, { message: "Spam detected." }).optional().or(z.literal("")),
  formStartTime: z.number().optional(),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;
