create table if not exists companies (
  id uuid primary key default gen_random_uuid(),
  ticker text unique not null,
  name text not null,
  category text,
  thesis text,
  watchlist boolean default false,
  created_at timestamptz default now()
);

create table if not exists daily_snapshots (
  id uuid primary key default gen_random_uuid(),
  ticker text not null references companies(ticker),
  snapshot_date date not null default current_date,
  price numeric,
  day_change_pct numeric,
  ytd_pct numeric,
  revenue_growth numeric,
  gross_margin numeric,
  moat_score numeric,
  infrastructure_score numeric,
  monster_score numeric,
  notes text,
  unique(ticker, snapshot_date)
);

create table if not exists news_items (
  id uuid primary key default gen_random_uuid(),
  ticker text not null references companies(ticker),
  headline text not null,
  source text,
  url text,
  published_at timestamptz,
  summary text,
  sentiment text,
  created_at timestamptz default now()
);

create table if not exists radar_candidates (
  id uuid primary key default gen_random_uuid(),
  ticker text unique not null,
  name text,
  reason text,
  monster_score numeric,
  status text default 'new', -- new, added, ignored
  created_at timestamptz default now()
);
