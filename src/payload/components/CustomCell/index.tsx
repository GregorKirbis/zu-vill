import React from 'react'
import type { Props } from 'payload/components/views/Cell'

const baseClass = 'custom-cell'

const CustomCell: React.FC<Props> = (props) => {
  const { field, colIndex, collection, cellData, rowData } = props

  return <span className={baseClass}>{rowData?.parent && "|-> "}{cellData}</span>
}

export default CustomCell;
