import { useLiveQuery } from 'next-sanity/preview'

import { IndexPage, type IndexPageProps } from 'components/pages/home/IndexPage'
import {
  indexQuery,
  type Post,
  type Settings,
  settingsQuery,
} from 'lib/sanity.queries'

export function PreviewIndexPage(props: IndexPageProps) {
  const [posts, loadingPosts] = useLiveQuery<Post[]>(props.posts, indexQuery)
  const [settings, loadingSettings] = useLiveQuery<Settings>(
    props.settings,
    settingsQuery,
  )

  return (
    <IndexPage
      preview
      loading={loadingPosts || loadingSettings}
      posts={posts || []}
      settings={settings || {}}
    />
  )
}