import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Independent Journal of Ideas and Stories',
      description: 'A modern publication for essays, commentary, visuals, and practical guides presented in a premium editorial format.',
      openGraphTitle: 'Independent Journal of Ideas and Stories',
      openGraphDescription: 'Read thoughtful long-form writing, visual narratives, and curated resources in one editorial destination.',
      keywords: ['independent journal', 'editorial publication', 'long form writing', 'commentary and ideas'],
    },
    hero: {
      // badge: 'Independent editorial publication',
      title: ['Stories worth your', 'full attention.'],
      description: 'Read essays, interviews, explainers, and visual stories designed for depth, clarity, and repeat visits.',
      primaryCta: { label: 'Read latest stories', href: '/article' },
      secondaryCta: { label: 'Explore visuals', href: '/image' },
      searchPlaceholder: 'Search stories, visuals, listings, and more',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Latest posts shape the visual identity of the homepage.',
      featureCardDescription: 'Recent images and stories stay at the center of the experience without changing any core platform behavior.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built as a complete editorial publication, not a generic content feed.',
      paragraphs: [
        'We publish writing for readers who want context, not just headlines. Each page is designed to support focused reading and clear navigation.',
        'From commentary and explainers to visual features and curated references, the experience keeps related pieces connected in one editorial flow.',
        'No matter where a reader enters, they can continue into related topics with consistent structure and a strong publication rhythm.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Reading-first homepage with stronger emphasis on stories and imagery.',
        'Connected sections for articles, visuals, listings, and supporting resources.',
        'Cleaner browsing rhythm designed to make exploration feel easier.',
        'Lightweight interactions that keep the experience fast and readable.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'See visuals', href: '/image' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Start with one article and follow the thread.',
      description: 'Explore our latest editorial pieces, visual stories, and reference collections in a single reading-first experience.',
      primaryCta: { label: 'Browse Articles', href: '/article' },
      secondaryCta: { label: 'Contact Sales', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'About The Publication',
    title: 'A modern article publication built for depth, clarity, and lasting relevance.',
    description: `${slot4BrandConfig.siteName} publishes thoughtful editorial work with a focus on strong structure, clear language, and meaningful context.`,
    paragraphs: [
      'Our mission is simple: publish writing people return to, not content they scroll past.',
      'Every section is designed to support serious reading, from long-form features to visual essays and reference-driven pieces.',
      'We treat design as editorial infrastructure: layout, rhythm, and hierarchy are part of how the story is understood.',
    ],
    values: [
      {
        title: 'Editorial Discipline',
        description: 'We focus on structure, verification, and clarity so each article feels deliberate and useful.',
      },
      {
        title: 'Reader Experience',
        description: 'Typography, spacing, and navigation are tuned for long-form attention and low-friction exploration.',
      },
      {
        title: 'Connected Knowledge',
        description: 'Stories, resources, and profiles connect in one publication flow so ideas remain linked and discoverable.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Contact the editorial team for submissions, partnerships, and publication support.',
    description: 'Tell us what you are working on and we will route your message to the right editorial lane.',
    formTitle: 'Write to the editorial desk',
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
