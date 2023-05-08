import React from 'react'
import {
  Box,
  Paper,
  PaperProps,
  Skeleton,
  styled,
  Typography,
} from '@mui/material'
import Icon from '../row_renderers/utils/Icon'
import { StyledComponent } from '@emotion/styled'

export type ActionRequiredCardProps =
  | {
      title: React.ReactNode
      description: React.ReactNode
      actionNode: React.ReactNode
      iconType: string
      count: number
      isLoading?: false
    }
  | { isLoading: true }

const ActionRequiredCardContainer: StyledComponent<PaperProps> = styled(Paper, {
  label: 'ActionRequiredCardContainer',
})(({ theme }) => ({
  padding: `${theme.spacing(2.5)} ${theme.spacing(4)}`,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: theme.spacing(4),
}))

export function ActionRequiredCard(props: ActionRequiredCardProps) {
  if (props.isLoading) {
    return <LoadingActionRequiredCard />
  }
  const { title, description, iconType, count, actionNode } = props
  return (
    <ActionRequiredCardContainer>
      <Box sx={{ textAlign: 'center', minWidth: '100px' }}>
        <Icon type={iconType} />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="headline3" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography variant={'smallText1'} sx={{ my: 1, color: 'grey.700' }}>
          {count} File{count != 1 ? 's' : ''}
        </Typography>
        <Typography variant={'smallText1'}>{description}</Typography>
      </Box>
      <Box sx={{ textAlign: 'center', maxWidth: '200px' }}>{actionNode}</Box>
    </ActionRequiredCardContainer>
  )
}

export function LoadingActionRequiredCard() {
  return (
    <ActionRequiredCardContainer>
      <Skeleton variant="rectangular" width={136} height={74} />
      <div>
        <Skeleton width={320} />
        <Skeleton width={100} />
      </div>
      <Skeleton variant="rectangular" width={160} height={33} />
    </ActionRequiredCardContainer>
  )
}
