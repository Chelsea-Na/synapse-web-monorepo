import React from 'react'
import DownloadDetails, {
  DownloadDetailsProps,
} from '../../../src/components/download_list/DownloadDetails'
import { act, render, screen } from '@testing-library/react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'

const renderComponent = async (props: DownloadDetailsProps) => {
  return await act(async () => {
    render(<DownloadDetails {...props} />, {
      wrapper: createWrapper(),
    })
  })
}

describe('it performs all functionality', () => {
  const fn = require('../../../src/utils/functions/testDownloadSpeed')
  fn.testDownloadSpeed = jest.fn().mockResolvedValue(20)
  const props: DownloadDetailsProps = {
    numFiles: 3,
    numBytes: 10,
  }
  it('renders without crashing', async () => {
    await renderComponent(props)
    const wrapper = document.querySelector('span')
    expect(wrapper).toHaveClass('download-details-container')
  })
  it('renders with all the values set', async () => {
    await renderComponent(props)
    expect(
      document.querySelectorAll('svg.SRC-primary-text-color'),
    ).toHaveLength(3)
    expect(screen.getByText(`${props.numFiles} files`)).toBeInTheDocument()
  })
  it('renders with the numFiles is 0', async () => {
    await renderComponent({ ...props, numFiles: 0 })
    expect(document.querySelectorAll('svg.SRC-inactive')).toHaveLength(1)
  })
  it('renders with undefined bytes', async () => {
    await renderComponent({ ...props, numBytes: undefined })
    expect(screen.queryByTestId('numBytesUI')).not.toBeInTheDocument()
    expect(
      screen.queryByTestId('downloadTimeEstimateUI'),
    ).not.toBeInTheDocument()
  })
  it('does not render size/time when 0 bytes', async () => {
    await renderComponent({ ...props, numBytes: 0 })
    expect(screen.queryByTestId('numBytesUI')).not.toBeInTheDocument()
    expect(
      screen.queryByTestId('downloadTimeEstimateUI'),
    ).not.toBeInTheDocument()
  })
})
