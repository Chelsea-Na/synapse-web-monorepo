import React, { useId, useMemo } from 'react'
import {
  Box,
  FormControl,
  InputBase,
  TextFieldProps as MuiTextFieldProps,
  Typography,
  useTheme,
} from '@mui/material'

type TextFieldProps = Pick<
  MuiTextFieldProps,
  | 'autoComplete'
  | 'autoFocus'
  | 'disabled'
  | 'error'
  | 'fullWidth'
  | 'id'
  | 'inputProps'
  | 'label'
  | 'maxRows'
  | 'minRows'
  | 'multiline'
  | 'onBlur'
  | 'onChange'
  | 'placeholder'
  | 'required'
  | 'sx'
  | 'type'
  | 'value'
> & { noWrapInFormControl?: boolean }

/**
 * A styled text field built using MUI components and designed to match the Sage Design System (SDS) input fields.
 */
export default function TextField(props: TextFieldProps) {
  const id = useId()
  const { palette } = useTheme()
  const { noWrapInFormControl, ...rest } = props
  const Wrapper = useMemo(
    () =>
      noWrapInFormControl
        ? (props: React.PropsWithChildren<object>) => (
            <React.Fragment>{props.children}</React.Fragment>
          )
        : (props: React.PropsWithChildren<object>) => (
            <FormControl fullWidth sx={{ my: 1 }}>
              {props.children}
            </FormControl>
          ),
    [noWrapInFormControl],
  )
  return (
    <Wrapper>
      {props.label && (
        <Typography
          component={'label'}
          htmlFor={props.id || id}
          variant={'body1'}
          sx={{ fontWeight: 700, mb: '4px' }}
        >
          {props.label}
          {props.required ? (
            <Box component={'span'} sx={{ ml: '3px', color: 'secondary.main' }}>
              {'*'}
            </Box>
          ) : (
            <></>
          )}
        </Typography>
      )}
      <InputBase
        {...rest}
        id={props.id || id}
        sx={{
          backgroundColor: 'grey.200',
          px: 2,
          py: 1,
          ...props.sx,
          '&.Mui-focused': {
            backgroundColor: palette.background.default,
            outline: `1px solid ${palette.primary.main}`,
          },
        }}
      ></InputBase>
    </Wrapper>
  )
}
