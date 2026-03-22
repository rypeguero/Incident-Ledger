'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateIncidentPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    category: 'software',
    title: '',
    incidentDate: '',
    createdBy: '',
    location: '',
    description: '',
    urgency: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/incidents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to create incident');
      }

      setIsSubmitted(true);

      // Keep the success state visible briefly so the submission feels intentional.
      setTimeout(() => {
        router.push('/Incidents');
      }, 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      {isSubmitted ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-gradient-to-r from-slate-900 via-emerald-900/30 to-slate-900 border border-emerald-500/20 rounded-xl p-12 text-center max-w-2xl">
            <div className="mb-4 text-6xl">OK</div>
            <h1 className="text-3xl font-bold mb-4">Thank You for Your Submission</h1>
            <p className="text-slate-300 text-lg mb-6">
              A member of the team will review your incident shortly.
            </p>
            <p className="text-sm text-slate-400">
              Redirecting to Incidents page in a moment...
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Create New Incident</h1>
            <p className="text-sm text-slate-400">Report and document a new incident</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="category" className="block text-sm font-semibold mb-2 text-slate-100">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/50 transition"
                >
                  <option value="software">Software</option>
                  <option value="building">Building</option>
                  <option value="custodial">Custodial</option>
                  <option value="healthcare">Healthcare</option>
                </select>
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-semibold mb-2 text-slate-100">
                  Incident Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Short incident title"
                  className="w-full px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/50 transition"
                />
              </div>

              <div>
                <label htmlFor="incidentDate" className="block text-sm font-semibold mb-2 text-slate-100">
                  Incident Date
                </label>
                <input
                  type="date"
                  id="incidentDate"
                  name="incidentDate"
                  value={formData.incidentDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/50 transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="createdBy" className="block text-sm font-semibold mb-2 text-slate-100">
                  Created By
                </label>
                <input
                  type="text"
                  id="createdBy"
                  name="createdBy"
                  value={formData.createdBy}
                  onChange={handleChange}
                  placeholder="Name or department"
                  className="w-full px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/50 transition"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-semibold mb-2 text-slate-100">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g., Production, Building A, Room 2"
                  className="w-full px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/50 transition"
                />
              </div>
            </div>

            <div>
              <label htmlFor="urgency" className="block text-sm font-semibold mb-2 text-slate-100">
                Urgency Status
              </label>
              <select
                id="urgency"
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className={`w-full md:w-1/2 px-4 py-2 border rounded-lg font-medium focus:outline-none focus:ring-1 transition ${
                  formData.urgency === 'low'
                    ? 'bg-emerald-900/30 border-emerald-600/50 text-emerald-200 focus:border-emerald-400 focus:ring-emerald-400/50'
                    : formData.urgency === 'medium'
                      ? 'bg-amber-900/30 border-amber-600/50 text-amber-200 focus:border-amber-400 focus:ring-amber-400/50'
                      : formData.urgency === 'high'
                        ? 'bg-orange-900/30 border-orange-600/50 text-orange-200 focus:border-orange-400 focus:ring-orange-400/50'
                        : formData.urgency === 'critical'
                          ? 'bg-red-900/30 border-red-600/50 text-red-200 focus:border-red-400 focus:ring-red-400/50'
                          : 'bg-slate-800/50 border-slate-600/50 text-white focus:border-indigo-400 focus:ring-indigo-400/50'
                }`}
              >
                <option value="" className="bg-slate-900 text-slate-300">
                  Select urgency level
                </option>
                <option value="low" className="bg-slate-900 text-emerald-300">
                  Low - Can be addressed in regular schedule
                </option>
                <option value="medium" className="bg-slate-900 text-amber-300">
                  Medium - Should be addressed soon
                </option>
                <option value="high" className="bg-slate-900 text-orange-300">
                  High - Requires prompt attention
                </option>
                <option value="critical" className="bg-slate-900 text-red-300">
                  Critical - Immediate action required
                </option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-semibold mb-2 text-slate-100">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the incident in detail..."
                rows={8}
                className="w-full px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/50 transition resize-none"
              />
            </div>

            {error && (
              <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {error}
              </div>
            )}

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white font-semibold px-8 py-3 shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition-colors border border-indigo-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Incident'}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
