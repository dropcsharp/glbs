export interface Service {
  title: string;
  description: string;
  href: string;
  image?: string;
}

export interface BookingService {
  id: string;
  title: string;
  duration: string;
  price: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  image?: string;
}

export interface ContactFormData {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  wantsCallback: "ja" | "nej";
  message?: string;
  service?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
