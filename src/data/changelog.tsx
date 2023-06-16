import React from "react"

import styled from "@emotion/styled"

const Link = styled.a`
  &,
  :visited {
    color: var(--accent-color);
  }
  :hover {
    text-decoration: underline;
  }
`

const RedditUser = ({ user }: { user: string }) => (
  <Link href={`https://www.reddit.com/user/${user}`}>u/{user}</Link>
)

export interface ChangelogVersion {
  version: string
  description?: string
  changes?: (string | JSX.Element)[]
}

export const changelog: ChangelogVersion[] = [
  {
    version: "0.1.0",
    description: "The initial state of this project.",
  },
]
