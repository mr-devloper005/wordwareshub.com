'use client'

import { FileText, Mail, MessageSquare, Sparkles } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function ContactPage() {
  const lanes = [
    {
      icon: FileText,
      title: 'Article Pitches',
      body: 'Send feature ideas, op-eds, interviews, and long-form concepts with a short summary and expected angle.',
    },
    {
      icon: MessageSquare,
      title: 'Editorial Support',
      body: 'Reach out for guidance on publication format, structure, or how to position your story for readers.',
    },
    {
      icon: Sparkles,
      title: 'Partnerships',
      body: 'Discuss collaborations, sponsored features, and content initiatives aligned with the publication tone.',
    },
    {
      icon: Mail,
      title: 'General Contact',
      body: 'For everything else, send a direct message and we will route it to the appropriate editorial lane.',
    },
  ]

  return (
    <EditableSiteShell className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
      <main className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8">
        <section className="rounded-[2.4rem] border border-[var(--editable-border)] bg-[var(--slot4-surface-bg)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">{pagesContent.contact.eyebrow}</p>
              <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">{pagesContent.contact.title}</h1>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-[var(--slot4-muted-text)]">{pagesContent.contact.description}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {lanes.map((lane) => (
                  <div key={lane.title} className="rounded-[1.35rem] border border-[var(--editable-border)] bg-[var(--slot4-panel-bg)] p-5">
                    <lane.icon className="h-5 w-5" />
                    <h2 className="mt-3 text-lg font-black tracking-[-0.02em]">{lane.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-[var(--slot4-muted-text)]">{lane.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-[var(--editable-border)] bg-white p-6 sm:p-8">
              <h2 className="text-2xl font-black tracking-[-0.03em]">{pagesContent.contact.formTitle}</h2>
              <p className="mt-2 text-sm leading-7 text-[var(--slot4-muted-text)]">Include links and context if your message references a specific article or section.</p>
              <EditableContactLeadForm />
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
