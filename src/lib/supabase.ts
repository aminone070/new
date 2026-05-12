import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface NewsletterSubscription {
  email: string;
  name?: string;
  language?: string;
}

export interface ConsultationBooking {
  name: string;
  email: string;
  phone?: string;
  skin_concern?: string;
  preferred_date?: string;
  message?: string;
}

export async function subscribeNewsletter(data: NewsletterSubscription) {
  const { error } = await supabase.from('newsletter_subscriptions').insert({
    email: data.email,
    name: data.name || '',
    language: data.language || 'en',
  });
  if (error) throw error;
}

export async function bookConsultation(data: ConsultationBooking) {
  const { error } = await supabase.from('consultation_bookings').insert({
    name: data.name,
    email: data.email,
    phone: data.phone || '',
    skin_concern: data.skin_concern || 'general',
    preferred_date: data.preferred_date || null,
    message: data.message || '',
  });
  if (error) throw error;
}
