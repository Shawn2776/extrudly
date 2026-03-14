-- ── Users ─────────────────────────────────────────────────────────────────────
-- Synced from Clerk webhooks
CREATE TABLE IF NOT EXISTS users (
  id          TEXT PRIMARY KEY,  -- Clerk user ID (user_xxx)
  email       TEXT NOT NULL UNIQUE,
  name        TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ── Products ──────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS products (
  id          SERIAL PRIMARY KEY,
  slug        TEXT NOT NULL UNIQUE,
  title       TEXT NOT NULL,
  description TEXT,
  category    TEXT NOT NULL,  -- 'desk', 'tabletop', 'home'
  material    TEXT NOT NULL,  -- 'PLA', 'PETG', 'PLA+', etc.
  price_cents INTEGER NOT NULL,
  in_stock    BOOLEAN DEFAULT TRUE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ── Orders ────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS orders (
  id              SERIAL PRIMARY KEY,
  user_id         TEXT NOT NULL REFERENCES users(id),
  status          TEXT NOT NULL DEFAULT 'pending',
  -- Status flow: pending → confirmed → printing → printed → shipped → delivered
  -- Custom flow: pending → quoted → confirmed → printing → printed → shipped → delivered

  type            TEXT NOT NULL DEFAULT 'catalog', -- 'catalog' | 'custom'

  -- Shipping
  shipping_name   TEXT,
  shipping_email  TEXT,
  shipping_addr   TEXT,
  shipping_city   TEXT,
  shipping_state  TEXT,
  shipping_zip    TEXT,
  shipping_country TEXT DEFAULT 'US',

  -- Pricing
  subtotal_cents  INTEGER DEFAULT 0,
  shipping_cents  INTEGER DEFAULT 0,
  total_cents     INTEGER DEFAULT 0,

  -- Print tracking
  printer_job_id  TEXT,   -- job ID from Moonraker/Klipper
  printer_id      TEXT,   -- 'k2plus' | 'centauri'

  -- Stripe
  stripe_payment_id TEXT,

  notes           TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ── Order Items ───────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS order_items (
  id          SERIAL PRIMARY KEY,
  order_id    INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id  INTEGER REFERENCES products(id),  -- null for custom orders
  title       TEXT NOT NULL,
  quantity    INTEGER NOT NULL DEFAULT 1,
  price_cents INTEGER NOT NULL,
  material    TEXT,
  color       TEXT,
  notes       TEXT
);

-- ── Custom Upload Quotes ───────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS quotes (
  id            SERIAL PRIMARY KEY,
  user_id       TEXT NOT NULL REFERENCES users(id),
  order_id      INTEGER REFERENCES orders(id),  -- set when quote is accepted
  status        TEXT NOT NULL DEFAULT 'pending', -- pending | quoted | accepted | rejected
  filename      TEXT NOT NULL,
  file_url      TEXT NOT NULL,  -- S3/Vercel Blob URL
  file_type     TEXT NOT NULL,  -- 'stl' | '3mf' | 'obj'
  notes         TEXT,           -- customer notes
  material      TEXT,
  color         TEXT,
  quantity      INTEGER DEFAULT 1,
  quoted_cents  INTEGER,        -- admin fills this in
  admin_notes   TEXT,
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ── Seed catalog products ──────────────────────────────────────────────────────
INSERT INTO products (slug, title, description, category, material, price_cents) VALUES
  ('magsafe-desk-stand',    'MagSafe Desk Stand',     'Magnetic charging stand for your desk', 'desk',      'PLA+', 1200),
  ('commander-deck-box',    'Commander Deck Box',     'Holds 100+ sleeved cards with dividers', 'tabletop', 'PETG', 2800),
  ('cable-clip-organizer',  'Cable Clip Organizer',   'Keep cables tidy on any surface',        'home',     'PLA',  600),
  ('wall-mount-hook-set',   'Wall Mount Hook Set',    'Set of 3 wall hooks with mounting plate','home',     'PLA+', 800),
  ('dice-tray-insert',      'Dice Tray Insert',       'Felt-lined tray for rolling dice',       'tabletop', 'PETG', 1600),
  ('phone-stand',           'Phone Stand',            'Angled stand for desk use',              'desk',     'PLA+', 900)
ON CONFLICT (slug) DO NOTHING;

-- ── Updated_at trigger ────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE OR REPLACE TRIGGER quotes_updated_at
  BEFORE UPDATE ON quotes
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
