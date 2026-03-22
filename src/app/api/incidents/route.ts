import { NextResponse } from 'next/server';
import { supabase } from '@/app/lib/supabase';

const validCategories = ['software', 'building', 'custodial', 'healthcare'] as const;
const validUrgencies = ['low', 'medium', 'high', 'critical'] as const;
const validStatuses = ['open', 'investigating', 'resolved'] as const;

type IncidentRequestBody = {
  category?: string;
  title?: string;
  description?: string;
  location?: string;
  createdBy?: string;
  urgency?: string;
  status?: string;
  incidentDate?: string;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  // Reuse one query path for both full-list and filtered requests.
  let query = supabase
    .from('incidents')
    .select('*')
    .order('incident_date', { ascending: false })
    .order('created_at', { ascending: false });

  if (category) {
    query = query.eq('category', category.toLowerCase());
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ incidents: data }, { status: 200 });
}

export async function POST(request: Request) {
  const body = (await request.json()) as IncidentRequestBody;

  // Normalize incoming values before validating against the database rules.
  const category = body.category?.trim().toLowerCase();
  const title = body.title?.trim();
  const description = body.description?.trim();
  const location = body.location?.trim() || null;
  const createdBy = body.createdBy?.trim();
  const urgency = body.urgency?.trim().toLowerCase();
  const status = body.status?.trim().toLowerCase() || 'open';
  const incidentDate = body.incidentDate?.trim();

  if (!category || !validCategories.includes(category as (typeof validCategories)[number])) {
    return NextResponse.json({ error: 'Invalid category' }, { status: 400 });
  }

  if (!title) {
    return NextResponse.json({ error: 'Title is required' }, { status: 400 });
  }

  if (!description) {
    return NextResponse.json({ error: 'Description is required' }, { status: 400 });
  }

  if (!createdBy) {
    return NextResponse.json({ error: 'Created by is required' }, { status: 400 });
  }

  if (!urgency || !validUrgencies.includes(urgency as (typeof validUrgencies)[number])) {
    return NextResponse.json({ error: 'Invalid urgency' }, { status: 400 });
  }

  if (!validStatuses.includes(status as (typeof validStatuses)[number])) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
  }

  if (!incidentDate) {
    return NextResponse.json({ error: 'Incident date is required' }, { status: 400 });
  }

  // Translate the frontend's camelCase payload to the table's snake_case columns.
  const { data, error } = await supabase
    .from('incidents')
    .insert({
      category,
      title,
      description,
      location,
      created_by: createdBy,
      urgency,
      status,
      incident_date: incidentDate,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ incident: data }, { status: 201 });
}
