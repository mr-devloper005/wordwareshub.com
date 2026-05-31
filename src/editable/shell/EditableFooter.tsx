import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'

export function EditableFooter() {
  const footerVars = { '--editable-footer-bg': 'var(--slot4-panel-bg, #e5eee4)', '--editable-footer-text': 'var(--slot4-page-text, #18211d)' } as CSSProperties
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const year = new Date().getFullYear()

  return (
    <footer style={footerVars} className="relative border-t border-[var(--editable-border)] bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.45),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(to_right,var(--slot4-accent-soft),var(--slot4-accent-fill),var(--slot4-accent-soft))]" />
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <img src="/favicon.png?v=20260413" alt={SITE_CONFIG.name} className="h-14 w-14 object-contain" />
            <span className="text-lg font-black tracking-[-0.04em]">{SITE_CONFIG.name}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 opacity-70">{globalContent.footer?.description || SITE_CONFIG.description}</p>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] opacity-55">Sections</h3>
          <div className="mt-4 grid gap-2">
            {taskLinks.map((task) => (
              <Link key={task.key} href={task.route} className="inline-flex items-center gap-2 text-sm font-bold opacity-75 hover:opacity-100">
                {task.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] opacity-55">Publication</h3>
          <div className="mt-4 grid gap-2">
            {[['About', '/about'], ['Contact', '/contact']].map(([label, href]) => (
              <Link key={href} href={href} className="text-sm font-bold opacity-75 hover:opacity-100">{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--editable-border)] px-4 py-5 text-center text-xs font-bold opacity-55">
        (c) {year} {SITE_CONFIG.name}. All rights reserved.
      </div>
    </footer>
  )
}
