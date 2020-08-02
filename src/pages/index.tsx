import React from 'react'
import Container from '@material-ui/core/Container'

import ListItem from '../components/ListItem'
import styles from './index.module.scss'

export default function Index(): JSX.Element {
  return (
    <Container maxWidth="md">
      <ListItem />
    </Container>
  )
}
