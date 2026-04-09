export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  year?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  serviceType: string;
}

export type NavItem = {
  label: string;
  href: string;
};
