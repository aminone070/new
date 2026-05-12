
/*
  # Botanique – Orders & Cart Tables

  1. New Tables
    - `orders`
      - `id` (uuid, primary key)
      - `email` (text, not null)
      - `full_name` (text, not null)
      - `phone` (text)
      - `address_line1` (text, not null)
      - `address_line2` (text)
      - `city` (text, not null)
      - `state` (text)
      - `postal_code` (text, not null)
      - `country` (text, default 'US')
      - `subtotal` (numeric, not null)
      - `shipping` (numeric, default 0)
      - `tax` (numeric, default 0)
      - `total` (numeric, not null)
      - `status` (text, default 'pending')
      - `language` (text, default 'en')
      - `created_at` (timestamptz)

    - `order_items`
      - `id` (uuid, primary key)
      - `order_id` (uuid, FK to orders)
      - `product_id` (text, not null)
      - `product_name` (text, not null)
      - `price` (numeric, not null)
      - `quantity` (integer, not null, default 1)
      - `created_at` (timestamptz)

  2. Security
    - RLS enabled on both tables
    - Public INSERT for orders and order_items (checkout flow)
    - No public SELECT (admin only via service role)

  3. Notes
    - Cascade delete order_items when order is deleted
    - Index on order_id for fast lookups
*/

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  full_name text NOT NULL,
  phone text DEFAULT '',
  address_line1 text NOT NULL,
  address_line2 text DEFAULT '',
  city text NOT NULL,
  state text DEFAULT '',
  postal_code text NOT NULL,
  country text DEFAULT 'US',
  subtotal numeric NOT NULL DEFAULT 0,
  shipping numeric NOT NULL DEFAULT 0,
  tax numeric NOT NULL DEFAULT 0,
  total numeric NOT NULL DEFAULT 0,
  status text DEFAULT 'pending',
  language text DEFAULT 'en',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create orders"
  ON orders FOR INSERT
  TO anon, authenticated
  WITH CHECK (email IS NOT NULL AND full_name IS NOT NULL);

CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id text NOT NULL,
  product_name text NOT NULL,
  price numeric NOT NULL,
  quantity integer NOT NULL DEFAULT 1,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create order items"
  ON order_items FOR INSERT
  TO anon, authenticated
  WITH CHECK (product_id IS NOT NULL AND price IS NOT NULL);

CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);
