import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] px-4 py-14 text-[var(--slot4-page-text)] sm:px-6 lg:px-8">
        <section className="mx-auto max-w-[var(--editable-container)]">
          <article className="overflow-hidden rounded-[2.6rem] border border-[var(--editable-border)] bg-[var(--slot4-surface-bg)] shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 sm:p-10 lg:p-14">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">{pagesContent.about.badge}</p>
                <h1 className="mt-5 text-4xl font-black tracking-[-0.06em] sm:text-5xl lg:text-6xl">About {SITE_CONFIG.name}</h1>
                <p className="mt-6 max-w-2xl text-base leading-8 opacity-75">{pagesContent.about.description}</p>
                <div className="mt-8 space-y-4 text-sm leading-8 opacity-80">
                  {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
              <div className="border-t border-[var(--editable-border)] bg-[var(--slot4-panel-bg)] p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">Editorial Principles</p>
                <div className="mt-6 space-y-4">
                  {pagesContent.about.values.map((value) => (
                    <div key={value.title} className="rounded-[1.4rem] border border-[var(--editable-border)] bg-white/75 p-5">
                      <h2 className="text-lg font-black tracking-[-0.03em]">{value.title}</h2>
                      <p className="mt-2 text-sm leading-7 opacity-75">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </EditableSiteShell>
  )
}
