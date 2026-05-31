import type { TaskKey } from '@/lib/site-config'

export type TaskPageVoice = {
  eyebrow: string
  headline: string
  description: string
  filterLabel: string
  secondaryNote: string
  chips: string[]
}

export const taskPageVoices = {
  article: {
    eyebrow: 'Reading desk',
    headline: 'Long-form reporting, essays, and editorial features.',
    description: 'This section is the core publication desk for essays, commentary, guides, and narrative-driven article work.',
    filterLabel: 'Choose article topic',
    secondaryNote: 'Reading surfaces need space, hierarchy, and fewer distractions.',
    chips: ['Editorial pacing', 'Topic filters', 'Long-read friendly'],
  },
  classified: {
    eyebrow: 'Community desk',
    headline: 'Announcements, notices, and practical updates from the community.',
    description: 'This stream handles concise community posts that complement the editorial archive with fast-moving updates.',
    filterLabel: 'Filter classified category',
    secondaryNote: 'Prioritize urgency, short summaries, and direct browsing.',
    chips: ['Fast scan', 'Offers', 'Action cues'],
  },
  sbm: {
    eyebrow: 'Reference desk',
    headline: 'Curated links and references organized for ongoing research.',
    description: 'Browse selected resources, source links, and useful references arranged as editorial research shelves.',
    filterLabel: 'Filter collection',
    secondaryNote: 'Curated resources need grouping and calm metadata.',
    chips: ['Collections', 'Resources', 'Reference flow'],
  },
  profile: {
    eyebrow: 'People and profiles',
    headline: 'Profiles of contributors, voices, and featured entities.',
    description: 'Profile pages highlight people and organizations connected to stories across the publication.',
    filterLabel: 'Filter profile category',
    secondaryNote: 'Make identity and credibility visible before the grid begins.',
    chips: ['Identity first', 'Trust cues', 'Creator/business cards'],
  },
  pdf: {
    eyebrow: 'Document library',
    headline: 'Reports, whitepapers, and downloadable editorial documents.',
    description: 'Use this library for structured documents that support and extend article narratives.',
    filterLabel: 'Filter document type',
    secondaryNote: 'Document surfaces need archive cues, file context, and clear browsing.',
    chips: ['Documents', 'Guides', 'Archive ready'],
  },
  listing: {
    eyebrow: 'Directory desk',
    headline: 'Directory entries that support editorial context and discovery.',
    description: 'This section presents directory-style records with useful metadata and clear pathways to related stories.',
    filterLabel: 'Filter business category',
    secondaryNote: 'Prioritize comparison, location, and direct action paths.',
    chips: ['Directory', 'Compare', 'Business discovery'],
  },
  image: {
    eyebrow: 'Visual gallery',
    headline: 'Visual storytelling and image-led editorial features.',
    description: 'A gallery-first section for photographic narratives, illustrations, and image-rich storytelling formats.',
    filterLabel: 'Filter visual category',
    secondaryNote: 'Let images carry the page before long text does.',
    chips: ['Gallery', 'Visual-first', 'Portfolio mood'],
  },
} satisfies Record<TaskKey, TaskPageVoice>
