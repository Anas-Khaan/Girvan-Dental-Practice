export type PageId =
  | 'home'
  | 'about'
  | 'team'
  | 'treatments'
  | 'fees'
  | 'emergency'
  | 'booking'
  | 'contact';

export interface TreatmentCategory {
  id: string;
  name: string;
  shortDesc: string;
  icon: string;
}

export interface TreatmentItem {
  id: string;
  categoryId: string;
  name: string;
  summary: string;
  fullDescription: string;
  isNhs: boolean;
  isPrivate: boolean;
  keyBenefits: string[];
  startingPrice?: string;
  duration?: string;
  suitableFor?: string;
  steps?: string[];
  imageUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  gdcNumber: string;
  joinedYear?: string;
  bio: string;
  specialties: string[];
  avatarUrl: string;
}

export interface SupportStaffMember {
  id: string;
  name: string;
  role: string;
  category: 'hygiene' | 'nursing' | 'management' | 'reception';
  qualifications?: string;
  gdcNumber?: string;
  details: string;
  avatarUrl: string;
}

export interface FeeItem {
  category: string;
  service: string;
  privateFee: string;
  denplanIncluded: boolean;
  denplanDiscountNote?: string;
  nhsAvailable: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  treatment: string;
  rating: number;
  comment: string;
  date: string;
}

export interface AppointmentBooking {
  id: string;
  patientType: 'existing-nhs' | 'new-patient' | 'private' | 'denplan' | 'emergency' | 'childsmile';
  treatmentType: string;
  dentistPreference: string;
  preferredDate: string;
  preferredTime: 'morning' | 'afternoon' | 'any';
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  postcode: string;
  chiNumber?: string;
  notes?: string;
  hasEmergencyPain?: boolean;
  createdAt: string;
}

export interface EmergencyTriageOption {
  id: string;
  title: string;
  severity: 'high' | 'medium' | 'routine';
  immediateAdvice: string;
  actionGuidance: string;
}
