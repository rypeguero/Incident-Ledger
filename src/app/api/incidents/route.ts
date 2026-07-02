import { NextResponse } from 'next/server';
import { query } from '@/app/lib/db';

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
  const category = searchParams.get('category')?.trim().toLowerCase();

  try {
    const params: string[] = [];
    let sql = `
      SELECT *
      FROM incidents
    `;

    if (category) {
      if (!validCategories.includes(category as (typeof validCategories)[number])) {
        return NextResponse.json({ error: 'Invalid category' }, { status: 400 });
      }

      params.push(category);
      sql += ' WHERE category = $1';
    }

    sql += ' ORDER BY incident_date DESC, created_at DESC';

    const { rows } = await query(sql, params);

    return NextResponse.json({ incidents: rows }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Database query failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const body = (await request.json()) as IncidentRequestBody;

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

  try {
    const { rows } = await query(
      `
        INSERT INTO incidents (
          category,
          title,
          description,
          location,
          created_by,
          urgency,
          status,
          incident_date
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *
      `,
      [category, title, description, location, createdBy, urgency, status, incidentDate],
    );

    return NextResponse.json({ incident: rows[0] }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Database insert failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
