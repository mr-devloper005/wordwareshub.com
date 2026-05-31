import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: 'Local signup page for this public site.' })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[var(--editable-container)] items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1fr] lg:px-8">
          <div className="rounded-[2rem] border border-[var(--editable-border)] bg-[var(--slot4-surface-bg)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.10)] backdrop-blur sm:p-8">
            <h1 className="text-3xl font-black tracking-[-0.05em]">Create account</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 text-sm opacity-70">Already have an account? <Link href="/login" className="font-black underline-offset-4 hover:underline">Login</Link></p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] opacity-60">Site access</p>
            <h2 className="mt-5 max-w-xl text-5xl font-black leading-[0.98] tracking-[-0.07em] sm:text-6xl">A bolder entry point for modern content sites.</h2>
            <p className="mt-6 max-w-lg text-sm leading-8 opacity-70">This sign up screen is presentational and safe for public templates. It gives the navbar real destinations while staying browser-local for testing.</p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
