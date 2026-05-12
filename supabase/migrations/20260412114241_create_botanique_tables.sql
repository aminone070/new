
/*
  # Botanique – Newsletter & Consultation Tables

  1. New Tables
    - `newsletter_subscriptions`
      - `id` (uuid, primary key)
      - `email` (text, unique, not null)
      - `name` (text)
      - `language` (text, default 'en') – preferred language
      - `created_at` (timestamptz)

    - `consultation_bookings`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `email` (text, not null)
      - `phone` (text)
      - `skin_concern` (text) – acne, dryness, aging, hyperpigmentation, sensitivity, other
      - `preferred_date` (date)
      - `message` (text)
      - `status` (text, default 'pending') – pending, confirmed, completed, cancelled
      - `created_at` (timestamptz)

  2. Security
    - RLS enabled on both tables
    - Public INSERT for submissions (no auth required for visitors)
    - No public SELECT (admin only via service role)

  3. Notes
    - Both tables allow anonymous inserts for lead capture
    - No user-facing read access to protect privacy
*/

CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text DEFAULT '',
  language text DEFAULT 'en',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscriptions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (email IS NOT NULL AND email != '');

CREATE TABLE IF NOT EXISTS consultation_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  skin_concern text DEFAULT 'general',
  preferred_date date,
  message text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultation_bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can book a consultation"
  ON consultation_bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (name IS NOT NULL AND email IS NOT NULL);
