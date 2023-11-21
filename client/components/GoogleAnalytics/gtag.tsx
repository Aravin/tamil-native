export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GTAG;

export const pageview = url => {
  (window as any).gtag("config", GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value }) => {
  (window as any).gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}