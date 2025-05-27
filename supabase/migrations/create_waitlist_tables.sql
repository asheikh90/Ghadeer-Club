/*
  # Create waitlist tables

  1. New Tables
    - `waitlist_entries`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `email` (text, not null, unique)
      - `phone` (text)
      - `wants_sms_updates` (boolean, default false)
      - `area` (text)
      - `preferred_game` (text)
      - `created_at` (timestamptz, default now())
    - `quiz_responses`
      - `id` (uuid, primary key)
      - `waitlist_entry_id` (uuid, foreign key to waitlist_entries.id)
      - `gamer_type` (text)
      - `age_group` (text)
      - `play_frequency` (text)
      - `preferred_platform` (text)
      - `interests` (text[])
      - `created_at` (timestamptz, default now())
  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to read/write their own data
*/

-- Create waitlist_entries table
CREATE TABLE IF NOT EXISTS waitlist_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  phone text,
  wants_sms_updates boolean DEFAULT false,
  area text,
  preferred_game text,
  created_at timestamptz DEFAULT now()
);

-- Create quiz_responses table
CREATE TABLE IF NOT EXISTS quiz_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  waitlist_entry_id uuid REFERENCES waitlist_entries(id) ON DELETE CASCADE,
  gamer_type text,
  age_group text,
  play_frequency text,
  preferred_platform text,
  interests text[],
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE waitlist_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_responses ENABLE ROW LEVEL SECURITY;

-- Create policies for waitlist_entries
CREATE POLICY "Anyone can insert into waitlist_entries"
  ON waitlist_entries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read their own waitlist entries"
  ON waitlist_entries
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (SELECT auth.uid() FROM auth.users WHERE email = waitlist_entries.email));

-- Create policies for quiz_responses
CREATE POLICY "Anyone can insert into quiz_responses"
  ON quiz_responses
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read their own quiz responses"
  ON quiz_responses
  FOR SELECT
  TO authenticated
  USING (waitlist_entry_id IN (
    SELECT id FROM waitlist_entries 
    WHERE email IN (
      SELECT email FROM auth.users WHERE auth.uid() = auth.uid()
    )
  ));