type StatusType = "construction" | "active" | "maintenance";

export const WEBSITE_STATUS: StatusType =
  (process.env.WEBSITE_STATUS as StatusType) || "construction";

export const GITHUB_URL = "https://github.com/7ibo/fayardthibault.fr";

export const PUBLIC_API_URL = "https://api.fayardthibault.fr/api";
export const CMS_ADMIN_URL = "https://api.fayardthibault.fr/admin";
